import {Button} from "shared/ui";


const tabs = ['HTML', 'CSS', 'JS']

type TTabs = {
    mode: string,
    setMode: (mode: string) => void
}

export const Tabs = ({ mode, setMode }: TTabs) => {
    const changeMode = (e: any) => {
        setMode(e.target.textContent.toLowerCase())
    }

    return (
        <div className='tabs'>
            {tabs.map((m) => (
                <Button
                    key={m}
                    title={m}
                    onClick={changeMode}
                    className={m.toLowerCase() === mode ? 'current' : ''}
                />
            ))}
        </div>
    )
}

export default Tabs