export class Empleados{
  #nombre;
  #dni;
  #sueldo;
  #clave;


  constructor (nombre, dni, sueldo,bono){
    this.nombre = nombre;
    this.dni = dni;
    this.#sueldo = sueldo;
    this.#clave= "";
  }

  bonoSueldo(bono){
    return this.#sueldo
  }
  _bonoSueldo(bono){
    return this.#sueldo + this.#sueldo*bono/100
  }

  asignarClave(clave){
    this.#clave =clave;
  }

  autenticable(clave){
    return clave == this.#clave;
  }


}