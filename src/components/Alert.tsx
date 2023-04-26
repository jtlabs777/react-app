
interface alertProps {
    children: string;

}

const Alert = ({children} : alertProps) => {
  return (
    <div className="alert alert-primary" role="alert">{children}</div>
  )
}

export default Alert