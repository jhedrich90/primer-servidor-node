const express = require('express')
const app = express()
const multer = require('multer')
const sharp = require('sharp')
const fs = require('fs')

const storageStrategy = multer.memoryStorage()
const upload = multer({storage:storageStrategy})


app.use(express.json())

app.get('/', function(req,res){
    res.send('Hola Mundo!!!')
})

app.post('/imagen', upload.single('imagen'),async function(req,res) {
    
    const imagen = req.file
    const processedImage = sharp(imagen.buffer)
    const resizeImage = processedImage.resize(400,800,{
        fit:"contain",
        background: "#fff"
    })
    const resizeImageBuffer = await resizeImage.toBuffer()

    fs.writeFileSync('nuevaruta/prueba.png',resizeImageBuffer)


    console.log(resizeImageBuffer)

    res.send({resizeImage : resizeImageBuffer})    

})

app.listen(3000)