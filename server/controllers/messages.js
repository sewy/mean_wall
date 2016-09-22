var mongoose = require('mongoose');
var Posts = mongoose.model('Post');
var Comments = mongoose.model('Comment');

function PostsController(){
	this.index = function(req, res){
		Posts.find({}).populate('comments').exec(function(err, data){
			if(err){
				console.log('No posts found??')
			}else{
				console.log('Index data: ', data);
				res.json(data);
			}
		})
	}
	this.postmessage = function(req, res){
		console.log(req.body);
		var post = new Posts({user: req.body.user, text: req.body.text, comments: []});
		post.save(function(err,data){
			if(err){
				console.log('Error saving Post');
			}else{
				console.log('Post Saved to mongodb!')
			}
		});
	}
	this.postcomment = function(req, res){
		console.log(req.body);
		Posts.findOne({_id: req.body._post}, function(err, data){
			if(err){
				console.log('error finding post');
			}else{
				console.log('FIndONe data: ', data)
				var comment = new Comments(req.body)
				comment.save(function(err){
					data.comments.push(comment);
					data.save(function(err){
						if(err){
							console.log('Error saving comment');
						}else{
							console.log('Comment saved!')
						}
					})

				})
			}
		})
	}
}

module.exports = new PostsController();