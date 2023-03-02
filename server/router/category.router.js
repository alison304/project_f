const express = require('express');
const { getCategoryList } = require("../controllers/category.controller");
const router = express.Router();

router.get('/', getCategoryList);

module.exports.categoryRouter = router;