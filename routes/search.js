const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search');
router.get('/',searchController.searchAndRefine);
router.get("/homepage",searchController.readFourTop )
module.exports = router;