const mongoose = require('mongoose');
const URI = 'mongodb+srv://MasterLuciano:Metroid.01@uninorteciclo4.txhphtd.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI)
.then(()=>{console.log('DB connected')})
.catch((error)=>{console.log('error')})

module.exports = mongoose