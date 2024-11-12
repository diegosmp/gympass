import { UsersRepository } from '@/repositories/users-repository'

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}
}
