import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListingsService } from './listings.service';
// import { CreateListingDto } from './dto/create-listing.dto';
// import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from '@prisma/client';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Post()
  create(@Body() dto: Listing) {
    return this.listingsService.create(dto);
  }

  @Get()
  findAll() {
    return this.listingsService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listingsService.findOne(id);
  }
  


  @Patch(':id')
  async update(@Param('id') id: string, @Body() listingData:Listing) {
    return this.listingsService.update(id, listingData);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listingsService.remove(id);
  }
  
}
