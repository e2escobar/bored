import React from 'react'


const Select = ({options, name, label, onChange}) => {

  return (
    <label for='select-type'>{label}</label>,
    <select className='menu w-56 rounded-box p-4 m-5 bg-orange-300' name={name} onChange={(e) => onChange(e.target.value)}>
      <option value={0} >{label}</option>
      {
        options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))
      }
    </select>
  )
}

export { Select }