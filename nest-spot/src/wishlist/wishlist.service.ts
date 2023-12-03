import { Injectable } from '@nestjs/common';
// import { CreateWishlistDto } from './dto/create-wishlist.dto';
// import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { PrismaService } from 'src/prisma.service';
import { Wishlist } from '@prisma/client';

@Injectable()
export class WishlistService {
  constructor(private prisma: PrismaService) {}

  async  create(dto: Wishlist) {
    const createData = await this.prisma.wishlist.create({
          data: dto,
        });
          
        return {
          statusCode: 200,
          data: createData,
        };
    }
    
  
    findAll() {
      return this.prisma.wishlist.findMany();
    }
    
  
    async findOne(id: string) {
      return await this.prisma.wishlist.findUnique({
        where: {
          id: id,
        },
      });
    }
  
    async update(id: string, data:Wishlist) {
          return  this.prisma.wishlist.update({
            where: { 
              id 
            },
            data, 
          });
        }
  
    remove(id: string) {
      return this.prisma.wishlist.delete({
              where: { id: id },
            });
    }
}
