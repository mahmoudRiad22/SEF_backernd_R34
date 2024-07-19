/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////  lec 1  ////////////////////////////////////////////////


// const fs = require('node:fs')
// const data = require("./Data.js")
// const { log } = require('node:console')

// // create data into a file
// fs.writeFileSync("Data_1.txt","this is the firt line in the Data_1.txt file")
// fs.writeFileSync("Data_2.txt", "Mahmoud says Hi!, what u think")

// // add data to existing file
// fs.appendFileSync("Data_1.txt", "..... this is the 2nd enrty in the file")
// fs.appendFileSync("Data_2.txt", ".. Islam replays by saying Hi!")

// // print all the data in the files
// console.log(fs.readFileSync("Data_1.txt").toString())
// console.log(fs.readFileSync("Data_2.txt").toString())
// console.log(fs.readFileSync("Data.js").toString())
// console.log("///////////////////////////////////////////////")

////////////////////////////////////

// const Data = require("./Data.js")

// const name = Data.myname
// father_name = Data.myfathername
// mother_name = Data.mymothername

// console.log(name)
// console.log(father_name," and ", mother_name)

////////////////////////////////////////

// npm init -y
// npm install validator
// const validator = require("validator")
// const yargs = require('yargs')
// const { json } = require('stream/consumers')

// console.log(validator.isEmail("mahmoudriad027@gmail.com"))
////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////  lec 2  ////////////////////////////////////////////////
// process.argv[2]
// npm i yargs

// const fs = require("node:fs")
// yargs.command({
//     command: "add_info",
//     describe: "this is used to add some informations",
//     builder: {
//             fname:{
//                     describe: "this is the first name",
//                     demandOption: true,
//             },
//             lname:{
//                     describe: "this is the last name",
//                     demandOption: true
//             }
//         },
//     handler: ()=>{
//             console.log("the handler is handling things now!!")
//     }
// })

// const add_info = yargs.argv            
// console.log(add_info.lname)

// yargs.command({
//     command: "delete_fname",
//     describe: "used to delete the first name info",
//     handler: ()=>{
//             console.log("we are replacing the fname by an empty string!!")  
//             }
// })



// console.log(yargs.argv)

// const add_info_json = JSON.stringify(yargs.argv)
// console.log(JSON.parse(add_info_json))

// fs.writeFileSync("add_info.json", add_info_json)

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////  lec 3  ////////////////////////////////////////////////


