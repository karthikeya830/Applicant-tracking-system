const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./Models/User');
const userRoutes = require('./Routes/UserRoutes')
const jobRoutes = require('./Routes/jobRoutes')
const TeamMemberRoutes = require('./Routes/TeamMemberRoutes')
const ApplicationsRoutes = require('./Routes/ApplicationsRoutes');

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});
app.use(cors({ origin: '*' }));
app.use(express.json());
const uri = "mongodb+srv://karthikeya:realme5pro@cluster0.ihqmndn.mongodb.net/StudentMangement?retryWrites=true&w=majority"

const params = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(uri, params).then(() => {
  console.info("connection established");
}).catch(err => console.log(err))

app.post("/register", async (req, res) => {
  const { firstname, lastname, email, password, pic } = req.body;

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exists" });
    }else {
      //middleware(hashing)
      const user = new User({ firstname, lastname, email , password });
      await user.save();

      res.status(201).json({ message: "user registered sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});


app.get('/login', async (req, res) => {
  try{
    console.log(req.body);
    const user = await User.findOne( { email : req.body.email } )

    if( !user ){
      res.send("User not exist")
    }
    else{
      if( user.password === req.body.password){
        res.send("login successful")
      }
      else{
        res.send("login unsuccessful")
      }
    }
  }
  catch (err) {
    console.log(err);
  }
})



app.use( '/api/users', userRoutes )

app.use('/api/jobs',  jobRoutes )

app.use('/api/team', TeamMemberRoutes)

app.use('/api/applications', ApplicationsRoutes )
