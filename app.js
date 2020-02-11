const express = require('express');
const app = express();
const productRouter = require('./api/routes/product');
const ordersRouter = require('./api/routes/orders');

// app.use((req,res,next)=>{
// res.status(200).json({
//     message: 'It works!'
// })
// });

app.use('/product',productRouter);
app.use('/orders' , ordersRouter);
module.exports = app;