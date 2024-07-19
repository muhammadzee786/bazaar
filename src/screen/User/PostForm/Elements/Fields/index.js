import React, { useContext } from 'react'
import ContextMap from '../../ContextMap'
import Field from './Field'

const Fields = () => {
  const { fields, values, handleChange, handleBlur, setFieldValue } = useContext(ContextMap)

  const renderField = (field) => {
    let value
    const fieldName = `cf.f-${field.id}`
    if (values.cf && values.cf['f-' + field.id]) {
      value = values.cf['f-' + field.id]
    }
    return (
      <Field
        key={field.id}
        field={field}
        fieldName={fieldName}
        value={value}
        handleChange={handleChange}
        handleBlur={handleBlur}
        setFieldValue={setFieldValue}
      />
    )
  }

  return fields.map(field => renderField(field))
}

export default Fields
