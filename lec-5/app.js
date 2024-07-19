
const request = require("request")

// const url = "https://api.weatherapi.com/v1/current.json?key=e62895f9f3744dcea6d172527241907&q=italy&aqi=no"

// request({url, json: true}, (error, response) => {
//     // console.log(response)
//     // console.log(response.body)
  
//     // response_obj = JSON.parse(response.body)
//     // console.log(response_obj)
//     // console.log(response_obj.location.name)
//     // console.log(response_obj.current.condition.text)
//     console.log(response.body.location.name)
//     console.log(response.body.current.condition.text)

// })


///////////////////////////////////////////////////////////////////
/////////////  weather stack  //////////////////////////
const url = "https://api.weatherapi.com/v1/current.json?key=e62895f9f3744dcea6d172527241907&q=egypt&aqi=no"

request({url, json: true}, (error, response) => {
    // console.log(response)
    // console.log(response.body)
  
    // response_obj = JSON.parse(response.body)
    // console.log(response_obj)
    // console.log(response_obj.location.name)
    // console.log(response_obj.current.condition.text)
   

    if (error){
        console.log("Error appeared!!.. cant reach the site!!")
    }
    else if (response.body.error){
        // console.log(response.body.error.code)
        console.log(response.body.error.message)
    }
    else{
        console.log(response.body.location.name)
        console.log(response.body.current.condition.text)    
    }
})
/////////////////////////////////////////////////////////////////