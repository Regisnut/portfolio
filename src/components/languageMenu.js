import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()

  const [values, setValues] = useState({
    language: 'en'
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)
    setValues({language: event.target.value})
    };
  

  return(

    <select
      value={values.language}
      onChange={(e) => handleChange(e)}
    >
      <option selected value={'en'}>EN</option>
      <option value={'fr'}>FR</option>
    </select>

  )
}

export default LanguageMenu