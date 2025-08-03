import { Request, Response } from "express";
import { sendResponse } from "../utils/common";
import { pawnsList } from "../utils/datalist";


const rollDice = (): number => {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  return randomNumber
}


export const rollDiceAndGetPositions = (req: Request, res: Response): any => {
  try {
    const { pawn } = req.query
    if (!pawn || !pawnsList.includes(pawn as string)) {
      return sendResponse(res, 400, false, 'Pawn is missing or incorrect')
    }
    const getRandomNumber = rollDice();

    if (getRandomNumber === 6) {
     // send start position for that pawn and also it has another chance to roll 
     // again 6 again chance. 
     
    }
    sendResponse(res, 200, true, 'Rolled successfully', getRandomNumber)
  } catch (error: any) {
    sendResponse(res, 500, false, error.message || 'something went wrong')
  }
}