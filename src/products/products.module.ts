import { Module } from '@nestjs/common';
import { DAOs } from 'src/DAOs/products.daos';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    controllers: [ProductsController],
    providers: [ProductsService, DAOs]
})
export class ProductsModule {}
