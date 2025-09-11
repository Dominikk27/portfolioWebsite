import { useLocale } from 'next-intl'
import React from 'react'
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

const LocaleSwitcher = () => {
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect locale={locale}>
      <option value="sk">SK</option>
      <option value="en">EN</option>
    </LocaleSwitcherSelect>
  )
}

export default LocaleSwitcher