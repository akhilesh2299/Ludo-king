import { Request, Response } from "express";
import { googleClient } from "../utils/googleClient";


export const redirectToGoogle = (req: Request, res: Response) => {
    const redirectUri = googleClient.generateAuthUrl({
      access_type: "offline",
      scope: ["profile", "email"],
    });
  
    res.redirect(redirectUri);
  };
  

export const handleGoogleCallback = async (req: Request, res: Response) => {
    res.json({message: 'callback success'})
};
