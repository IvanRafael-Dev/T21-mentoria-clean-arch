import { badRequest, created } from './../../helpers/http-helper'
import { HttpRequest, HttpResponse } from './../../protocols/http'
import { Controller } from '../../protocols/controller'
import { AddAccount } from '../../../domain/use-cases/add-account'
import { Validation } from '../../helpers/validators/validation'

export class SignUpController implements Controller {
  private readonly addAccount: AddAccount
  private readonly validation: Validation

  constructor (addAccount: AddAccount, validation: Validation) {
    this.addAccount = addAccount
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) return badRequest(error)

    const { name, email, password } = httpRequest.body
    const newAccount = await this.addAccount.add({ name, email, password })
    return created(newAccount)
  }
}
