require("dotenv/config")

const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./src/routes')


app.use(express.json())
app.use(cors())
app.use(router)





// migrationRun()

const SERVER_PORT = process.env.PORT || 3000

app.listen(SERVER_PORT, () => {
    console.log(`Server is running at ${SERVER_PORT}`);
})