import { Router } from "express";
import {methods} from "./../controllers/user.controller"

const router = Router();

router.get("/", (req, res) => {
    res.send(
        methods.getUsers()
    )
})

export default router;