import { Schema } from "mongoose";
import { Gender } from "../enums/gender.enum";

export interface IPersonalInfo {
    dateOfBirth?: Date;
    gender?: Gender;
    bloodGroup?: string;
    nationality?: string;
    religion?: string;
}

export const personalInfoSchema = new Schema<IPersonalInfo>(
    {
        dateOfBirth: { type: Date },
        gender: { type: String, enum: Object.values(Gender) },
        bloodGroup: { type: String },
        nationality: { type: String },
        religion: { type: String },
    },
    { _id: false }
);
