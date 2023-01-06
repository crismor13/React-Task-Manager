import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    const onClick = () => {
        console.log("Clicked")
    }

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color = 'green' text={showAdd ? 'Close': 'Add'} onClick={onAdd}/>
            {/* <Button color = 'green' text='Hola' onClick={onClick}/> */}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header