import Button from './Button'

const Header = ({ onAdd, viewAdd }) => {
  return (
    <header className='header'>
      <h1>Task Manager</h1>
      <Button onClick={onAdd} color={viewAdd ? 'red' : 'green'} text={viewAdd ? 'Close' : 'Open'}/>
    </header>
  )
}

export default Header
