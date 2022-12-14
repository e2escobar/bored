import React from 'react'


const Select = ({options, name, label, onChange}) => {

  return (
    <label for='select-type'>{label}</label>,
    <select className='select select-primary w-full max-w-xs flex-auto' name={name} onChange={(e) => onChange(e.target.value)}>
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