// Import stylesheets
// import './style.css';

interface Obserwator {
  aktualizacja(temp: number, wilgotnosc: number, cisnienie: number): void;
}

interface Podmiot {
  zarejestrujObserwatora({ obj: Obserwator }): void;
  usunObserwatora({ obj: Obserwator }): void;
}

// class DanePogodowe implements Podmiot {
//   constructor(
//     public temperatura: number,
//     public wilgotnosc: number,
//     public cisnienie: number
//   ) {
//     this.temperatura = temperatura;
//     this.wilgotnosc = wilgotnosc;
//     this.cisnienie = cisnienie;
//   }

//   pobierzTemperature(): string {
//     return this.temperatura;
//   }
//   pobierzWilgotnosc(): string {
//     return this.wilgotnosc;
//   }
//   pobierzCisnienie(): string {
//     return this.cisnienie;
//   }

//   odczytZamiana(): void {
//     console.log('abc');
//   }
// }

// let show = (message: string): void => {
//   console.log(message);
// };

// show(message); /*?*/ //undefined
