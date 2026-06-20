import { Test, TestingModule } from '@nestjs/testing';
import { StoryBuilderService } from './story-builder.service';

describe('StoryBuilderService', () => {
  let service: StoryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoryBuilderService],
    }).compile();

    service = module.get<StoryBuilderService>(StoryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
