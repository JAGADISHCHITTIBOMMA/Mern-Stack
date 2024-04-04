const cart ={
    cartid:2001,
    cartDiscount:"10%",
    products :[
        {pid:1001,pname:"realme"},
        {pid:1002,pname:"redmi"}
    ],

shippingaddress :{
    addressline1:"main road",
    addressline2:"near dmart",
    postalcode:521356
},
   userinfo : {
    userid:11,
    username:"vasu"
   } 
}

console.log(cart.cartid);
console.log(cart.products[0]);

//fb
const fbpost = {
    postid:12098,
    postcaption:"to be uu",
    postoutcomes :{
        likes:200,
        comments:["awesome","excellent","good","average","poor"],
    },
    userdetails: {
        id:2002101990,
        name:"ravi"
    }
}
console.log(fbpost.likes);

//fbpost 
const fbpost1 = {
    fbid:200,
    postimage:"sample.jpg",
    posttitle:"i am",
    comments:[{
        cid:111,
        comment:"perfect",
        userinfo:{
            userid:1001,
            username:"mahi"
        },
    }]
}