import express from "express";
import morgan from "morgan";

// Routes
import userRoutes from "./routes/users.routes";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
    res.json(
        {
            title: "REST API EXPRESS - NODE - MYSQL",
            routes: [
                {
                    users: "/api/users"
                }
            ]
        }
    )
})

app.use("/api/users", userRoutes);

export default app