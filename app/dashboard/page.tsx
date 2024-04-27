"use client"

import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useContext, useState } from 'react'

export default function page() {
  const {user} = useContext(AuthContext);
  const [first, setfirst] = useState(false)
  const router = useRouter();
 

  return (
    <div>Bienvenido a Gespro, ahora que ya tienes tu cuenta personal puedes empezar a crear tus proyectos</div>
  )
}
