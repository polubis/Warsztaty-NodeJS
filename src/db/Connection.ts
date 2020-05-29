import { createPool, Pool } from 'mysql2';

class Connection {
  public state: Pool;

  public create = () => {
    this.state = createPool({
      connectionLimit: 10,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      debug: false
    });
  };

  public run = <T>(query: string): Promise<T> => {
    return new Promise((resolve, reject) => {
      this.state.query(query, (err, result) => {
        if (err) {
          console.log(err.message);
          reject(err.message);
        } else {
          resolve(JSON.parse(JSON.stringify(result))[0]);
        }
      });
    });
  };
}

export default new Connection();
