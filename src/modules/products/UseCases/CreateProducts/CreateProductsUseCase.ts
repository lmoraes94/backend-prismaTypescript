import { Products } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateProductsDTO } from "../../dtos/CreateProductsDTO";

export class CreateProductsUseCase {
  async execute({
    name,
    quantity,
    size,
  }: CreateProductsDTO): Promise<Products> {
    const products = await prisma.products.create({
      data: {
        name,
        quantity,
        size,
      },
    });
    return products;
  }
}
