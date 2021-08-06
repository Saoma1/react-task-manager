import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 9th at 4:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'Feb 10th at 9:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Date',
      day: 'Feb 14th at 19:00',
      reminder: false,
    },
    {
      id: 4,
      text: 'Inteview',
      day: 'Feb 20th at 4:30',
      reminder: true,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    console.log('deleting', id)
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
