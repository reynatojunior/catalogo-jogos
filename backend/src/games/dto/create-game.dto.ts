import { IsNumber, IsString } from "class-validator";

export class CreateGameDto {

    @IsString()
    nome: string;

    @IsString()
    tipo: string;

    @IsNumber()
    ano: number;
    
}
