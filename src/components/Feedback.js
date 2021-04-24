import { Link } from 'react-router-dom'

const Feedback = () => {
  return (
    <div>
      <h4>Feedbacks/tips is key to success {"<3"}</h4>
      <div contenteditable="true" className="feedback-text">What you liked, disliked, bugs or something missing</div>
      <input type="submit" className="btn btn-smaller"/>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Feedback