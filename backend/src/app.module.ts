import { Module } from '@nestjs/common';
import { ChampionshipGateway } from './championship/championship.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ChampionshipGateway],
})
export class AppModule {}
