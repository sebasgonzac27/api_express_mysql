import { config } from "dotenv";

config();

console.log("ENV ", process.env.HOST)

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
}