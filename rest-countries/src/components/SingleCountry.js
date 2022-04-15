import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SingleCountry(props){
    const location = useLocation()

    console.log(location.state.countriesCapital)
    
    return (
        <div className='container'> 
        <div className='content'>
        <button className='back-btn'>BACK button</button>
        </div>
            
        </div>
    )
}
export default SingleCountry