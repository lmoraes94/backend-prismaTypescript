import { Request, Response } from "express";
import { CreateProductsUseCase } from "./CreateProductsUseCase";

export class CreateProductsController {
  async handle(req: Request, res: Response) {
    const { name, quantity, size } = req.body;

    const createProductsUseCase = new CreateProductsUseCase();

    const result = await createProductsUseCase.execute({
      name,
      size,
      quantity,
    });

    return res.status(201).json(result);
  }
}
