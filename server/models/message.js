var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
	user: {type: String, required: true},
	text: {type: String, required: true},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var CommentSchema = new mongoose.Schema({
	user: {type: String, required: true},
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	text: {type: String, required: true}
});

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);