import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) { }
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto })
    // return 'This action adds a new article';
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } })
    // return `This action returns all articles`;
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } })
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } })
    // return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    // return `This action updates a #${id} article`;
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    })
  }

  remove(id: number) {
    // return `This action removes a #${id} article`;
    return this.prisma.article.delete({ where: { id } })
  }
}