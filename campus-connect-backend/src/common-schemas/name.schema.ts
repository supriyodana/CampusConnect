import { Schema } from "mongoose";

export interface IName {
  firstName: string;
  middleName?: string;
  lastName?: string;
}

export const nameSchema = new Schema<IName>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
  },
  { _id: false } // IMPORTANT: prevents extra _id
);
