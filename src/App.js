import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Workouts from './components/Workouts'
import AddWorkout from './components/AddWorkout'
import About from './components/About'
import Feedback from './components/Feedback'
import Exercise from './components/Exercise'
import Exercises from './components/Exercises'

const App = () => {
  const [showAddWorkout, setShowAddWorkout] = useState(false)
  // const [showAddExercise, setShowAddExercise] = useState(false)
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    const getWorkouts = async () => {
      const workoutsFromServer = await fetchWorkouts()
      setWorkouts(workoutsFromServer)
    }

    getWorkouts()
  }, [])

  // Fetch Workouts
  const fetchWorkouts = async () => {
    const res = await fetch('http://localhost:5000/workouts')
    const data = await res.json()

    return data
  }

  // Fetch Workout
  const fetchWorkout = async (id) => {
    const res = await fetch(`http://localhost:5000/workouts/${id}`)
    const data = await res.json()

    return data
  }

  // Add Workout
  const addWorkout = async (workout) => {
    const res = await fetch('http://localhost:5000/workouts', {
      method: 'POST', 
      headers: { //Since we use a POST, add data, we need to specify the content type
        'Content-type': 'application/json',
      },
      body: JSON.stringify(workout), //Here we set the data we are sending, but first make it to a json
    })

    const data = await res.json()

    setWorkouts([...workouts, data])
  }

  // Delete Workout
  const deleteWorkout = async (id) => {
    const res = await fetch(`http://localhost:5000/workouts/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setWorkouts(workouts.filter((workout) => workout.id !== id))
      : alert('Error Deleting This Workout')
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const workoutToToggle = await fetchWorkout(id)
    const updWorkout = { ...workoutToToggle, reminder: !workoutToToggle.reminder }

    const res = await fetch(`http://localhost:5000/workouts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updWorkout),
    })

    const data = await res.json()

    setWorkouts(
      workouts.map((workout) =>
        workout.id === id ? { ...workout, reminder: data.reminder } : workout
      )
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddWorkout(!showAddWorkout)}
          showAdd={showAddWorkout}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddWorkout && <AddWorkout onAdd={addWorkout} />}
              {workouts.length > 0 ? (
                <Workouts
                  workouts={workouts}
                  onDelete={deleteWorkout}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Route path='/feedback' component={Feedback} />
        <Route path='/exercise' component={Exercise} />
        {/* <Route path='/feedback' component={Feedback} /> HOME  */}
        {/* <Route path='/feedback' component={Feedback} /> PROFILE */}
        <Footer />
      </div>
    </Router>
  )
}

export default App