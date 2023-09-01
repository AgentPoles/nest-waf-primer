import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHello2(): any {
    return { message: 'Hello World!', title: 'My Greeting App' };
  }
  getHome(): any {
    return { title: 'Home Page' };
  }
  getAboutUs(): any {
    return { title: 'About Us Page' };
  }
}
