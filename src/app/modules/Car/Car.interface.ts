export type TCarFeatures = 'Bluetooth' | 'AC' | 'Sunroof';
export type TCar = {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status: string;
  features: TCarFeatures[];
  pricePerHour: number;
  isDeleted: boolean;
};
