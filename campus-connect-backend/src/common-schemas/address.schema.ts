import { Schema } from "mongoose";

export interface IAddress {
    addressLine1?: string;
    addressLine2?: string;
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
}

export const addressSchema = new Schema<IAddress>(
    {
        addressLine1: { type: String, trim: true },
        addressLine2: { type: String, trim: true },
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        state: { type: String, trim: true },
        postalCode: { type: String, trim: true },
        country: { type: String, trim: true },
    },
    { _id: false }
);