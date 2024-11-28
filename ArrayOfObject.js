// import{useState}from 'react';
// function ArrayOfObjectComponent()
// {
//     const[user,setUsers]=useState([
// {
//     id:1,
//     name:"Priya",
//     type:"admin"
// },
// {
//     id:2,
//     name:"Dharshini",
//     type:"user"
// }
//     ]);
//     return(
//         <div>
//             <ul>
//                 {user.map((user)=>(
//                     <div key ={user.id}>
//                         <p> {user.name}</p>
//                         <p> {user.type}</p>
//                     </div>
//                 ))}
//             </ul>
//         </div>
//     );
// } export default ArrayOfObjectComponent;
import { useState } from "react";

function ArrayOfObjectComponent() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Priya",
            type: "admin"
        },
        {
            id: 2,
            name: "Dharshini",
            type: "user"
        }
    ]);

   
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    
    const addUser = () => {
        if (name.trim() === '' || type.trim() === '') {
            alert('Please enter both name and type');
            return;
        }
        
        const newUser = {
            id: users.length + 1, 
            name: name,
            type: type
        };
        setUsers([...users, newUser]); 
        setName(''); 
        setType('');
    };

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.type}</p>
                    </li>
                ))}
            </ul>

            
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter type"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />

            <button onClick={addUser}>Add User</button>
        </div>
    );
}

export default ArrayOfObjectComponent;
