import { Link } from 'react-router-dom'
import Button from './Button'

const Feedback = () => {
  return (
    <div>
      <h4>Feedbacks/tips is key to success {"<3"}</h4>
      <div contenteditable="true" className="feedback-text">What you liked, disliked, bugs or something missing</div>
      {/* <input type="submit" className='btn btn-smaller'/> */}
      <Button 
      color={'blue'}
      text={'send'}
      classname={'btn btn-smaller'}
      />
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Feedback