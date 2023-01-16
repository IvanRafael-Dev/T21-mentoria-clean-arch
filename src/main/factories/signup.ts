import { SignUpController } from '../../presentation/controllers/signup/signup'
import { Controller } from '../../presentation/protocols/controller'

export const makeSignUpController = (): Controller => {
  const signUpController = new SignUpController()
  return signUpController
}
