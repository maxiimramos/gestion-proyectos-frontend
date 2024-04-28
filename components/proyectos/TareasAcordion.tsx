import Accordion from 'react-bootstrap/Accordion';
import { Tarea } from './types';
import { Badge } from 'react-bootstrap';

function TareasAccordion({tareas}: {tareas: Tarea[]}) {

  return (
    <Accordion defaultActiveKey="0" style={{backgroundColor:"var(--oscuro1)"}}>

        {tareas?.map(tarea => {
        return (
          <Accordion.Item eventKey={tarea.id} >
            <Accordion.Header>{tarea.nombre}</Accordion.Header>
            <Accordion.Body>
            {tarea.etiquetas.map((etiqueta)=>{
                return (
                    <Badge key={etiqueta.idTarea} color={etiqueta.descripcion}>{etiqueta.nombre}</Badge>
                )
            })}
            
                {tarea.descripcion}
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  );
}

export {TareasAccordion};