import fetch from 'isomorphic-fetch';


export function getProducts() {

	return fetch('http://localhost:3001')
		.then((r) => r.json())
	;
}