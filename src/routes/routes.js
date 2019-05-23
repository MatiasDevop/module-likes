const { Router } = require('express');
//const fs = require('fs-extra');
const path = require('path');
const router = Router();

const Pusher = require('pusher');
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_APP_KEY,
      secret: process.env.PUSHER_APP_SECRET,
      cluster: process.env.PUSHER_APP_CLUSTER
    });

const Post = require('../models/post');

router.get('/',(req, res) =>{
     Post.find().exec((err, posts) => {
        res.render('index', { posts: posts });
    });
});
router.post('/posts/:id/act', async (req, res, next) =>{
    const action = req.body.action;
    const counter = action === 'Like' ? 1 : -1;
  var postUpdate = await Post.updateOne({_id: req.params.id},{$inc:{likes_count: counter}}, {}, (err, numberAffected) =>{
        //pusher.trigger('post-events', 'postAction', { action: action, postId: req.params.id }, req.body.socketId);
        console.log(postUpdate);
        res.send('');
    });

});

module.exports = router;