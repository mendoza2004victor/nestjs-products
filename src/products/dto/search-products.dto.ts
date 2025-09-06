import { IsOptional, IsNumber, Min, IsString, IsIn, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Filters {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  sku?: string;
}

export class SearchProductsDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  limit?: number = 10;

  @IsOptional()
  @IsString()
  sortBy?: string = 'createdAt';

  @IsOptional()
  @IsString()
  @IsIn(['ASC', 'DESC', 'asc', 'desc'])
  order?: 'ASC' | 'DESC' = 'DESC';

  @IsOptional()
  @ValidateNested()
  @Type(() => Filters)
  filters?: Filters;
}
