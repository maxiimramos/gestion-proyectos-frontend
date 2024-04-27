import React from 'react'
import { Proyecto } from './types'
import { ProyectoCard } from './ProyectoCard'
import { Col, Container, Row } from 'react-bootstrap'

interface ListaProyectosProps {
    proyectos: Proyecto[],
    handleObtenerProyectos: ()=>{}
}
/**
 * 
 * @param param0 
 * @returns 
 */
export default function ListaProyectos({ proyectos , handleObtenerProyectos}: ListaProyectosProps) {
    return (
        <>
            <Container style={{display: "block"}}>
                <Row>
            {proyectos?.map((proyecto: Proyecto) => 
            <Col xs={12} md={6} lg={4}>
                <ProyectoCard proyecto={proyecto} handleObtenerProyectos={handleObtenerProyectos}/>
                </Col>
            )}
            </Row>
            </Container>
        </>

    )
}
