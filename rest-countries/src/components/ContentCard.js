
import {useNavigate} from 'react-router-dom'
function ContentCard(props){ 
    const navigate= useNavigate()
    const handeOnClick =  () =>{
        navigate('/singleCountry',{
            state:{
                countriesCapital : props.countriesCapital,
                countriesName : props.countriesName,
                countriesPopulation: props.countriesPopulation,
                countriesregion : props.countriesregion,
                countriesFlag : props.countriesFlag

            }
        })
    }
  //burda div içinde onClick Methodu olacak o methoda gidecek
    return(
    <div className='card' onClick={()=>{handeOnClick()}}>
        <img className="card-img" src={props.countriesFlag} alt ='Flag'/>
        <label>{props.countriesName}</label>
        <label>Population:<span>{parseFloat(props.countriesPopulation)}</span></label>
        <label>Region:<span>{props.countriesregion}</span></label>
        <label>Capital:<span>{props.countriesCapital}</span></label>
    </div>)
}
export default ContentCard