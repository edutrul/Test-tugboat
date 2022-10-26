import { useEffect } from "react";

export function Ejemplo() {
    const users = [
        { id: 1, name: "Yogur", image: "https://robohash.org/user1" },
        { id: 2, name: "Maria", image: "https://robohash.org/user2" },
      ];
    /* useEffect(() => {
        console.log('')
    ), []} */
      return <ul>
       { users.map((user) => (
        <li>
            {user.name} 
            <span>
            <img src={user.image}/>  
            </span>
        </li>
        ))}
      </ul>
    /* return <input placeholder='Ejemplo' onChange={(a) => { console.log(a)}}/> */

}