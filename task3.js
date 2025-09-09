import { getServerURL } from "./task1.js";

// Task 3: addUser(first_name, last_name, email)
export function addUser(first_name, last_name, email){
    const url = getServerURL() + "/users";

      const newUser = {
        first_name: first_name,
        last_name: last_name,
        email: email
      };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newUser)
     })

    .then(res => res.json())
    .then(data => console.log("Nuevo usuario agregado:", data))
    .catch(error => console.error("Error al agregar nuevo usuario:", error));
}

addUser("Lety", "Martinez", "@gmail.com");
