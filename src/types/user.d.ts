export interface UserDTO{
    name: string
    email: string
    password?: string
}

export interface JWTPayload{
    id: string
    email: string
}