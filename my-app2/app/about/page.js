import React from 'react'



const About = async() => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const users = await response.json();


  return (
    <>
        <div>
            {users.map((item)=><p id={item.id}>{item.title}</p>)}
        </div>
    </>
  )
}

export default About