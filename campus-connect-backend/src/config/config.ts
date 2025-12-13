import dotenv from "dotenv";
dotenv.config();

function getEnv(key:string):string {
    const value = process.env[key];
    if(!value) {
        throw new Error(`Environment variable ${key} is not defined`);
    }
    return value;
}

interface Config {
    port : number;
    mongoUri : string;
    frontendUrl : string;
}

export const config: Config = {
    port : Number(getEnv("PORT")),
    mongoUri : getEnv("MONGO_URI"),
    frontendUrl : getEnv("CLIENT_ORIGIN")
}