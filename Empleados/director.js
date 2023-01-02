import { Empleados } from "./empleados.js";

export class director extends Empleados{
  constructor(nombre,dni,sueldo){
    super(nombre,dni,sueldo)
  }
  bonoSueldo(){
    const bono=10;
    return super._bonoSueldo(bono);
  }
}