import { Express, Request, Response } from "express";
import user from "../model/user";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwtGenerate";
import UserInterface from "../interfaces/user";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req?.body;
    if (userData) {
      const userExist = await user.findOne({ email: userData?.email });
      if (!userExist) {
        userData.password = await bcrypt.hash(userData?.password, 10);
        const newUser = new user(userData);
        try {
          const response = await newUser.save();
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

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req?.body;
    if (req?.body) {
      const userData: any = await user.findOne({ email: email });
      console.log(userData);
      if (userData) {
        if (await bcrypt.compare(password, userData.password)) {
          console.log("success");
          const jwtToken = await generateToken(userData._id);
          res
            .status(200)
            .json({ token: jwtToken, message: "success", userData: userData });
        } else {
          console.log("password mismatch");
          return res.status(401).json({ error: "password mismatch" });
        }
      } else {
        return res.status(404).json("User Not Found");
      }
    } else {
      return res.status(404).json("User Not Found");
    }
  } catch (error) {}
};
