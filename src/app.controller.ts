import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers(): any[] {
    return [
      { id: 1, address_id: 3, firstName: 'Russell', lastName: 'Rogahn' },
      { id: 2, address_id: 4, firstName: 'Yasmeen', lastName: 'Welch' },
      { id: 3, address_id: 5, firstName: 'Bobbie', lastName: 'Lemke' },
      { id: 4, address_id: 6, firstName: 'Daisha', lastName: 'Swift' },
      { id: 5, address_id: 7, firstName: 'Paige', lastName: 'Trantow' },
    ];
  }

  @Get('/addresses')
  getAddresses(): any[] {
    return [
      { id: 1, street: '426 Barton Inlet', city: 'Lake Casper', state: 'Utah' },
      {
        id: 2,
        street: '0541 Bednar Summit',
        city: 'Lake Khalil',
        state: 'West Virginia',
      },
      {
        id: 3,
        street: '03793 Jones Spring',
        city: 'Bethlehem',
        state: 'South Carolina',
      },
      {
        id: 4,
        street: '862 Bogisich Shoal',
        city: 'Lucindashire',
        state: 'Nebraska',
      },
      {
        id: 5,
        street: '58328 Alberta Ramp',
        city: 'Joelburgh',
        state: 'Louisiana',
      },
      {
        id: 6,
        street: '7206 Yasmeen Lakes',
        city: 'San Bernardino',
        state: 'Georgia',
      },
      {
        id: 7,
        street: '443 Keyon Bridge',
        city: 'Elyria',
        state: 'Washington',
      },
      {
        id: 8,
        street: '1833 Ward Gardens',
        city: 'West Jannie',
        state: 'South Carolina',
      },
    ];
  }
}
