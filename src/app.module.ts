import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',        // desde Windows, Docker Desktop expone la DB aquí
  port: 5432,
  username: 'nestuser',
  password: 'nestpass',
  database: 'productsdb',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,        // solo para desarrollo
    }),
    ProductsModule,
  ],
})
export class AppModule {}
