import { Injectable } from '@nestjs/common';
import { DAOs } from 'src/DAOs/products.daos';
import { Product } from './products.interface';

@Injectable()
export class ProductsService {
    constructor(private readonly DAOs: DAOs) {}

    getProducts(): Product[] {
        return this.DAOs.getProducts()
    }

    getProductById(id: string): Product {
        return this.DAOs.getProductById(id)
    }

    addProduct(prod: Product): Product { 
        let product = {
            id: this.generateId(),
            name: prod.name,
            price: prod.price,
            thumbnail: prod.thumbnail
        }

        return this.DAOs.addProduct(product)
    }

    modifyProduct(prod: Product): Product {
        return this.DAOs.modifyProduct(prod)
    }

    deleteProductbyId(id: string): Product[] {
        return this.DAOs.deleteProductById(id)
    }

    generateId (): string {
        const arr = []
    
        for (let i = 0; i < 5; i++) {
            let n = Math.floor(Math.random() * 10)
            arr.push(n)
        }
    
        return `${Date.now()}-${arr.join('')}`
    }
}
