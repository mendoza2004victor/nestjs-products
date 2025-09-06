import { IsString, IsNotEmpty, IsOptional, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0)
  precio: number;

  @IsNumber()
  @Type(() => Number)
  @Min(0)
  stock: number;

  @IsString()
  @IsNotEmpty()
  sku: string;
}
