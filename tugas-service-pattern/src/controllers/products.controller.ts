/**
 * src/controllers/product.controller.ts
 */
import { Request, Response } from "express";
import {
  create,
  findAll,
  findOne,
  update,
  remove,
} from "../services/product.service";
import { IPaginationQuery } from "../utils/interfaces";

export default {
  async create (req: Request, res: Response) {
    try {
      const result = await create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create product",
      });
    } catch (error: unknown) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create product",
      });
    }
  },
  async findAll (req: Request, res: Response) {
    try {
      const result = await findAll();
      res.status(200).json({
        data: result,
        message: "Success find all products"
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
      data: err.message,
      message: "Failed find all products",
      });
    }
  },
  async findOne (req: Request, res: Response) {
    try {
      const result = await findOne(req.params?.id);
      res.status(200).json({
        data: result,
        message: "Success find one product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one product",
      });
    }
  },async update (req: Request, res: Response) {
    try {
      const result = await update(req.params?.id, req.body);
      res.status(200).json({
        data: result,
        message: "Success update product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update product",
      });
    }
  },
  async delete (req: Request, res: Response) {
    try {
      const result = await remove(req.params?.id);
      res.status(200).json({
        data: result,
        message: "Success delete product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete product"
      })
    }
  }
}