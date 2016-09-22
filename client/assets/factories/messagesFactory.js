app.factory('messagesFactory', ['$http', function($http){
	function messagesFactory(){
		this.postmessage = function(message){
			console.log('Factory message: ', message);
			$http.post('/postmessage', message);
		}
		this.postcomment = function(comment){
			console.log('Factory comment: ', comment);
			$http.post('/postcomment', comment);
		}
		this.index = function(callback){
			$http.get('/messages').then(function(returnData){
				console.log('index data: ',returnData.data);
				callback(returnData.data);
			})
		}
	}
	return  new messagesFactory();
}])