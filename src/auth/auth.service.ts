import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usuariosService.encontrarPorEmail(email);
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const passwordOk = await bcrypt.compare(pass, user.password);
    if (!passwordOk) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // devolvemos sin password
    const { password, ...resto } = user;
    return resto;
  }

  async login(email: string, pass: string) {
    const user = await this.validateUser(email, pass);
    const payload = { sub: user.id, email: user.email, rol: user.rol };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
