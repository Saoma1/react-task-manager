import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'

function App() {
  const [viewAdd, setViewAdd] = useState(false)
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

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder:
        !task.reminder } : task
      )
    )
  }

  // Add Task
  const addTask = (task) => {
    const id = tasks.length + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  return (
    <div className="container">
      <Header/>
      {viewAdd && <AddTasks onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
