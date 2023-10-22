import { Router } from "express";
const router=Router();
export const cat=(req,res)=>{
   return res.json("categories");
}