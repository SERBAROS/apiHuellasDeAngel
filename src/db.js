import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/huellasdeangeldb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    findOneAndUpdate: true,
    findOneAndDelete: true,
    useFindAndModify: true
})
    .then(db => console.log("DB is connected"))
    .catch(error => console.log(error))

