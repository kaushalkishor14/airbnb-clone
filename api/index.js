const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('./models/user.js');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const multer  = require('multer');

require('dotenv').config()
const app = express();

// this line code encrpition password
const bcryptSalt = bcrypt.genSaltSync(10);

const jwtSecret = 'ahgiushauoshbdbfdgdfgfggd'

app.use(express.json());
app.use('/uploads' ,express.static(__dirname + '/uploads'))
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // You may need this option depending on your use case
  }));
  
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connedted")
})



app.get('/test', (req, res) => {
    res.json('kaushal')
});


  
  
// this aap.post is register page endpoint
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const User = await user.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(User);
    } catch (error) {
        res.status(422).json(error);
    }
});


// this aap.post is  login page endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const User = await user.findOne({ email });

    if (User) {
        const passOk = bcrypt.compareSync(password, User.password)
        if (passOk) {
            jwt.sign({ email: User.email, id: User._id }, jwtSecret, {}, (error, token) => {
                if (error) throw error;
                res.cookie('token', token, { httpOnly: true }).json(User);
            });
        } else {
            res.status(422).json('pass is not ok');
        }
    } else {
        res.status(404).json('not found');
    }
    
});

app.get('/profile', async (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (error, userData) => {
            if (error) throw error;
            const { name, email, _id } = await user.findById(userData.id);
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
});


// logout endpoint 
app.post('/logout' , (req, res) =>{
    res.cookie('token' , '').json(true);
})

// add photo endpoint
app.post('/upload-by-link',async (req,res)=>{
    const {link} = res.body;
    const newName = 'photo' + Date.now() + 'jpg';
     await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads' +newName,
    });
res.json(newName)
});


const photosMiddleware = multer({dest: 'upload'});
app.post('upload',photosMiddleware.array('files' ,100),(req, res)=>{

res.json(req.files )
    
});



app.listen(5000);

