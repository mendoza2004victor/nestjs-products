import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SearchProductsDto } from './dto/search-products.dto';
import { Product } from './entities/product.entity';

@Controller('productos')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Post()
  async create(@Body() dto: CreateProductDto): Promise<Product> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateProductDto): Promise<Product> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }

  @Post('search')
  async search(@Body() dto: SearchProductsDto): Promise<{
    data: Product[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }> {
    return this.service.search(dto);
  }
}
