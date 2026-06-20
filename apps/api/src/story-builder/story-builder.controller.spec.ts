import { Test, TestingModule } from '@nestjs/testing';
import { StoryBuilderController } from './story-builder.controller';

describe('StoryBuilderController', () => {
  let controller: StoryBuilderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoryBuilderController],
    }).compile();

    controller = module.get<StoryBuilderController>(StoryBuilderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
