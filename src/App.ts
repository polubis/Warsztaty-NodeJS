import bodyParser from 'body-parser';
import cors from 'cors';
import { Server } from 'http';
import express, { Express, Router } from 'express';

class App {
  private app: Express;

  private router: Router;

  public server: Server;

  constructor() {
    this.configure();
    this.createServer();
  }

  /** Creates express app and adds middleware. */
  private configure = () => {
    this.app = express();

    this.app.set('port', process.env.PORT || 8080);

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

    this.router = express.Router();

    this.router.get('', (req, res, next) => {
      console.log('Hello world');
      res.sendStatus(200);
    });

    this.app.use('/api', this.router);
  };

  /** Logs information after server start. */
  private log = () => {
    console.log(`Service running at port ${this.app.get('port')} in ${this.app.get('env')} mode`);
    console.log('Date: ', new Date().toDateString());
  };

  /** Creates server and adds logger. */
  private createServer = () => {
    this.server = this.app.listen(this.app.get('port'), this.log);
  };
}

export default new App();
