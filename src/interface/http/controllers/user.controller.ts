import { Controller, Get, Param, Post, Body } from "@nestjs/common"
import { UserService } from '../../../application/services/user.service'
import { promises } from "fs"

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    findAll(): Promise<any> {
        return this.userService.getAll()
    }

    @Get('/:id')
    findOne(@Param() params): Promise<any> {
        return this.userService.find(params.id)
    }
}
