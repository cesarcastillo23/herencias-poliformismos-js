export class SistemaAutenticacion{
  //poliformismos
  static login(usuario,clave){
    //interfaces
    if("autenticable" in usuario && usuario.autenticable instanceof Function)
    return usuario.autenticable(clave);
    else
      return false;
  }
  
}