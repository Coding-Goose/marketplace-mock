import { Injectable } from '@angular/core';

export type Product = {
  id: number,
  title: string,
  description: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Product[] = [
    {
      id: 1,
      title: 'RTX 3080 Neu und in OVP',
      description: 'Tolle neue Grafikkarte ungeöffnet blablabla blablabla blablabla blablabla blablabla blablabla blablablablablabla blablabla',
      price: 850,
    },
    {
      id: 2,
      title: 'Grafikkarte Nvidia Rtx 3080 kaum verwendet',
      description: 'Kaum verwendete Grafikkarte abzuohlen in XY. blablabla blablabla blablabla blablabla blablabla blablabla blablablablablabla blablabla',
      price: 699,
    },
    {
      id: 3,
      title: 'RTX 3080 3 Monate alt mit Rechnung kein Mining',
      description: 'Erst 3 Monate alte Grafikkarte. Kein Mining. Kein OC. ungeöffnet blablabla blablabla blablabla blablabla blablabla blablabla blablablablablabla blablabla',
      price: 950,
    },
    {
      id: 4,
      title: 'MSI Rtx 3080 NEU!!!!!!',
      description: 'Neue MSI Grafikkarte. Abzuholen in XY. blablabla blablabla blablabla blablabla blablabla blablabla blablablablablabla blablabla',
      price: 1100,
    },
    {
      id: 5,
      title: 'Noch original verpackte RTX 3080 mit Rechnung',
      description: 'Grafikkarte ungeöffnet mit Rechnung und Garantie. blablabla blablabla blablabla blablabla blablabla blablabla blablablablablabla blablabla',
      price: 680,
    }
  ]

  constructor() { }

  getProduct(id: number): Product | undefined {
    return this.data.find(el => el.id == id);
  }
}
