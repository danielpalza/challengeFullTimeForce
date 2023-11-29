import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import 'moment/locale/es';  // Importa el locale español
@Injectable()
export class AppService {
    getRelativeTime(dateString: string): string {
        moment.locale('es');  // Establece el locale a español
        const date = moment(dateString);
        return date.fromNow();
      }
}
