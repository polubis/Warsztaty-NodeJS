import { UsersRepository } from '../repositories';
import { UserEntity } from '../models';

class UsersService {
  public create = async (user: UserEntity) => {
    const result = await UsersRepository.create(user);

    return result;
  };
}

export default new UsersService();
