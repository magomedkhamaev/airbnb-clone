// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from '@prisma/client';
import { JwtGuard } from 'src/auth/guards/jwt.guards';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: string) {
    return await this.userService.findById(id);
  }
  @Get()
  async getAllUser() {
    return await this.userService.findAll();
  }
  
  @Delete(':id')
  async Delete(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }



// ========= WORKING VERSION ==============



  // @Post()
  // async createUser(@Body() postData: User): Promise<User> {
  //   return this.userService.createUser(postData);
  // }

  // @Get()
  // async getAllUser(): Promise<User[]> {
  //   return this.userService.getAllUser();
  // }

 
  // @Get(':id')
  // async getUser(@Param('id') id: string): Promise<User | null> {
  //   return this.userService.getUser(id);
  // }

  // @Patch(':id')
  // async Update(@Param('id') id: string, @Body() postData:User): Promise<User> {
  //   return this.userService.updateUser(id,postData);
  // }

  // @Delete(':id')
  // async Delete(@Param('id') id: string): Promise<User> {
  //   return this.userService.deleteUser(id);
  // }
}
