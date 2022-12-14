import React from 'react';
import { Button } from "../../components/Button"

function Action({onAction, onRandom}) {

  return (
    <div className='w-full flex justify-around'>
      <Button className="btn btn-success min-w-[40%]" onClick={onRandom} primary>
        Find Activity 
      </Button>
      <Button className="btn btn-info min-w-[40%]" onClick={onAction} secondary>
        Random
      </Button>
    </div>
  )
}

export { Action }