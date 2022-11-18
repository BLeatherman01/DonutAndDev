export interface Results {
  count: number;
  results: Donuts[];
}

export interface Donuts {
  id: number;
  ref: string;
  name: string;
  photo: string;
  photo_attribution: string;
}
