app.controller('indexController', ['$scope', '$cookies',  '$location',function($scope, $cookies, $location){
	$scope.login = function(user){
		$cookies.put('username', user.name);
		$location.url('/messages');
	}
}]);

app.controller('messageController', ['$scope', '$cookies', '$location','messagesFactory', function($scope, $cookies, $location, messagesFactory){
	$scope.user = $cookies.get('username');
	$scope.logout = function(){
		$cookies.remove('username');
		$location.url('/');

	}
	$scope.post = function(message){
		message.user = $scope.user;
		messagesFactory.postmessage(message);
		index();
	}
	$scope.postc = function(comment, postId){
		comment.user = $scope.user;
		comment._post = postId;
		messagesFactory.postcomment(comment);
		index();
	}
	var index = function(){
		if(!$scope.user){
			$location.url('/');
		};
		messagesFactory.index(function(data){
			$scope.messages = data;
		});
	}
	var view = function(){
	}
	index();
}]);