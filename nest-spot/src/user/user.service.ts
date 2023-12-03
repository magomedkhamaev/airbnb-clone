import { ConflictException, Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { hash } from 'bcrypt';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}



  async create(dto: User) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (user) throw new ConflictException('email duplicated');

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        hashedPassword: await hash(dto.hashedPassword, 10),
      },
    });

    const { hashedPassword, ...result } = newUser;
    return result;
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
  async findById(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async findAll() {
    return await this.prisma.user.findMany();
  }
  
  async deleteUser(id: string) {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }


}

 

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }
  

  // async create(createUserDto: CreateUserDto) {
  //   const createData = await this.prisma.user.create({
  //     data: createUserDto,
  //   });
      
  //   return {
  //     statusCode: 200,
  //     data: createData,
  //   };
  // }
 

  // findAll() {
  //   return `This action returns all user`;
  // }
 

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }


  
  
//================== WORKING VERSION ===
//   async createUser(data: User): Promise<User> {
//     return this.prisma.user.create({
//       data,
//     });
//   }

//   async getAllUser(): Promise<User[]> {
//     return this.prisma.user.findMany();
//   }

//   async getUser(id: string): Promise<User | null> {
//     return this.prisma.user.findUnique({ where: { id: String(id) } });
//   }

//   async updateUser(id: string, data:User): Promise<User> {
//     return  this.prisma.user.update({
//       where: { 
//         id 
//       },
//       data, 
//     });
//   }

//   async deleteUser(id: string): Promise<User> {
//     return this.prisma.user.delete({
//       where: { id: String(id) },
//     });
//   }
// }
