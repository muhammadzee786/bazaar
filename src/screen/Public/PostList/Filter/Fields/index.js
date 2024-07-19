import React from 'react'
import Field from './Field'

const Fields = ({ fields, filters, onChange }) => {
  const renderField = (field) => {
    let value
    const fieldName = field.id
    if (filters.cf && filters.cf[field.id]) {
      value = filters.cf[field.id]
    }
    return (
      <Field
        key={field.id}
        field={field}
        fieldName={fieldName}
        value={value}
        onChange={onChange}
      />
    )
  }

  return fields.map(field => renderField(field))
}

export default Fields
