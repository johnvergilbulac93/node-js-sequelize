const router = require('express').Router();
const UserController = require('../controllers/User.Controller');

router.post("/register", UserController.register );
router.get("/user/list", UserController.getUser );


module.exports = router;