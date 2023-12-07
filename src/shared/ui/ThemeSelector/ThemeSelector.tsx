import 'codemirror/theme/dracula.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/mdn-like.css'

const themes = ['dracula', 'material', 'mdn-like']

type TThemeSelector = {
    setTheme: (value: string) => void
}

const ThemeSelector = ({ setTheme }: TThemeSelector) => {
    const selectTheme = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        setTheme(e.target.value)
    }

    return (
        <div className='theme-selector'>
            <label htmlFor='theme'>Theme: </label>
            <select id='theme' name='theme' onChange={selectTheme}>
                {themes.map((theme) => (
                    <option key={theme} value={theme}>
                        {theme}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ThemeSelector