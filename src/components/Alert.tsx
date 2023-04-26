
interface alertProps {
    text: string;

}

const Alert = ({text} : alertProps) => {
  return (
    <div className="alert alert-primary" role="alert">{text}</div>
  )
}

export default Alert