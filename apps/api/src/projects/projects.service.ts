import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.project.findMany({
      include: { assets: true, interviews: true }
    });
  }

  async findOne(id: string) {
    return this.prisma.project.findUnique({
      where: { id },
      include: { assets: true, interviews: true }
    });
  }

  async create(data: { userId: string, type: string, title: string, description?: string }) {
    return this.prisma.project.create({
      data
    });
  }

  async update(id: string, data: any) {
    return this.prisma.project.update({
      where: { id },
      data
    });
  }

  async remove(id: string) {
    return this.prisma.project.delete({
      where: { id }
    });
  }
}
