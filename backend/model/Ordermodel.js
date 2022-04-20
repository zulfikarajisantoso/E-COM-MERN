import mongoose from 'mongoose'

const Ordermodel = new mongoose.Schema(
    {
        userId:{type:String, required:true},
        products:[
            {
                productId:{type:String},
                quantity:{type:Number,default:1},
            }
        ],
        amount: {type:Number, required:true},
        address: {type:Object, required:true},
        status: {type:String, default:"Menunggu Konfirmasi"}
       
    },
    {timestamps:true}
)
export default mongoose.model('Order', Ordermodel)