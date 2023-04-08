import { Product } from "src/products/products.interface";

export class DAOs {
    readonly Products: Product[] = [];

    getProducts(): Product[] {
        return this.Products
    }

    getProductById(id: string): Product {
        const prod: Product = this.Products.find(p => p.id === id)
        return prod 
    }

    addProduct(prod: Product): Product {
        this.Products.push(prod)
        return prod
    }

    modifyProduct(data: Product): Product {
        const index: number = this.Products.findIndex(p => p.id === data.id)
        this.Products.splice(index, 1, data)
        return data
    }

    deleteProductById(id: string): Product[] {
        const index: number = this.Products.findIndex(p => p.id === id)
        const deleted = this.Products.splice(index, 1)
        return deleted
    }
}