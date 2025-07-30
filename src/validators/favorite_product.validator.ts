import Joi from 'joi'

export const favoriteProductRule = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required':'O email é obrigatório.',
        'string.base':'O email precisar ser uma string.',
        'string.empty':'O email não pode estar vazio.',
        'string.email':'O email precisa ter um formato válido.',
    }),
    product: Joi.string().required().messages({
        'any.required':'O ID de produto é obrigatório.',
        'string.base':'O ID de produto precisar ser uma string.',
        'string.empty':'O ID de produto não pode estar vazio.'
    }),
})

export const listFavoriteRule = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required':'O email é obrigatório.',
        'string.base':'O email precisar ser uma string.',
        'string.empty':'O email não pode estar vazio.',
        'string.email':'O email precisa ter um formato válido.'
    })
})