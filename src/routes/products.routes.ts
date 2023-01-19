import { CreateProductsController } from "../modules/products/UseCases/CreateProducts/CreateProductsController";
import { Router } from "express";

const createProductsController = new CreateProductsController();
const productsRouter = Router();

productsRouter.post("/", createProductsController.handle);
export { productsRouter };
