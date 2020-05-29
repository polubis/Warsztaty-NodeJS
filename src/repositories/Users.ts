import { Connection } from '../db';
import { UserEntity } from '../models';

class UsersRepository {
  public getBy = () => {};

  public create = ({ firstName, lastName, email, sex, birthDate }: UserEntity) => {
    return Connection.run(
      `INSERT INTO users VALUES ('${firstName}','${lastName}','${email}','${sex}','${birthDate}');`
    );
  };

  public update = () => {};

  public remove = () => {};
}

export default new UsersRepository();
