import mongoose from 'mongoose'

const Productmodel = new mongoose.Schema(
    {
        title:{type:String, required:true, unique:true},
        desc:{type:String, required:true},
        img:{type:String, required:true},
        categories:{type:Array},
        size:{type:Array},
        color:{type:Array},
        price:{type:Number, required:true},
        inStock: { type:Boolean, required:true }

       
    },
    {timestamps:true}
)
export default mongoose.model('Product', Productmodel)