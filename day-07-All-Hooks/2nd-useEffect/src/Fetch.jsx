import React, { useEffect, useState } from 'react'


export const Fetch = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error())
    },[]);
    return (
     <>
        <h1>Fetch Users Data</h1>
        <ul>
            {
                users.map(user => {
                return <li key={user.id}>
                   <a href={user.html_url}>{user.login}</a></li>
                })
            }
        </ul>
     </>
  )
}

export default Fetch