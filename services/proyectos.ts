// Get 
// Post
// Delete

const BASE_URL = process.env.BASE_URL;

export const obtenerProyectos = async (userId:number) => {
    const response = await fetch("http://localhost:3003/proyectos/"+ userId);
    const proyectos = await response.json()
    return proyectos;
}

export const crearProyectos = async (nombre: string, descripcion: string, userId:number) => {
    const body = {
        nombre: nombre,
        descripcion: descripcion,
        idUsuario: userId,
   } 
console.log("BODY", JSON.stringify(body));
const response = await fetch(`${BASE_URL}/proyectos`,
        {body: JSON.stringify(body), method: "POST",  headers: {
           "Content-Type": "application/json",
          }, }
    ); 
    const proyectoCreado = await response.json();
    return proyectoCreado;
}

export const borrarProyectos = async (proyectoId: number) => {
    const response = await fetch(`${BASE_URL}/proyectos/${proyectoId}`, { method: "DELETE" });
    const proyectoBorrado = await response.json()
    return proyectoBorrado;
}