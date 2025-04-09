const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');


const PORT=process.env.PORT || 5000;
dotenv.config();


const app =express();
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))



    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);

    })