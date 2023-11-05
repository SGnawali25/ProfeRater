const express = require('express');
const router = express.Router();
const {isAuthenticatedUser, authorizedRoles} = require('../middlewares/auth')

const {
    registerUser, 
    loginUser, 
    logout,  
    userProfile,
    getTeachers,
    getStudents,
    createTeacherComment,
    getUserById,
    } = require('../controllers/authController');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/me').get(isAuthenticatedUser, userProfile);
router.route('/teachers').get(isAuthenticatedUser, getTeachers);
router.route('/students').get(isAuthenticatedUser, getStudents);
router.route('/teacher/:id/comment').post(isAuthenticatedUser, createTeacherComment);
router.route('/profile/:id').get(isAuthenticatedUser,getUserById)



module.exports = router