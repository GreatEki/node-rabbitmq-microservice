import mongoose, { Schema } from "mongoose";
import { UserModelT } from "./user.interface";

const UserSchema: Schema = new Schema<UserModelT>(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<UserModelT>("User", UserSchema);

export default User;
