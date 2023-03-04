import { Router } from "express";
import {methods} from "./../controllers/user.controller"

const router = Router();

router.get("/", methods.getUsers);

export default router;