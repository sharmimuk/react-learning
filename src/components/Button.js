const onClick = () => {

}

const Button = ({ color, text }) => {
  return (
    <button className="btn" onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
