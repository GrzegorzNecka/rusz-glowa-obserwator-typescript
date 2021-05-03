// Import stylesheets
import "./style.css";

class DanePogodowe {
  constructor(
    public temperatura: string,
    public wilgotnosc: string,
    public cisnienie: string
  ) {
    this.temperatura = temperatura;
    this.wilgotnosc = wilgotnosc;
    this.cisnienie = cisnienie;
  }

  pobierzTemperature(): string {
    return this.temperatura;
  }
  pobierzWilgotnosc(): string {
    return this.wilgotnosc;
  }
  pobierzCisnienie(): string {
    return this.cisnienie;
  }

  odczytZamiana(): void {
    console.log("abc");
  }
}

// let message: string = "I know your password, bro!";
// let show = (message: string): void => {
//   console.log(message);
// };

// show(message); /*?*/ //undefined
