import React from 'react';

function Activity({activity}) {
  
  return (
    <div className="flex m-5 p-2 w-auto h-[300px] rounded-lg items-center justify-center font-serif text-white tracking-wider text-8xl bg-stone-600">
      {activity ? activity : 'Find Actity'}
    </div>
  )
}

export { Activity }