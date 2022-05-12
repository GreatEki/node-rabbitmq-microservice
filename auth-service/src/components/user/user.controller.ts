import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./user.model";
import bcrypt from "bcrypt";

export const registerHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "Email is already in use" });
    }

    // Generate Hash for password
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    // proceed to save user
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      hashPassword,
    });

    const result = await newUser.save();

    return res.json({
      status: 201,
      success: true,
      message: "You have been successfully registered",
      data: result,
    });
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err.message,
    });
  }
};
