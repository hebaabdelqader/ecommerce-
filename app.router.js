import { Router } from 'express';
import categoriesRouter from './modules/categories/categories.router.js';
import productsRouter from './modules/products/products.router.js'
const router=Router();
const initApp=(app,express)=>{
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.status(400).json({message:'welcome'});
    })
    app.use('/',productsRouter);
    app.use('/',categoriesRouter);

}
export default initApp;