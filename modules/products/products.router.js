import { Router } from "express";
import * as prouductsController from './products.controller.js';
const router=Router();
router.get('/products',prouductsController.pro);
export default router;
