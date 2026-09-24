import { Request, Response } from "express";
import askQwen from "../service/AiModels/qwen2";


export const askController = async (req : Request, res : Response) => {
  try{
    const {
      question 
    } = req.body;  

    const response = await askQwen(question);

    res.status(200).json({
      msg : response
    });

  }catch (err){
    res.status(500).json({
      error : " Error processing queetion"
    })
  }
  
}

