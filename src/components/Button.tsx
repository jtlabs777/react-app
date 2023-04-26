interface ButtonProp {
  children: string;
  handleClick: () => void;
}

const Button = ({ children, handleClick }: ButtonProp) => {
  return (
    <button type="button" className="btn btn-warning" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
