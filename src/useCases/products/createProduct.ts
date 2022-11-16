import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'A imagem é obrigatória.' });
  }

  const imagePath = file.filename;
  const { name, description, price, category, ingredients } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Nome é obrigatório.' });
  }

  if (!description) {
    return res.status(400).json({ message: 'Descrição é obrigatória.' });
  }

  if (!price) {
    return res.status(400).json({ message: 'Preço é obrigatório.' });
  }

  if (!category) {
    return res.status(400).json({ message: 'Categoria é obrigatória.' });
  }

  if (!isValidObjectId(category)) {
    return res.status(400).json({ message: 'Categoria não encontrada.' });
  }

  const categoryExists = await Category.findById(category);
  if (!categoryExists) {
    return res.status(400).json({ message: 'Categoria não encontrada.' });
  }

  const product = await Product.create({
    name,
    description,
    imagePath: imagePath,
    price: Number(price),
    category,
    ingredients: ingredients ? JSON.parse(ingredients) : [],
  });

  return res.status(201).json(product);
}
