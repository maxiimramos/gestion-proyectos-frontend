'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { deleteUser, getUsuarios } from "@/services/users";
import { Button } from "react-bootstrap";


/*
 1- React
    - Libreria creada por Meta 10 años
    - Crear una SPA, lo que implica que no hay recargas
    - Ciclo de vida de react - Importante entderlo pero no saber usarlo
    - Hooks => UseState / UseEffect / useContext
    - Libreria grafica / REACT BOOTRSRAP npm i react-bootsrap / MUI 
    - Logion / registro / => FORMS 
 2- Next
    
*/
export default function Page() {
  return (
    <main>
       <h3> 
        Bienvenido a Gespro, la plataforma de gestión de proyectos y tareas.
       </h3>
       <p>
        Esta plataforma te permite crear y gestionar proyectos y tareas del dia a dia.
       </p>
    </main>

  );
}
