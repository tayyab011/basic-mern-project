import express  from "express";
import * as UserController from '../controllers/UserController.js'
import * as ProductController from '../controllers/ProductController.js'
import * as FileUploadController from "../controllers/FileUploadController.js";
import upload from "../middleware/FileUploads.js";
const router = express.Router()

//user
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);




//product
router.post("/createproduct", ProductController.createproduct);
router.get("/allproduct", ProductController.getallproduct);
router.delete("/deleteProduct/:id", ProductController.deleteProduct);



//fileupload
router.post(
  "/file-upload",
  upload.array("file", 20),
  FileUploadController.fileupload
);




export default router