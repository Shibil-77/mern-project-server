import { Express, Request, Response } from "express";
import user from "../model/user";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    if (userData) {
      const userExist = await user.findOne({ email: userData.email });
      if (!userExist) {
        const newUser = new user(userData);
        try {
          const response = await newUser.save();
          console.log(response);
          res.status(200).json({ massage: "success" });
        } catch (error) {
          return res.status(500).json({ massage: "Server Error" });
        }
      } else {
        return res.status(400).json({ massage: "User already exists" });
      }
    } else {
      return res.status(400).json({ massage: "User Data Not have" });
    }
  } catch (error) {
    return res.status(500).json({ massage: "Server Error" });
  }
};



