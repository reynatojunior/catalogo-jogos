import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {

   constructor(
    @InjectRepository(Game)
    private readonly repository: Repository<Game>){}

  create(dto: CreateGameDto) {
     const games = this.repository.create(dto);
    return this.repository.save(games);
  }

  findAll() {
     return this.repository.find();
  }

  findOne(id: number) {
     return this.repository.findOneBy({id});
  }

  async update(id: number, dto: UpdateGameDto) {
  const game = await this.repository.preload({ id, ...dto });
  if (!game) return null;
  return this.repository.save(game);
}

   async remove(id: number) {
    const game = await this.repository.findOneBy({ id });
    if (!game) return null;
    return this.repository.remove(game);
  }
}
