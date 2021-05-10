import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Exercise = ({ exercise, onDelete, onToggle}) => {
  return (
    <div
      className={`workout ${exercise.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(exercise.id)}
    >
      <h3>
        {exercise.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(exercise.id)}
        />
      </h3>
    </div>
  )
}

export default Exercise

