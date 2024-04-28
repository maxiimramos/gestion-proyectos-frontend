import { createContext } from 'react';
// La diferencia entre el context y la cookie es que la cookie se peude usar a nivel de servidor
// Y el context no.
export const AuthContext = createContext({user:{id:0, nombre:"", correo:"", accessToken:""}, setUser: (user:null)=>{}});
