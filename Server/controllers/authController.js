const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const cloudinary = require('cloudinary');


//Register a user
exports.registerUser = catchAsyncErrors( async(req, res, next) => {
    const {name, email, password, role, contact, university, about, subject} = req.body;
    console.log(req.body);

    // //whether user enterd email and password
    if(!email || !password || !name || !role || !university || !contact){
        return next(new ErrorHandler('Please enter name, email, role and password properly', 400));
    }


    if (req.body.role === 'student'){
        const user = await User.create({
            name,
            email,
            password, 
            role,
            university,
            contact,
            about,
            subject,
        })
        sendToken(user, 200, "", res)

    }

    else if(req.body.role === 'teacher' && !req.body.picture ){
        return next(new ErrorHandler('Please choose your profile picture', 400));
    }


    const result = await cloudinary.v2.uploader.upload(req.body.picture,{
    folder: "users",
    width: 150,
    crop: "scale"
    })


    const user = await User.create({
        name,
        email,
        password, 
        role,
        university,
        contact,
        about,
        subject,
        picture: {
            public_id: result.public_id,
            url: result.secure_url,
        }
    })

    sendToken(user, 200, "", res)

    
}
)

//login based on user email and password
exports.loginUser = catchAsyncErrors( async(req, res, next) => {
    const {email, password} = req.body;

    //whether user enterd email and password
    if(!email || !password){
        return next(new ErrorHandler('Please enter email and password', 400));
    }

    //finding user in our database
    const user = await User.findOne({email}).select('+password')

    if (!user){
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    //checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password", 401));
    }



    sendToken(user, 200, "", res)
})

//logout user
exports.logout = catchAsyncErrors( async(req, res, next) => {
    const options = {
        expires: new Date(Date.now()),
        httpOnly: true,
        path:'/'
    }

    res.cookie('token', null, options);

    res.status(200).json({
        success: true,
        message: 'Successfully logged out'
    })
})


// gives the user their own information
exports.userProfile = catchAsyncErrors( async(req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})


//get all the teachers
exports.getTeachers = catchAsyncErrors( async(req, res, next) => {
    let users = await User.find();

    users = users.filter((user) => user.role === 'teacher');

    res.status(200).json({
        success: true,
        users
    })


})

//get all the students in the database
exports.getStudents = catchAsyncErrors( async(req, res, next) => {
    let users = await User.find();

    users = users.filter((user) => user.role === 'student');

    res.status(200).json({
        success: true,
        users
    })
})

//create a rating and comment for the user
exports.createTeacherComment = catchAsyncErrors(async(req, res, next) => {
    const {rating, comment} = req.body;

    const review = {
        user: req.user.id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const user = await User.findById(req.params.id);

    const isReviewed = user.comments.find(r => r.user.toString() === req.user._id.toString());

    if (isReviewed){
        user.comments.forEach(review=> {
            if (review.user.toString() === req.user._id.toString()){
                review.comment = comment || review.comment,
                review.rating = rating || review.rating
            }
        })
    } else {
        user.comments.push(review);
    }
    user.ratings = user.comments.reduce((acc, item) => item.rating + acc, 0)/user.comments.length

    await user.save();

    res.status(200).json({
        success: true,
        message: "teacher commented successfully",
        user
    })
})

//get teachers or students by id
exports.getUserById = catchAsyncErrors( async(req, res, next) => {
    const user = await User.findById(req.params.id)

    if(!user){
        return next(new ErrorHandler("There is no such a user" , 404))
    }

    res.status(200).json({
        status: true,
        user
    })

})




