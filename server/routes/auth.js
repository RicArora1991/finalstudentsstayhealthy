// const express = require('express');
// const router =  express.Router();
// const bcrypt = require('bcryptjs');
// const { body, validationResult } = require('express-validator');
// const jwt = require('jsonwebtoken');
// const session = require('express-session');
// const UserSchema = require('../models/User');
// const passport = require('passport');


// const dotenv = require('dotenv');
// dotenv.config();

// const JWT_SECRET = process.env.JWT_SECRET;

// router.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: false,
//         maxAge: 1000 * 60 * 60 * 24,
//     },
// }));


// router.use(passport.initialize());
// router.use(passport.session());

// passport.serializeUser(function (user, cb) {
//     cb(null, user.id);
// });

// passport.deserializeUser(function (id, cb) {
//     cb(null, id);
// });

// // Route 1: Registering A New User: POST: http://localhost:8181/api/auth/register. No Login Required
// router.post('/register',[
//     body('email', "Please Enter a Vaild Email").isEmail(),
//     body('name', "Username should be at least 4 characters.").isLength({ min: 4 }),
//     body('password', "Password Should Be At Least 8 Characters.").isLength({ min: 8 }),
//     body('phone', "Phone Number Should Be 10 Digits.").isLength({ min: 10 }),
//     body('role', "Select only One role.").isLength({ min: 1 }),
// ], async (req, res) => {

//     const error = validationResult(req);
//     if(!error.isEmpty()){
//         return res.status(400).json({error: error.array()});
//     }

//     try {
//         const checkMultipleUser1 = await UserSchema.findOne({ email : req.body.email });
//         if(checkMultipleUser1){
//             return res.status(403).send({ error: "A User with this email address already exists" });
//         }

//         // const checkMultipleUser2 = await UserSchema.findOne({ name : req.body.name });
//         // if(checkMultipleUser2){
//         //     return res.status(403).json({ error: "A User with this username already exists" });
//         // }

//         const salt = await bcrypt.genSalt(10);
//         const hash = await bcrypt.hash(req.body.password, salt);
        
//         const newUser =  await UserSchema.create({
//             email: req.body.email,
//             name: req.body.name,
//             password: hash,
//             phone: req.body.phone,
//             role: req.body.role,
//             createdAt: Date(),
//         });

//         const payload = {
//             user: {
//                 id: newUser.id,
//             }
//         }
//         const authtoken = jwt.sign(payload, JWT_SECRET);
//         res.json({ authtoken });

//     } catch (error) {
//         console.error(error);
//         return res.status(500).send("Internal Server Error");
//     }

// });

// // Route 2: Authenticating an existing user: POST: http://localhost:8181/api/auth/login. No Login Required
// // router.post('/login', [
// //     body('name', "Username should be at least 4 characters.").isLength({ min: 4 }),
// //     body('password', "Password Should Be At Least 8 Characters.").isLength({ min: 8 }),
// // ], async (req, res) => {

// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //     }


// //     try {
// //         const theUser = await UserSchema.findOne({ username: req.body.username });
// //         // store the username so that we can show the username on the screen
// //         req.session.username = req.body.name;
// //         console.log(req.session.username);


// //         if (theUser) {
// //             // console.log(checkEmailExists);
// //             let checkHash = await bcrypt.compare(req.body.password, theUser.password);
// //             if (checkHash) {
// //                 let payload = {
// //                     user: {
// //                         id: theUser.id
// //                     }
// //                 }
// //                 const authtoken = jwt.sign(payload, JWT_SECRET);
// //                 return res.status(200).json({authtoken});
// //             }
// //             else {
// //                 return res.status(403).json({ error: "Invalid Credentials" });
// //             }
// //         }
// //         else {
// //             return res.status(403).json({ error: "Invalid Credentials" });
// //         }
        
        
// //     } catch (error) {
// //         console.error(error);
// //         return res.status(500).send("Internal Server Error");
// //     }
// // });

// // router.post('/login', [
// //     body('email', "Please Enter a Vaild Email").isEmail(),

// //     // body('name', "Username should be at least 4 characters.").isLength({ min: 4 }),
// //     body('password', "Password Should Be At Least 8 Characters.").isLength({ min: 8 }),
// // ], async (req, res) => {

// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //     }

// //     try {
// //         // const theUser = await UserSchema.findOne({ username: req.body.name }); // <-- Change req.body.username to req.body.name
// //         // store the username so that we can show the username on the screen
// //         // req.session.username = req.body.name; // <-- Change req.body.username to req.body.name
// //         // console.log(req.session.username);
// //         const theUser = await UserSchema.findOne({ email: req.body.email });

// //         req.session.email = req.body.email;
// //         console.log(req.session.email);
// //         if (theUser) {
// //             let checkHash = await bcrypt.compare(req.body.password, theUser.password);
// //             if (checkHash) {
// //                 let payload = {
// //                     user: {
// //                         id: theUser.id
// //                     }
// //                 }
// //                 const authtoken = jwt.sign(payload, JWT_SECRET);
// //                 return res.status(200).json({ authtoken });
// //             } else {
// //                 return res.status(403).json({ error: "Invalid Credentials" });
// //             }
// //         } else {
// //             return res.status(403).json({ error: "Invalid Credentials" });
// //         }

// //     } catch (error) {
// //         console.error(error);
// //         return res.status(500).send("Internal Server Error");
// //     }
// // });


// router.post('/login', [
//     // body('name', "Username should be at least 4 characters.").isLength({ min: 4 }),
//     body('email', "Please Enter a Vaild Email").isEmail(),
//     // body('phone', "Phone Number Should Be 10 Digits.").isLength({ min: 10 }),
//     body('password', "Password Should Be At Least 8 Characters.").isLength({ min: 8 }),
// ], async (req, res) => {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }


//     try {
//         // const theUser = await UserSchema.findOne({ username: req.body.username });
//         // store the username so that we can show the username on the screen
//     const theUser = await UserSchema.findOne({ email: req.body.email });

//         req.session.email = req.body.email;
//         console.log(req.session.email);


//         if (theUser) {
//             // console.log(checkEmailExists);
//             let checkHash = await bcrypt.compare(req.body.password, theUser.password);
//             if (checkHash) {
//                 let payload = {
//                     user: {
//                         id: theUser.id
//                     }
//                 }
//                 const authtoken = jwt.sign(payload, JWT_SECRET);
//                 return res.status(200).json({authtoken});
//             }
//             else {
//                 return res.status(403).json({ error: "Invalid Credentials" });
//             }
//         }
//         else {
//             return res.status(403).json({ error: "Invalid Credentials" });
//         }
        
        
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send("Internal Server Error");
//     }
// });
// // Route 3: Updating existing specific User details login required
// router.put('/update', [
//     body('email', "Please enter a valid email").isEmail(),
//     // body('name', "Username should be at least 4 characters").isLength({ min: 4 }),
//     // body('phone', "Phone number should be 10 digits").isLength({ min: 10 }),
// ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//         // const { email, name, phone } = req.body;
//         const { email} = req.body;

//         const existingUser = await UserSchema.findOne({ email });
//         if (!existingUser) {
//         return res.status(404).json({ error: "User not found" });
//         }

//         // existingUser.name = name;
//         // existingUser.phone = phone;
//         existingUser.email = email;

//         existingUser.updatedAt = Date();

//         const updatedUser = await existingUser.save();

//         const payload = {
//         user: {
//             id: updatedUser.id,
//         },
//         };

//         const authtoken = jwt.sign(payload, JWT_SECRET);
//         res.json({ authtoken });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send("Internal Server Error");
//     }
// });

// // router.put('/update', [
// //     body('name', "Username should be at least 4 characters").isLength({ min: 4 }),
// //     body('email', "Please enter a valid email").isEmail(),

// // ], async (req, res) => {
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //     }

// //     try {
// //         const { name } = req.body;

// //         // const existingUser = await UserSchema.findOne({ username: name });
// //         const existingUser = await UserSchema.findOne({email: email });

// //         if (!existingUser) {
// //             return res.status(404).json({ error: "User not found" });
// //         }

// //         // existingUser.name = name;
// //         existingUser.email = email;

// //         existingUser.updatedAt = Date();

// //         const updatedUser = await existingUser.save();

// //         const payload = {
// //             user: {
// //                 id: updatedUser.id,
// //             },
// //         };

// //         const authtoken = jwt.sign(payload, JWT_SECRET);
// //         res.json({ authtoken });
// //     } catch (error) {
// //         console.error(error);
// //         return res.status(500).send("Internal Server Error");
// //     }
// // });

// module.exports = router;


const express = require('express');
const router =  express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const UserSchema = require('../models/User');
const passport = require('passport');


const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
    },
}));


router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    cb(null, id);
});

// Route 1: Registering A New User: POST: http://localhost:8181/api/auth/register. No Login Required
router.post('/register',[
    body('email', "Please Enter a Vaild Email").isEmail(),
    body('name', "Username should be at least 4 characters.").isLength({ min: 4 }),
    body('password', "Password Should Be At Least 8 Characters.").isLength({ min: 8 }),
    body('phone', "Phone Number Should Be 10 Digits.").isLength({ min: 10 }),
    body('role', "Select only One role.").isLength({ min: 1 }),
], async (req, res) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }

    try {
        const checkMultipleUser1 = await UserSchema.findOne({ email : req.body.email });
        if(checkMultipleUser1){
            return res.status(403).json({ error: "A User with this email address already exists" });
        }

        const checkMultipleUser2 = await UserSchema.findOne({ name : req.body.name });
        if(checkMultipleUser2){
            return res.status(403).json({ error: "A User with this username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        
        const newUser =  await UserSchema.create({
            email: req.body.email,
            name: req.body.name,
            password: hash,
            phone: req.body.phone,
            role: req.body.role,
            createdAt: Date(),
        });

        const payload = {
            user: {
                id: newUser.id,
            }
        }
        const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({ authtoken });

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }

});

// Route 2: Authenticating an existing user: POST: http://localhost:8181/api/auth/login. No Login Required
// router.post('/login', [
//     body('name', "Username should be at least 4 characters.").isLength({ min: 4 }),
//     body('password', "Password Should Be At Least 8 Characters.").isLength({ min: 8 }),
// ], async (req, res) => {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }


//     try {
//         const theUser = await UserSchema.findOne({ username: req.body.username });
//         // store the username so that we can show the username on the screen
//         req.session.username = req.body.name;
//         console.log(req.session.username);


//         if (theUser) {
//             // console.log(checkEmailExists);
//             let checkHash = await bcrypt.compare(req.body.password, theUser.password);
//             if (checkHash) {
//                 let payload = {
//                     user: {
//                         id: theUser.id
//                     }
//                 }
//                 const authtoken = jwt.sign(payload, JWT_SECRET);
//                 return res.status(200).json({authtoken});
//             }
//             else {
//                 return res.status(403).json({ error: "Invalid Credentials" });
//             }
//         }
//         else {
//             return res.status(403).json({ error: "Invalid Credentials" });
//         }
        
        
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send("Internal Server Error");
//     }
// });

router.post('/login', [
    body('email', "Please Enter a Vaild Email").isEmail(),

    // body('name', "Username should be at least 4 characters.").isLength({ min: 4 }),
    body('password', "Password Should Be At Least 8 Characters.").isLength({ min: 8 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // const theUser1 = await UserSchema.findOne({ username: req.body.name }); // <-- Change req.body.username to req.body.name
        const theUser = await UserSchema.findOne({ email: req.body.email }); // <-- Change req.body.username to req.body.name
            console.log('my',theUser.name);
        // const theUser = await UserSchema.findOne({ username: req.body.name }); // <-- Change req.body.username to req.body.name
        // store the username so that we can show the username on the screen
        req.session.name=theUser.name
        req.session.email = req.body.email; // <-- Change req.body.username to req.body.name
        console.log(req.session.email);
        console.log(req.session.name);
        // req.session.email = req.body.email;
        if (theUser) {
            let checkHash = await bcrypt.compare(req.body.password, theUser.password);
            if (checkHash) {
                let payload = {
                    user: {
                        id: theUser.id
                    }
                }
                const authtoken = jwt.sign(payload, JWT_SECRET);
                return res.status(200).json({ authtoken });
            } else {
                return res.status(403).json({ error: "Invalid Credentials" });
            }
        } else {
            return res.status(403).json({ error: "Invalid Credentials" });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

// Route 3: Updating existing specific User details login required
// router.put('/update', [
//     body('email', "Please enter a valid email").isEmail(),
//     body('name', "Username should be at least 4 characters").isLength({ min: 4 }),
//     body('phone', "Phone number should be 10 digits").isLength({ min: 10 }),
// ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//         const { email, name, phone } = req.body;

//         const existingUser = await UserSchema.findOne({ email });
//         if (!existingUser) {
//         return res.status(404).json({ error: "User not found" });
//         }

//         existingUser.name = name;
//         existingUser.phone = phone;
//         existingUser.updatedAt = Date();

//         const updatedUser = await existingUser.save();

//         const payload = {
//         user: {
//             id: updatedUser.id,
//         },
//         };

//         const authtoken = jwt.sign(payload, JWT_SECRET);
//         res.json({ authtoken });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send("Internal Server Error");
//     }
// });

router.put('/update', [
    body('name', "Username should be at least 4 characters").isLength({ min: 4 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name } = req.body;

        const existingUser = await UserSchema.findOne({ username: name });
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        existingUser.name = name;
        existingUser.updatedAt = Date();

        const updatedUser = await existingUser.save();

        const payload = {
            user: {
                id: updatedUser.id,
            },
        };

        const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({ authtoken });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

// Route 4: Fetch user data based on the email: GET: http://localhost:8181/api/auth/user
router.get('/user', async (req, res) => {
    try {
      const email = req.headers.email; // Extract the email from the request headers

        if (!email) {
            return res.status(400).json({ error: "Email not found in the request headers" });
        }
    
        const user = await UserSchema.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
    
        // Send only the necessary user details to the client
        const userDetails = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    
        res.json(userDetails);
        } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});
// Route 4: Fetch user data based on the email and update username and phone number: PUT: http://localhost:8181/api/auth/user
// Route 5: Update user data based on the email: PUT: http://localhost:8181/api/auth/user
router.put('/user', [
    body('name', "Username should be at least 4 characters").isLength({ min: 4 }),
    body('phone', "Phone number should be 10 digits").isLength({ min: 10 }),
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
    
        try {
        const email = req.headers.email; // Extract the email from the request headers
    
        if (!email) {
            return res.status(400).json({ error: "Email not found in the request headers" });
        }
    
        const existingUser = await UserSchema.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }
    
        existingUser.name = req.body.name;
        existingUser.phone = req.body.phone;
        existingUser.updatedAt = Date();
    
        const updatedUser = await existingUser.save();
    
        const payload = {
            user: {
            id: updatedUser.id,
            },
        };
    
        const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({ authtoken });
        } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
        }
});


module.exports = router;