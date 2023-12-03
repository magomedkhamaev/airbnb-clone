import { Injectable } from '@nestjs/common';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { PrismaService } from 'src/prisma.service';
import { Trip } from '@prisma/client';

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}


  async  create(dto: Trip) {
    const createData = await this.prisma.trip.create({
          data: dto,
        });
          
        return {
          statusCode: 200,
          data: createData,
        };
    }
    
  
    findAll() {
      return this.prisma.trip.findMany();
    }
    
  
    async findOne(id: string) {
      return await this.prisma.trip.findUnique({
        where: {
          id: id,
        },
      });
    }
  
    async update(id: string, data:Trip) {
          return  this.prisma.trip.update({
            where: { 
              id 
            },
            data, 
          });
        }
  
    remove(id: string) {
      return this.prisma.trip.delete({
              where: { id: id },
            });
    }
}
