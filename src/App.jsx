import { Header } from "./components/Header";
import { Indice } from "./components/Indice";
import { Modulo1 } from "./modulos/modulo-1";
import { Modulo2 } from "./modulos/modulo-2";
import { Modulo3 } from "./modulos/modulo-3";
import { Modulo4 } from "./modulos/modulo-4";
import { Modulo5 } from "./modulos/modulo-5";
import { Modulo6 } from "./modulos/modulo-6";
import "./css/standard.css";

function App() {
  return (
    <div>
      <Header/>
      <Indice/>
      <Modulo1/>
      <Modulo2/>
      <Modulo3/>
      <Modulo4/>
      <Modulo5/>
      <Modulo6/>
    </div>
  )
}

export { App };
