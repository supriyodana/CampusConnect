import { Schema } from "mongoose";
import { IAddress, addressSchema } from "./address.schema";

export interface IContact {
    phone?: string;
    emergencyPhone?: string;
    email?: string;
    address?: IAddress;
}

export const contactSchema = new Schema<IContact>(
    {
        phone: {
            type: String,
            trim: true,
        },
        emergencyPhone: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
        },
        address: {
            type: addressSchema,
        },
    },
    { _id: false }
);
