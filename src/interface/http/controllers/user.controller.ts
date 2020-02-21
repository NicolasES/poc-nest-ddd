import { Controller, Get, Request, Param, Post, Body, UseGuards } from "@nestjs/common"
import { UserService } from '../../../application/services/user.service'
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    findAll(): Promise<any> {
        return this.userService.findAll()
    }

    @Get('/:id')
    findOne(@Param() params): Promise<any> {
        return this.userService.find(params.id)
    }

    @Post()
    create(@Body() body): Promise<any> {
        console.log(body)
        return this.userService.create(body)
    }
}
