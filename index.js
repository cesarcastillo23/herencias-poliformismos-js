import {CuentaCorriente} from "./Cuentas/CuentaCorriente.js"
import {Cliente} from "./Clientes.js"
import {CuentaAhorro} from "./Cuentas/CuentaAhorro.js"
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Empleados } from "./Empleados/empleados.js";
import { gerente } from "./Empleados/gerente.js";
import { director } from "./Empleados/director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";



const cliente1 = new Cliente("José","13232","1057602562");
const cuentaJose = new CuentaCorriente(cliente1,"232323",5415615620);
const cliente2 = new Cliente("Leonardo","13804050","1057654152562");
const cuentaLeonardo = new CuentaCorriente(cliente2,"123434343",54445454);

cuentaLeonardo.depositoCuenta(500);
cuentaLeonardo.depositoCuenta(500);
cuentaLeonardo.depositoCuenta(500);
// console.log("el saldo de la cuenta es: " + saldo)

cuentaLeonardo.trasferirCuenta(100,cuentaJose)
cuentaLeonardo.trasferirCuenta(100,cuentaJose)
cuentaLeonardo.trasferirCuenta(100,cuentaJose)
cuentaLeonardo.depositoCuenta(500);
cuentaLeonardo.trasferirCuenta(100,cuentaJose)
cuentaLeonardo.trasferirCuenta(100,cuentaJose)
cuentaLeonardo.depositoCuenta(500);
const cuentaAhorroLeonardo= new CuentaAhorro(cliente2,"232323",5415615620)
cuentaAhorroLeonardo.depositoCuenta(500);
cuentaAhorroLeonardo.retiroCuenta(100)
// console.log(cuentaAhorroLeonardo)
// console.log("el saldo de leonardo es :" + cuentaLeonardo.verSaldo())
// const saldoJose = cuentaJose.verSaldo()
// let saldo = cuentaLeonardo.verSaldo()
// saldo = cuentaLeonardo.verSaldo()
// console.log("el saldo de la cuenta es: " + saldoJose)
// console.log("el saldo de la cuenta es: " + saldo)
// console.log(CuentaCorriente.cantidadDeCuentas)

// console.log(cuentaLeonardo);
// console.log(cuentaLeonardo.prueba())

const CuentaNominaLeonardo= new CuentaNomina(cliente2,33242,5415,0)
CuentaNominaLeonardo.depositoCuenta(300)
CuentaNominaLeonardo.depositoCuenta(300)
CuentaNominaLeonardo.depositoCuenta(300)
CuentaNominaLeonardo.depositoCuenta(300)
CuentaNominaLeonardo.retiroCuenta(250)

// console.log(CuentaNominaLeonardo)
const empleado1= new Empleados("juan perez",654561321,10000)
const gerente1= new gerente("carlos martinez",12515858456,18000)
const director1= new director("enrique acosta",158444122,12000)

console.log(gerente1)
console.log(gerente1.bonoSueldo())
console.log(director1)
console.log(director1.bonoSueldo())
console.log(empleado1)
console.log(empleado1.bonoSueldo())
gerente1.asignarClave("122")
console.log(SistemaAutenticacion.login(gerente1,"1223"))
empleado1.asignarClave("Castle23")
console.log(SistemaAutenticacion.login(empleado1,"Castle23"))





