import { Schema, model, Document } from "mongoose";
import { UserRole } from "../enums/role.enum";


export interface IUser extends Document {
  username?: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  isVerified?: boolean;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      // sparse: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);