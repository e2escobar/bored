import { Action } from "./components/Action"
import { Activity } from "./components/Activity"
import { ActivitySelection } from "./components/ActivitySelection"
import { Title } from "./components/Title"
import React, { useState, useEffect } from 'react'


function App() {
  const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://www.boredapi.com/api/activity/')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
    <>
      <div className="p-14 my-9 mx-20 rounded-lg bg-stone-400 bg-fixed items-center justify-center"> 
        <Title />
        <Activity 
        posts={posts}
        />
        <ActivitySelection />
        <Action />
      </div>
    </>
  ); 
}


export default App
