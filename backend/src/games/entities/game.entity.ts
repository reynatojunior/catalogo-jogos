import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('game')
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    tipo: string;

    @Column()
    ano: number;

}
