import { ApiProperty } from "@nestjs/swagger";

export interface Product {
    readonly id: string;
    readonly name: string;
    readonly price: number;
    readonly thumbnail: string;
}
