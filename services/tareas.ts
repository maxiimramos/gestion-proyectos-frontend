// Get 
// Post
// Delete

const BASE_URL = process.env.BASE_URL;

export const obtenerProyectos = async () => {
    const response = await fetch("http://localhost:3003/proyectos");
    const proyectos = await response.json()
    return proyectos;
}

export const crearTarea = async (nombre: string, descripcion: string, estado:string, idProyecto:number,fechaLimite: string) => {
    const body = {
        nombre: nombre,
        descripcion: descripcion,
        estado:estado, 
        idProyecto:idProyecto,
        fechaLimite: fechaLimite
    }

const response = await fetch(`${BASE_URL}/tareas`,
        {body: JSON.stringify(body), method: "POST",  headers: {
           "Content-Type": "application/json",
          }, }
    );
    const tareaCreada = await response.json();
    return tareaCreada;
}

/*export const borrarProyectos = async (proyectoId: number) => {
    const response = await fetch(`${BASE_URL}/proyectos/${proyectoId}`, { method: "DELETE" });
    const proyectoBorrado = await response.json()
    return proyectoBorrado;
}*/
