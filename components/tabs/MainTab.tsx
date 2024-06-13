"use client"

import { useRouter } from 'next/navigation';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./MainTab.css";
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useCookies } from 'next-client-cookies';

/**
 * 
 * @returns  
 */
export const MainTab = () => {
  const cookies = useCookies();
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);

  const handleCloseSession = () =>{
    setUser(null);
    localStorage.removeItem("user");
    cookies.remove('authToken');
    router.push("/")
  }
  useEffect(() => {
    const userRetrieved = localStorage.getItem("user")
    if(userRetrieved){
      cookies.set("authToken", userRetrieved);
      setUser(JSON.parse(userRetrieved));
    }

  }, [])
  
  return (

    <Nav variant="tabs" className='mainTab'>
      {
     (!user || user.accessToken === "")  && (
  
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Gespro</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/registro">Registro</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        

      )}
    {user && user?.accessToken !== "" && (
           <Navbar bg="dark" data-bs-theme="dark">
           <Container>
        <Nav.Item>
        <Nav.Link href="/">Gespro</Nav.Link>
        </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard/proyectos">Proyectos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>handleCloseSession()}>Cerrar sesion</Nav.Link>
          </Nav.Item>
          </Container>
      </Navbar>
      )}
    </Nav>
  );
}

