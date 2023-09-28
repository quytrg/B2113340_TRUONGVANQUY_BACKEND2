const app = require('./app')
const config = require('./app/config')
const MongoDB = require('./app/utils/mongodb.util')

const startServer = async () => {
    try {
        console.log(config.db.uri)
        await MongoDB.connect(config.db.uri)
        console.log('Connected to database!')

        const PORT = config.app.port
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } 
    catch (err) {
        console.log('Cannot connect to database!', err)
        process.exit()
    }
}

startServer()
