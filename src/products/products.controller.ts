import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Product } from './products.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly ProductsService: ProductsService) {}

    @Get()
    getProducts(): Product[] {
        return this.ProductsService.getProducts()
    }

    @Get('/:id')
    getProductById(@Req() req): Product {
        return this.ProductsService.getProductById(req.params.id)
    }

    @Post()
    addProduct(@Req() req): Product {
        const {name,price,thumbnail} = req.body
        let id = null
        return this.ProductsService.addProduct({name,price,thumbnail,id})
    }

    @Put()
    modifyProduct(@Req() req): Product {
        const {name,price,thumbnail,id} = req.body
        return this.ProductsService.modifyProduct({name,price,thumbnail,id})
    }

    @Delete('/:id')
    deleteProductById(@Req() req): Product[] {
        return this.ProductsService.deleteProductbyId(req.params.id)
    }
}
