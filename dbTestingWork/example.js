/*

This file is for testing setting up the databases. Will be used for demonstration of schemas for the project. 
In final build each schema will be in its own class and have requires/exports to connect between each other

*/


//var mongoose = require('mongoose');
var http = require("http");
var qString = require("querystring");

let dbManager = require('./dbManager'); 
let mongoose = require('mongoose');
const { time } = require("console");
mongoose.set('bufferCommands', true);


const userSchema = new mongoose.Schema({
    // userID: {
    //     type: mongoose.ObjectId,required: true
    // },
    nested:{
        firstName:{type: String},
        lastName:{type: String}
    },
    email: String,
    password: String,
    phone_num: Number,
    owner: Boolean
});
const  User = mongoose.model('User',userSchema)

const restSchema = new mongoose.Schema({
    // restaurantID: {
    //     type: mongoose.ObjectId, required:true
    // },
    userID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
        /*
        https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose

        The idea to use the mongoose.objectID came from here in the comments section of the post schema from this stackoverflow  
        */
    },
    businessHour:{
        days: Date
    },
    phone_num: Number
});
const Restaurant = mongoose.model('Restaurant',restSchema);

const tableSchema = new mongoose.Schema({
    // tableID:{
    //     type: mongoose.ObjectId, required:true
    // },
    restID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'
    },
    seats: Number,
    table_name: String
});
const Table = mongoose.model('Table',tableSchema);

const reserveSchema = new mongoose.Schema({
    // reservationID:{
    //     type: mongoose.ObjectId, required:true
    // },
    userID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    restID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'
    },
    tableID:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Table'
    },
    date: Date,
    time: Number
});
const Reservation = mongoose.model('Reservation',reserveSchema);

mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true, useUnifiedTopology: true});
// this is used for testing purposes and will change in final build
async function run(){
    var newU = new User({
       userID: mongoose.Types.ObjectId(),
        nested:{
            firstName:"Nick",
            lastName:"Hussain"
        },
        email: "test123@gmail.com",
        phone_num: 5552015555,
        owner: false
    });
    await newU.save();
    var res = await User.find({});

/*
To use tables/res/rest to be assigned to each other try statements are needed and must use in try creating after creating a user

*/
// This doesn't work so its commented out and will use for testing the data
    // var newRes = new Restaurant({
    //     // restID: mongoose.Types.ObjectId(),
    //     // userID: mongoose.Schema.Types.ObjectId, ref: 'newU',
    //     restID: mongoose.Types.ObjectId(),
    //     userID: ,
    //     businessHour:{
    //         date: Date()
    //     },
    //     phome_num: 5053462100
    // })
    // await newRes.save();
    // var res1 = await Restaurant.find({});




    console.log(res);
   // console.log(res1);

}
run().then()
/*
run().then(
    ()=>{
//When given one argument, path returns the SchemaType for the named property
	//prints the SchemaType Configuration Object
	console.log(userSchema.path('email'))

	//prints undefined because this path does not exist
	console.log(userSchema.path('userID'))
	
//When given two arguments it will set the Schema path
	userSchema.path('phone_num', Number)

	console.log(userSchema.path('phone_num'))
    })

*/