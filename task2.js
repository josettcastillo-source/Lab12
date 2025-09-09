import { getServerURL } from "./task1.js";

// Task 2: listUsers()
export function listUsers(){
    const url = getServerURL() + "/users";

 fetch(url)
   .then (res => res.json())
   .then(data => {
    console.log("User List: ");
    console.log(data);
   })
   .catch(error => console.error("Error para obtener los usuarios", error));
}

