import Joi from 'joi'
import { UserDTO } from '../types/user'

export const loginRule = Joi.object<UserDTO>({
    email: Joi.string().email().required().messages({
        'any.required':'É necessario digitar o email.',
        'string.base':'O email precisar ser uma string.',
        'string.empty':'O email não pode estar vazio.',
        'string.email':'O email precisa ter um formato válido.'
    }),
    password: Joi.string().required().messages({
        'any.required':'A senah é obrigatória.',
        'string.base':'A senha precisar ser uma string.',
        'string.empty':'A senha não pode estar vazia.'
    }),
})

export const refreshTokenRule = Joi.object({
    refreshToken: Joi.string().required().messages({
        'any.required':'O refreshToken é obrigatório.'
    })
})

