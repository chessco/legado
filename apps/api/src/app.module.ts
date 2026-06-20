import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { VaultModule } from './vault/vault.module';
import { InterviewsModule } from './interviews/interviews.module';
import { StoryBuilderModule } from './story-builder/story-builder.module';
import { MarketplaceModule } from './marketplace/marketplace.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    ProjectsModule,
    VaultModule,
    InterviewsModule,
    StoryBuilderModule,
    MarketplaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
