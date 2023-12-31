import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripService } from './trip.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import {Trip} from '@prisma/client';

@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  create(@Body() createTripDto: Trip) {
    return this.tripService.create(createTripDto);
  }

 

  @Get()
  findAll() {
    return this.tripService.findAll();
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripService.findOne(id);
  }

 

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripDto: Trip) {
    return this.tripService.update(id, updateTripDto);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripService.remove(id);
  }

  
}
