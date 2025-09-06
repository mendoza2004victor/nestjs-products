import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SearchProductsDto } from './dto/search-products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  async create(createDto: CreateProductDto): Promise<Product> {
  const existing = await this.repo.findOne({ where: { sku: createDto.sku } });
  if (existing) throw new ConflictException('SKU already exists');

  // Crear un solo producto
  const p: Product = this.repo.create(createDto); // ✅ sin 'as any'
  return this.repo.save(p);  // devuelve Promise<Product>
}


  async findOne(id: string): Promise<Product> {
    const p = await this.repo.findOne({ where: { id } });
    if (!p) throw new NotFoundException('Product not found');
    return p;
  }

  async update(id: string, updateDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);

    if (updateDto.stock !== undefined && updateDto.stock < 0) {
      throw new BadRequestException('Stock cannot be negative');
    }

    if (updateDto.sku && updateDto.sku !== product.sku) {
      const other = await this.repo.findOne({ where: { sku: updateDto.sku } });
      if (other) throw new ConflictException('SKU already exists');
    }

    Object.assign(product, updateDto);
    return this.repo.save(product);
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    if (product.stock > 0) {
      throw new ForbiddenException(
        'Cannot delete product with stock greater than zero',
      );
    }
    await this.repo.delete(id);
  }

  async search(dto: SearchProductsDto): Promise<{
    data: Product[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }> {
    const { page = 1, limit = 10, sortBy = 'createdAt', order = 'DESC', filters = {} } = dto;
    const qb = this.repo.createQueryBuilder('p');

    if (filters.id) qb.andWhere('p.id = :id', { id: filters.id });
    if (filters.sku) qb.andWhere('p.sku = :sku', { sku: filters.sku });
    if (filters.nombre) qb.andWhere('p.nombre ILIKE :nombre', { nombre: `%${filters.nombre}%` });
    if (filters.descripcion)
      qb.andWhere('p.descripcion ILIKE :descripcion', { descripcion: `%${filters.descripcion}%` });

    const allowedSortFields = ['precio', 'nombre', 'createdAt', 'updatedAt', 'stock'];
    const orderBy = allowedSortFields.includes(sortBy) ? `p.${sortBy}` : 'p.createdAt';
    qb.orderBy(orderBy, (order as string).toUpperCase() === 'ASC' ? 'ASC' : 'DESC');

    const totalItems = await qb.getCount();
    const take = Math.min(limit, 100);
    const skip = (page - 1) * take;

    const data = await qb.skip(skip).take(take).getMany();
    const totalPages = Math.ceil(totalItems / take) || 1;

    return {
      data,
      currentPage: page,
      totalPages,
      totalItems,
    };
  }

  async findAll(): Promise<Product[]> {
    return this.repo.find();
  }
}
