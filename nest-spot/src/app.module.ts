import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { ListingsModule } from './listings/listings.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),UserModule, AuthModule, ListingsModule, WishlistModule, TripModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
