import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagEntity } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>, // Repository of TagEntity datatype
  ) {}

  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }
}

// Repository - special wrapper helps to work with database
// Injectrepository like in app.controller(similar)
