import { Schema, model, Document, Types } from "mongoose";
import { IName, nameSchema } from "../common-schemas/name.schema";
import { contactSchema, IContact } from "../common-schemas/contact.schema";
import { personalInfoSchema, IPersonalInfo } from "../common-schemas/personalInfo.schema";

export interface ITeacherProfile extends Document {
    userId: Types.ObjectId;
    name: IName;
    employeeId: string;
    joiningDate?: Date;
    department: string;
    designation: string;
    qualification?: string;
    experienceYears?: number;
    contactInfo?: IContact;
    personalInfo?: IPersonalInfo;
}

const teacherProfileSchema = new Schema<ITeacherProfile>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },
        name: {
            type: nameSchema,
            required: true,
        },
        employeeId: {
            type: String,
            required: true,
            unique: true,
        },
        joiningDate: {
            type: Date,
        },
        department: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
        },
        experienceYears: {
            type: Number,
            min: 0,
        },
        contactInfo: {
            type: contactSchema,
        },
        personalInfo: {
            type: personalInfoSchema,
        },
    },
    { timestamps: true }
);

export const TeacherProfile = model<ITeacherProfile>(
    "TeacherProfile",
    teacherProfileSchema
);
