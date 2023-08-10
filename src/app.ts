import express, { Application } from 'express';
import { connect } from './infra/database';
import { errorMiddleware } from './middlewares/error.middleware';

class App {
	public app: Application;

	constructor() {
		this.app = express();
		this.initializeMiddlewares();
		this.initializeRoutes();
		this.intercepErrors();
		connect();
	}

	initializeRoutes() {
		// this.app.use();
	}

	intercepErrors() {
		this.app.use(errorMiddleware);
	}

	initializeMiddlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	listen() {
		this.app.listen(3001, () => {
			return console.log('server is running');
		});
	}
}

export { App };

