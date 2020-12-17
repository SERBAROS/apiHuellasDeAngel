import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/huellasdeangeldb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db => console.log("DB is connected"))
    .catch(error => console.log(error))

