import PropTypes from 'prop-types'


//with the button, we use the onClick as a input, where when we call/use the button the way we want where it's used
const Button = ({ color, text, onClick, classname }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={classname}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  classname: 'btn',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  classname: PropTypes.string,
}

export default Button