import { Schema, model, Document, Types } from "mongoose";
import { IName, nameSchema } from "../common-schemas/name.schema";
import { IContact, contactSchema } from "../common-schemas/contact.schema";
import {personalInfoSchema, IPersonalInfo} from "../common-schemas/personalInfo.schema";

export interface IStudentProfile extends Document {
    userId: Types.ObjectId;
    name: IName;
    rollNumber: string;
    registrationNumber?: string;
    department: string;
    semester: number;
    batchYear: number;
    contactInfo?: IContact;
    fatherName?: IName;
    motherName?: IName;
    otherInfo?: IPersonalInfo;
}

const studentProfileSchema = new Schema<IStudentProfile>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true, // one profile per user
        },
        name: {
            type: nameSchema,
            required: true,
        },
        rollNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        registrationNumber: {
            type: String,
            unique: true,
        },
        department: {
            type: String,
            required: true,
        },
        semester: {
            type: Number,
            required: true,
            trim: true,
        },
        batchYear: {
            type: Number,
            required: true,
            trim: true,
        },
        contactInfo: {
            type: contactSchema,
        },
        fatherName: {
            type: nameSchema,
        },
        motherName: {
            type: nameSchema,
        },
        otherInfo: {
            type: personalInfoSchema,
        },
    },
    { timestamps: true }
);

export const StudentProfile = model<IStudentProfile>("StudentProfile", studentProfileSchema);