import { ReactNode } from "react";

interface alertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: alertProps) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close float-end"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
