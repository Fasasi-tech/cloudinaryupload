const express= require("express");
const app = express()
const multer = require('multer');
const dotenv = require('dotenv');
app.use(express.json())
dotenv.config();
//const storage = multer.memoryStorage();
//const upload = multer({ storage: storage });
// const uploadroute = require('./router/uploadRouter')
const cloudinaryRouter = require('./router/cloudinaryRouter')
// app.use('/api/v1/blob', uploadroute )

app.use('/api/v1/blob', cloudinaryRouter )
const port = 3000



app.listen(port, () => console.log(`server listening on port ${port}`))