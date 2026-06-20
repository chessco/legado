import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VaultService {
  constructor(private prisma: PrismaService) {}

  async createAsset(data: { projectId: string, type: string, fileUrl: string, bucket: string, metadata?: any }) {
    return this.prisma.asset.create({ data });
  }

  async findAllAssetsByProject(projectId: string) {
    return this.prisma.asset.findMany({
      where: { projectId }
    });
  }

  async removeAsset(id: string) {
    return this.prisma.asset.delete({
      where: { id }
    });
  }
}
