import 'codemirror/theme/dracula.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/mdn-like.css'
import { ChangeEvent } from 'react';
import styles from './styles.module.scss'

const themes = ['dracula', 'material', 'mdn-like']

type TSelector = {
  setTheme: (value: string) => void
}

const Selector = ({ setTheme }: TSelector) => {
  const selectTheme = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setTheme(value)
  }

  return (
    <div className={styles.themeSelector}>
      <label htmlFor='theme'>Тема: </label>
      <select id='theme' name='theme' onChange={selectTheme}>
        {themes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Selector
