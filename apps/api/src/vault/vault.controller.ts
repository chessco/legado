import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { VaultService } from './vault.service';

@Controller('vault')
export class VaultController {
  constructor(private readonly vaultService: VaultService) {}

  @Post('assets')
  createAsset(@Body() data: { projectId: string, type: string, fileUrl: string, bucket: string, metadata?: any }) {
    return this.vaultService.createAsset(data);
  }

  @Get('projects/:projectId/assets')
  findAllAssetsByProject(@Param('projectId') projectId: string) {
    return this.vaultService.findAllAssetsByProject(projectId);
  }

  @Delete('assets/:id')
  removeAsset(@Param('id') id: string) {
    return this.vaultService.removeAsset(id);
  }
}
