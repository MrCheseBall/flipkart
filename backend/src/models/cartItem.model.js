const mongoose=require('mongoose');
const cartItemSchema=new mongoose.Schema({
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart',
        required: true,
    },
    products:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
    },
    size:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
        default: 1,
    },
    price:{
        type: Number,
        required: true,
    },
    discountedPrice:{
        type: Number,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
})

const cartItem=mongoose.model('cartItems',cartItemSchema);
module.exports=cartItem;