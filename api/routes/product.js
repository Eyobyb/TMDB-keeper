const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
res.status(200).json(
    {
        message: 'Handling get request at the /product'
    }
)
})

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message: 'Handling post request at the /product'
    })
})

router.patch('/', (req,res,next)=>{
    res.status(200).json(
        {
            message:"Handling Pathch request at the /product"
        }
    )
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id=== 'special'){
        res.status(200).json({
            message:'you discovered the special ID'
        })    
    }else{
        res.status(200).json(
            {
                message: `you passed an id which is: ${id}`
            }
        )
    }
});


router.get('/one/:names',(req,res,next)=>{
    const name = req.params.names;
    res.status(200).json(
        {
            message:`your name is=${name}`
        }
    )
});

router.patch('/:productId' , (req,res,next)=>{
    const id=req.params.id;
res.status(200).json(
    {
        message:'got the Id for patching',
        Id:id
    }
)
});

router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    res.status(200).json(
        {
            message:'you are in the delete zone',
            Id:'id'
        }
    )
});

module.exports = router;