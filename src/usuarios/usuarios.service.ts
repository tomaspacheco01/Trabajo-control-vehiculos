import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async encontrarPorEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async crearUsuario(data: { nombre: string; email: string; password: string; rol: 'DUENIO' | 'INSPECTOR' | 'ADMIN' }) {
    const hash = await bcrypt.hash(data.password, 10);
    return this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        email: data.email,
        password: hash,
        rol: data.rol,
      },
    });
  }

  async listar() {
    return this.prisma.usuario.findMany();
  }
}
