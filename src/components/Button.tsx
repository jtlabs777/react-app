interface ButtonProp {
  children: string;
  handleClick: () => void;
  color?: string;
}

const Button = ({ children, handleClick, color = 'primary'}: ButtonProp) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
