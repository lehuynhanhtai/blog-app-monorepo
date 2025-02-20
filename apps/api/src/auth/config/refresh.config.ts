import { registerAs } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';

export default registerAs(
  'refresh-jwt',
  (): JwtSignOptions => ({
    secret: process.env.REFRESS_JWT_SECRET,
    expiresIn: process.env.REFRESS_JWT_EXPIRES_IN,
  }),
);
