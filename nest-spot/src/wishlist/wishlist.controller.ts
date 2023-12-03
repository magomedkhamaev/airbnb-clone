import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from '@prisma/client';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(@Body() createTripDto: Wishlist) {
    return this.wishlistService.create(createTripDto);
  }

 

  @Get()
  findAll() {
    return this.wishlistService.findAll();
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishlistService.findOne(id);
  }

 

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripDto: Wishlist) {
    return this.wishlistService.update(id, updateTripDto);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(id);
  }
}
