import { Request, Response } from "express";

export const rollDice = (req:Request, res:Response) => {
    try{
        const randomNumber = Math.floor(Math.random()*6);
        res.json({rolledNumber: randomNumber})

    }catch(error:any){

    }
}
