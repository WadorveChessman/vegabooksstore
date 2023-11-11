import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nous sommes Vega Books Store! ajouter /api pour voir le travail.';
  }
}
