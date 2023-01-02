import { Empleados } from "./empleados.js";

export class gerente extends Empleados{
  constructor(nombre,dni,sueldo){
    super(nombre,dni,sueldo);
  }
  bonoSueldo(){
    const bono=5;
    return super._bonoSueldo(bono);
  }
}
