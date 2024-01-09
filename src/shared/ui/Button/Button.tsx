
type TButtonProps = {
  className?: string,
  title: string,
  onClick: () => void
}

const Button = ({ className, title, onClick }: TButtonProps) => (
  <button className={className} onClick={onClick}>
    {title}
  </button>
)

export default Button
