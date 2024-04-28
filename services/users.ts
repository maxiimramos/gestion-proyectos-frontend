
const BASE_URL = process.env.BASE_URL;

export const getUsuarios = async () => {
    // Conectar al servidor y mostrar todos los usuarios
    // Fetch
    // Axios
    const response = await fetch("http://localhost:3003/users");
    const users = await response.json()
    // console.log("USUARIOS", users);
    return users;

}
export const deleteUser = async (userId: number) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`, { method: "DELETE" });
    const userDeleted = await response.json();
    return userDeleted;
}
// ASINCRONIA
export const loginUser = async (email: string, password: string) => {
    const body = {
        correo: email,
        contraseña: password
    }

    console.log("BODY", JSON.stringify(body));
    // method: "POST",
    // body: JSON.stringify(bodyObj),
   
    const response = await fetch(`${BASE_URL}/users/sign-in`,
        {body: JSON.stringify(body), method: "POST",  headers: {
            "Content-Type": "application/json",
          }, }
    );
    if (response.status !==200){
        return {status: 400}
    }

    const userLoged = await response.json();
    return userLoged;
    // Tarea
}

export const signupUser = async (nombre: string, email: string, password: string) => {
    const body = {
        nombre: nombre,
        correo: email,
        contraseña: password
    }
    console.log("BODY", JSON.stringify(body));

    const response = await fetch(`${BASE_URL}/users/sign-up`,
        {body: JSON.stringify(body), method: "POST",  headers: {
           "Content-Type": "application/json",
          }, }
    );
    const userRegistered = await response.json();
    return userRegistered;
}
/**
 * 1 - Necesitas hacer la conexion cliente - servidor de manera aislada y lo mas sencilla posible
 * 2 - Probar que funciona.
 * 3 - Llamar a la funcion donde necesites y mostrar los datos que necesites => Mostrar una lista con los usuarops
 *          - Borrar usuario => mostrar una confirmacion de que se borro el usuario.
 *       
 */