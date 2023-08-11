import express, { Application } from 'express';
import connect from './infra/database';
import errorMiddleware from './middlewares/error.middleware';
import EventRoutes from './routes/event.routes';

export default class App {
	public app: Application;
	private eventRoutes = new EventRoutes();

	constructor() {
		this.app = express();
		this.initializeMiddlewares();
		this.initializeRoutes();
		this.intercepErrors();
		connect();
	}

	initializeRoutes() {
		this.app.use('/events', this.eventRoutes.router);
	}

	intercepErrors() {
		this.app.use(errorMiddleware);
	}

	initializeMiddlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	listen() {
		this.app.listen(5000, () => {
			return console.log('server is running');
		});
	}
}
