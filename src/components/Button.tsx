interface ButtonProp {
  children: string;
  handleClick: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

const Button = ({ children, handleClick, color = 'primary'}: ButtonProp) => {
  return (
    
    <button type="button" className={`btn btn-${color}`} onClick={handleClick}  >
      {children}
    </button>
  );
};

export default Button;
