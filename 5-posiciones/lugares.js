/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección información de los jugadores hasta el momento presentados
- imprima la información de los jugadores en el formato: {nombre} "{apodo}" {apellido} (edad) - {posiicion}.

¿Cómo puedo obtener de la colección solamente los que son mediocampistas?
*/

class Jugador {
  constructor(nombre, apellido, birthday, apodo, posicion) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.birthday = new Date(birthday);
      this.apodo = apodo;
      this.posicion = posicion;
  }

  edad(){
    let birthday2 = this.birthday.getFullYear();
    let age = new Date().getFullYear();
    const edad = age - birthday2;
    return edad;
  }

  toString() {
      const edad = this.edad();
      let apodoBool = this.apodo === "UNKNOWN" ? null : `"${this.apodo}"`;
      return apodoBool === null ? `${this.nombre} ${this.apellido} (${edad} años)` : `${this.nombre} ${apodoBool} ${this.apellido} (${edad} años)`;
  }
}

const jugadores = [
  new Jugador("Nahitan","Nández", "1995-12-28", "UNKNOWN", "mediocampista"),
  new Jugador("Federico", "Valverde", "1998-07-22", "Pajarito", "mediocampista"),
  new Jugador("Luciano", "Rodriguez", "2003-07-16", "Lucho", "UNKNOWN"),
];

const mediocampistas = jugadores.filter(jugador => jugador.posicion === "mediocampista");

mediocampistas.forEach(jugador => {
  console.log(jugador.toString());
});

module.exports = jugadores;
