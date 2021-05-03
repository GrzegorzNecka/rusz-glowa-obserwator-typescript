// Import stylesheets
import './style.css';

class DanePogodowe {
  constructor(public title: string) {
    this.title = title
  }


    pobierzTemperature(): string {
    return this.temperatur
  }
     pobierzWilgotnosc(): string {
    return this.wilgotnosc
  }
     pobierzCisnienie(): string {
    return this.temperatur
  }

       odczytZamiana(): string {
    return this.temperatur
  }

}


let message: string = "I know your password, bro!"
let show = (message: string): void => {
 console.log(message)
}

show(message) /*?*/ //undefined