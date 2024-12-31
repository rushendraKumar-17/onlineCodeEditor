import express from "express";
import userController from "../controllers/userController.js";
import validateToken from "../middleware/tokenValidation.js";
const router = express.Router();
router.post('/register', userController.registerUser);

router.post('/login',userController.loginUser );
router.get("/getUser",userController.getUser);
router.post("/add-teammate",validateToken,userController.addTeamMate);
router.get("/getTeammates",validateToken,userController.getTeammates);
export default router;