var messages = require('../controllers/messages.js');
module.exports = function(app){
	app.get('/messages', messages.index);
	app.post('/postmessage', messages.postmessage);
	app.post('/postcomment', messages.postcomment);
}