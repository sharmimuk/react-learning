const onClick = () => {
    console.log('button clicked')
}

const Button = ({ color, text }) => {
  return (
    <button className="btn" onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
