const express = require("express");
const router = express.Router();

const {
  create, list, update, like, comment
} = require("../controllers/post");
const { userSignupValidator } = require("../validator");

router.post("/create/post", create);
router.put("/update", update);
router.put("/like", like);
router.get("/post", list);
router.put("/comment", comment);

module.exports = router;