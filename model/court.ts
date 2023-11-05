import { availableStatus } from './enum/available-status';
import { reservationStatus } from './enum/reservation-status';

export type Court = {
  id: number;
  courtCode: string;
  imageURI: string;
  description: string;
  totalPerson: number;
  price: number;
  availableStatus: string;
  reservationStatus: string;
};
