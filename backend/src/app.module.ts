import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './games/entities/game.entity';

@Module({

  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'), 
        password: configService.get('DB_PASS'), 
        database: configService.get('DB_NAME'), 
        entities: [Game],
        synchronize: configService.get('NODE_ENV') === 'development', 
      }),
    }),
    GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
