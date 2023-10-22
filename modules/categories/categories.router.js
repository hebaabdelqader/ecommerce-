import { Router } from "express";
import * as categoriesController from './categories.controller.js';
const router=Router();
router.get('/categories',categoriesController.cat);
export default router;
