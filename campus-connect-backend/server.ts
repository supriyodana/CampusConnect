import app from "./src/app";
import { config } from "./src/config/config";
import { connectDB } from "./src/config/db";

const startServer = async () : Promise<void> => {
    try{
        await connectDB();

        app.listen(config.port, ()=>{
            console.log(`Server running on port ${config.port}`);
        })
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();