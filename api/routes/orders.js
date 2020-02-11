const express = require('express');
const router = express.Router();


router.get('/' , (req,res,next)=>{
    res.status(200).json({
    message:'order has been taken'
});
});

router.post('/',(req,res,next)=>{
res.status(201).json(
    {
        message:'you are in post of order routes'
    }
);
});
module.exports = router;