import api from './api';

const ENDPOINT = 'connections';

export default class ConnectionService {
	static Create(connection: Object) {
		return api
			.post(ENDPOINT, connection)
			.then((response) => response.data)
			.catch((reason) => {
				console.error(reason);
			});
	}

	static GetTotal() {
		return api
			.get(ENDPOINT)
			.then((response) => response.data)
			.catch((reason) => {
				console.error(reason);
			});
	}
}
