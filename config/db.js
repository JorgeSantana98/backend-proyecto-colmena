// const mongoose = require('mongoose');
// require('dotenv').config({ path: 'variables.env' });

// const conectarDB = async () => {

//     try { 

//         await mongoose.connect(process.env.DB_MONGO, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         })
//         console.log('BD Conectada');
        
//     } catch (error) {
//         console.log(error);
//         process.exit(1); // Detenemos la app
//     }
// }

// module.exports = conectarDB

const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        console.log(`Connected to Mongodb Database ${mongoose.connection.host}`)
    }catch(error){
        console.log(`Mongodb Database Error ${mongoose.connection.host}`)
        console.log(error)
    }
}
module.exports = connectDB;