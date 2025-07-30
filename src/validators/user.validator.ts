import Joi from 'joi'
import { UserDTO } from '../types/user'

export const createClientRule = Joi.object<UserDTO>({
    name: Joi.string().min(3).max(50).required().messages({
        'any.required':'É necessario adicionar um nome.',
        'string.base':'O nome precisar ser uma string.',
        'string.empty':'O nome não pode estar vazio.',
        'string.min':'O nome precisa ter pelo menos 3 caracteres.',
        'string.max':'O nome pode ter no maximo 50 caracteres.'
    }),
    email: Joi.string().email().required().messages({
        'any.required':'É necessario adicionar um email.',
        'string.base':'O email precisar ser uma string.',
        'string.empty':'O email não pode estar vazio.',
        'string.email':'O email precisa ter um formato válido.',

    }),
})

export const editOrDeleteClientRule = Joi.object({
    id: Joi.string().required().messages({
        'any.required':'O ID do cliente é obrigatório.',
        'string.base':'O ID precisar ser uma string.',
        'string.empty':'O ID não pode estar vazio.'
    })
})