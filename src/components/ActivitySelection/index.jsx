import * as React from 'react';
import { Select } from '../../components/Select'


function ActivitySelection() {


  const mapPrices = {
    alto: 'minprice=0.7&maxprice=1',
    moderado: 'minprice=0.4&maxprice=0.6',
    bajo: 'minprice=0.1&maxprice=0.3',
    gratis: 'price=0',
  }

 

  const activities = {
    type: [
      { label: 'Educational' , value: 'education'},
      { label: 'Recreational' , value: 'recreational'},
      { label: 'Social' , value: 'social'},
      { label: 'Diy' , value: 'diy'},
      { label: 'Charity' , value: 'charity'},
      { label: 'Cooking' , value: 'cooking'},
      { label: 'Relaxation' , value: 'relaxation'},
      { label: 'Music' , value: 'music'},
      { label: 'Busywork' , value: 'busywork'},
    ],
    participants: [
      {label: 1, value: 1},
      {label: 2, value: 2},
      {label: 3, value: 3},
      {label: 4, value: 4},
      {label: 5, value: 5},
      {label: 6, value: 6},
      {label: 7, value: 7},
      {label: 8, value: 8},
      {label: 9, value: 9}
    ],
    prices: [
      {label: 'Alto', value: 'minprice=0.7&maxprice=1'},
      {label: 'Moderado', value: 'minprice=0.4&maxprice=0.6'},
      {label: 'Bajo', value: 'minprice=0.1&maxprice=0.3'},
      {label: 'Gratis', value: 'price=0'}
    ]

  }

  const [type, setType] = React.useState('')
  const [participants, setParticipants] = React.useState(0)
  const [prices, setPrices] = React.useState('')


  return (
    <div className='w-full flex justify-around m-5'>
      <Select
        type={type}
        onChange={(val) => setType(val)} 
        options={activities.type}
        name="Types"
        label="Tipo de actividad"
      />
      <Select
        participants={participants}
        onChange={(val) => setParticipants(val)} 
        options={activities.participants}
        name="Participants"
        label="Número de participantes"
      />
      <Select 
        prices={prices}
        onChange={(val) => setPrices(val)} 
        options={activities.prices}
        name="Price"
        label="Rango de Precios"
      />

    </div>
  )
}

export { ActivitySelection }