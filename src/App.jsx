import { Action } from "./components/Action"
import { Activity } from "./components/Activity"
import { ActivitySelection } from "./components/ActivitySelection"
import { Title } from "./components/Title"
import React, { useState, useEffect } from 'react'

const baseUrl = 'http://www.boredapi.com/api/activity'

function App() {
  const [activity, setActivity] = useState(null);
  const [queryParams, setQueryParams] = useState({})

   function callAPI () {
    fetch(`${baseUrl}?${new URLSearchParams(queryParams)}`)
    .then((response) => response.json())
    .then((data) => {
       setActivity(data.activity);
    })
    .catch((err) => {
       console.log(err.message);
    });
   }

   function handleChange({val, key}) {

    const query = {...queryParams, [key]: val}
    
    Object.keys(query).forEach(key => {
      if (query[key] === 'none') {
        delete query[key];
      }
    });
    
    setQueryParams(query)

   }

   function handleRandom () {
      setQueryParams({})
      callAPI()
   }


  return (
    <>
      <div className="p-14 my-9 mx-20 rounded-lg bg-stone-400 bg-fixed items-center justify-center"> 
        <Title />
        <Activity 
          activity={activity}
        />
        <ActivitySelection onChange={handleChange} />
        <Action onRandom={() => handleRandom() } onAction={() => callAPI()} />
      </div>
    </>
  ); 
}


export default App
