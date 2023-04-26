import { ReactNode } from "react";

interface alertProps {
    children: ReactNode;

}

const Alert = ({children} : alertProps) => {
  return (
    <div className="alert alert-primary" role="alert">{children}</div>
  )
}

export default Alert