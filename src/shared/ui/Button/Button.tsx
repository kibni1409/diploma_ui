type TButtonProps = {
    className: string,
    title: string,
    onClick: (value: any) => void
}

const Button = ({className, title, onClick}: TButtonProps) => {
    return (
        <button className={className} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button