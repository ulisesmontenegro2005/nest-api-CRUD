import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { DAOs } from './DAOs/products.daos';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService, DAOs],
})
export class AppModule {}
