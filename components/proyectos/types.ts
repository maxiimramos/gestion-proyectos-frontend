export interface Etiqueta {
    nombre : string,
    descripcion: string,
    idTarea: number
}

export interface Tarea {
    id: string,
    nombre: string,
    descripcion: string,
    estado:string,
    fechaLimite: string,
    idProyecto: number,
    fechaInicio : string,
    fechaFin: string
    etiquetas: Etiqueta[]
}
export interface Proyecto {
    id: number,
    nombre: string,
    descripcion: string,
    fechaInicio : string,
    fechaFin: string
    tareas : Tarea[]
}

