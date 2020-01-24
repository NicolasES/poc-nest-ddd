export class User {
    id: number
    name: string
    email: string
    password: string

    constructor(name: string, email: string, password: string) {
        this.id = null
        this.name = name
        this.email = email
        this.password = password
    }
}