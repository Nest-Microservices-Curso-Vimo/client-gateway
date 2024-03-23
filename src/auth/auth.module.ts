import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { NATS_SERVICES } from 'src/config';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [AuthController],
  providers: [],
  imports: [NatsModule],
})
export class AuthModule {}
