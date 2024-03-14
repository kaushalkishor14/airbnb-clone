const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('./models/user');

require('dotenv').config()
const app = express();

// this line code encrpition password
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret ='ahgiushauoshbdb'

app.use(express.json())

app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:5173',
    }
));

console.log(process.env.MONGO_URL)

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
app.post('/login', async (req,res) =>{
    const{email,password} = req.body;
    const User = await user.findOne({email});

    if(User){
        const passOk = bcrypt.compareSync(password, User.password);
        if(passOk){
            jwt.sgin({email:User.email, id:User._id},jwtSecret,{},(error,token)=>{
                if(error) throw error;
                res.cookie('token',token).json('password ok');

            } );
        }else{
            res.status(422).json('Incorrect password');
        }
    }else{
        res.json('Not found')
    }
})


app.listen(5000)



