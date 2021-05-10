import { FaTimes } from 'react-icons/fa'
import { FaBeer } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Workout = ({ workout, onDelete, onToggle, exercises}) => {
  return (
    <div
      className={`workout ${workout.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(workout.id)}
    >
      <h3>
        {workout.text}{' '}
        <Link to='/exercise'><FaBeer /></Link>
        {/* <Link to='/about'><button></button></Link> */}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(workout.id)}
        />
      </h3>
      <p>{workout.day}</p>
    </div>
  )
}

export default Workout