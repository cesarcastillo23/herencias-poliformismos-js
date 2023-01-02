
import { Cuenta } from "./Cuenta.js";
export class CuentaAhorro extends Cuenta{
    constructor(cliente, numero,agencia,saldo){
        super(cliente, numero,agencia,0)
    }
    
    retiroCuenta(valor){
        super._retiroCuenta(valor,2);
    }
}