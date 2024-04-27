import React from 'react'
import { Proyecto } from './types'
import { Button, Card, CardHeader } from 'react-bootstrap';
import { TareasAccordion } from './TareasAcordion';
import { CrearTarea } from '../modals/CrearTarea';

interface ProyectoProps {
  proyecto: Proyecto,
  handleObtenerProyectos: () =>{}
}
function ProyectoCard({ proyecto, handleObtenerProyectos }: ProyectoProps) {
  const handleCrearTarea = (idProyecto: number) =>{

  }
  
  return (
    <Card style={{
      width: '24rem', margin: "10px", display: "inline-block", backgroundColor: "var(--medium)", color: "white",
      
      border: "1.8px solid var(--oscuro2)"
    }}>
      <CardHeader style={{borderBottom: "1px solid var(--oscuro2)",
          }}>
      <Card.Title style={{
          fontSize:"24px",
          // paddingBottom: "10px",
          textAlign: "center"
        }}>{proyecto.nombre}</Card.Title>
      </CardHeader>
      <Card.Body>
        <Card.Title>
          Descripcion del proyecto:
        </Card.Title>
        
        <Card.Text style={{margin:"5px"}}>
          {proyecto.descripcion}
        </Card.Text>
        {/*<Button variant="primary">Ver tarea</Button>*/}

      
         <TareasAccordion tareas={proyecto.tareas} />
         <CrearTarea handleObtenerProyectos={handleObtenerProyectos} idProyecto={proyecto.id}></CrearTarea>

      </Card.Body>
    </Card>
  )
}

export { ProyectoCard };