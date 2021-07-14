import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1> {title}</h1>
            {location.pathname === '/' && (
                <Button onClick={onAdd} 
                color={showAdd ? 'green': 'red'} 
                text={showAdd ? 'close' : 'add'} />

            )}
           
        </header>
    )
}

Header.defaultProps = {
    title: 'task tracker default'
}
export default Header
