import api from './api';
import { AxiosRequestConfig } from 'axios';

const ENDPOINT = 'classes';

export default class ClassService {
	static Create(class_object: Object) {
		return api
			.post(ENDPOINT, class_object)
			.then((response) => response.data)
			.catch((reason) => {
				console.error(reason);
			});
	}

	static GetAll(options: AxiosRequestConfig) {
		return api
			.get(ENDPOINT, options)
			.then((response) => response.data)
			.catch((reason) => {
				console.error(reason);
			});
	}
}
