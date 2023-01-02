export class Cuenta{
  cliente;
  numero;
  saldo;
  agencia;


  constructor(cliente,numero,agencia,saldo){
    //clases abastractas
    if(this.constructor==Cuenta){
      throw new Error("no se puede instanciar objetos de una clase cuenta")
    }
    this.numero = numero;
    this.agencia =agencia;
    this.saldo = saldo;
    this.cliente=cliente;
  }
  set cliente(valor){
    if(valor instanceof cliente)
    this.cliente = valor;
}
get cliente(){
    return this.cliente;
}
  depositoCuenta(valor){
    if(valor >=0){
        this.saldo += valor;
        return this.saldo;
    }
}
  retiroCuenta(valor){
    throw new Error("Debe implementar el metodo abstracto")
  }
_retiroCuenta(valor,comision){
    valor=valor*(1+comision/100)
    if(valor<=this.saldo){
        this.saldo -= valor;
        return this.saldo;
}
}
verSaldo(){
    return this.saldo;
}
trasferirCuenta(valor,cuentaDestino){
    this.retiroCuenta(valor);
    cuentaDestino.depositoCuenta(valor);

}
// prueba(){
//   console.log("metodo padre")
// }
}