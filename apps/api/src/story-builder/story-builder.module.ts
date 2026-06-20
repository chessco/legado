import { Module } from '@nestjs/common';
import { StoryBuilderService } from './story-builder.service';
import { StoryBuilderController } from './story-builder.controller';

@Module({
  providers: [StoryBuilderService],
  controllers: [StoryBuilderController]
})
export class StoryBuilderModule {}
