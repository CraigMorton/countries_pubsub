class Request {
	get (url, onComplete) {
	  fetch(url)
	    .then(request => request.json())
	    .then(onComplete)
	    .catch(console.error);
	}
}

export default Request;
