import { Connection } from '.';

class Initializer {
  private findTable = () => {
    return Connection.run<{ 'count(*)': number }>(`SELECT count(*) FROM users`);
  };

  private createTable = () => {
    return Connection.run(`CREATE TABLE users (firstName VARCHAR(50), lastName VARCHAR(50),
        email VARCHAR(50), sex CHAR(1), birthDate DATE);`);
  };

  public init = async () => {
    const table = await this.findTable();

    if (table['count(*)'] === 0) {
      await this.createTable();
    }
  };
}

export default new Initializer();
