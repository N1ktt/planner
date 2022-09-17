console.log("server runs")

const express = require("express")
const sass = require('sass')
const fs = require('fs')
//compiling and saving SASS to CSS
sass.compileAsync("public/style/style.scss").then((result,err)=>{
    if(result){
        fs.writeFile("public/style/style.css", result.css, (err) => {
            if (err){
                return console.error(err)
            }else{
                return console.log("SASS saved to CSS")
            }
        })
    }else{
        return console.error(err)
    }
})

//basic express stuff
const app = express();
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening at port ${port}`))
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))