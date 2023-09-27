import { Test, TestingModule } from '@nestjs/testing';
import { ChampionshipGateway } from './championship.gateway';

describe('ChampionshipGateway', () => {
  let gateway: ChampionshipGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampionshipGateway],
    }).compile();

    gateway = module.get<ChampionshipGateway>(ChampionshipGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
