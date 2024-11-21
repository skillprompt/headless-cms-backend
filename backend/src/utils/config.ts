import { config } from "dotenv";


config({
  path: ".env",
});

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 4000,
//   DataBase_URI: process.env.DataBase_URI || "",
  JWT_SECRET: process.env.JWT_SECRET || "",
} as const;