import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(
        JSON.stringify({message: "Hola Mundo!"})
    )
})

export default router;