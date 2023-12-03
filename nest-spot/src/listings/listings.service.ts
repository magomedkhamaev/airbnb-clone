import { Injectable } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}

 async  create(dto: Listing) {
  const createData = await this.prisma.listing.create({
        data: dto,
      });
        
      return {
        statusCode: 200,
        data: createData,
      };
  }
  

  findAll() {
    return this.prisma.listing.findMany();
  }
  

  async findOne(id: string) {
    return await this.prisma.listing.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, data:Listing) {
        return  this.prisma.listing.update({
          where: { 
            id 
          },
          data, 
        });
      }

  remove(id: string) {
    return this.prisma.listing.delete({
            where: { id: id },
          });
  }
}