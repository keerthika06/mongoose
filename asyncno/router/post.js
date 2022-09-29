const { Router } = require("express");

Router.get('/post',async (req,res)=>{
    const match = {}
        published = true
    if (req.query.published){
        match.published = req.query.published === 'true'
    }
    try{
        await req.user.populate({
            path: 'posts',
            match
        }).execPopulate()
        res.send(req.user.posts)

    }catch(error){
        res.status(500).send()
    }
})