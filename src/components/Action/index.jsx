import React from 'react';
import { Button } from "../../components/Button"

function Action() {

  const otraCosa = () => {
    console.log('click algo')
  }

  const subirCambios = () => {
    console.log('subir cambios ⬆️')
  }

  return (
    <div className='w-full flex justify-around'>
      <Button className="btn btn-success min-w-[40%]" onClick={otraCosa} primary>
        Find Activity 
      </Button>
      <Button className="btn btn-info min-w-[40%]" onClick={subirCambios} secondary>
        Random
      </Button>
    </div>
  )
}

export { Action }