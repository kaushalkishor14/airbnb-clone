const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('./models/user');
// const cookieParser = require('cookie-parser');

require('dotenv').config()
const app = express();

// this line code encrpition password
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret ='ahgiushauoshbdbfdgdfgfggd'

// app.use(cookieParser());

app.use(express.json())

app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:5173',
    }
));



mongoose.connect(process.env.MONGO_URL);




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
// app.post('/login', async (req,res) =>{
//     const{email,password} = req.body;
//     const User = await user.findOne({email});

//     if(User){
//       const passOk = bcrypt.compareSync(password ,User.password)
//       if(passOk){
//         res.json('pass is ok');
    

//       }else{
//         res.status(422).json('pass is not ok');
//       }
//       } else {
//         res.json('not found');
//       }
// })


app.listen(5000)



