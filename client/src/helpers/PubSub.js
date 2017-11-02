class PubSub {
	static publish(route, payload){
		const event = new CustomEvent(route, {
			detail: payload
		});
		document.dispatchEvent(event);
	}

	static subscribe(route, callback){
		document.addEventListener(route, callback);
	}
}

export default PubSub;
