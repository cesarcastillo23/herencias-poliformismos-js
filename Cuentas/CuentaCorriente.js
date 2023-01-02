
import { Cuenta } from "./Cuenta.js";
export class CuentaCorriente extends Cuenta{

    static cantidadDeCuentas=0;

    constructor(cliente, numero,agencia){
        super(cliente, numero,agencia,0)
        CuentaCorriente.cantidadDeCuentas++;
    }

    retiroCuenta(valor){
        super._retiroCuenta(valor,5);
    }
}