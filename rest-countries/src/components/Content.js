import { useState} from 'react'
import ContentCard from './ContentCard'


function Content(props){
    const [filter,setCountryFilter] = useState()
    const filters= ['Asia','Europe','Africa','Oceania','Americas','Polar']
    //console.log(props.countriesItems)
    return(
    <div className='container'>
    <div className = 'content'>
        <div className='input-box'>
            <div className='search-box'>
                <input type = 'text' className='search-input' onChange = {(e)=>setCountryFilter(e.target.value)} value={filter} placeholder='Search for a country...'/>
            </div>
            <div className='filter-box'>
                <select className = 'filter-select' onChange={(e)=>setCountryFilter(e.target.value)}>
                    <option value='Option 1'>Filter by Region</option>
                    {filters.map(element=>{return(<option value={element}>{element}</option>)})}
                </select>
            </div>
        </div>
        <div className='content-card'>
        {props.countriesItems.map((country)=> {
            const {numericCode, name, population, region, capital, flag}=country
            return (!filter ?
            <ContentCard countriesCapital={capital}
            countriesPopulation={population}
            countriesNCode={numericCode}
            countriesName={name}
            countriesregion={region}
            countriesFlag={flag}/>
            :(filter===region||filter===name ?
                <ContentCard countriesCapital={capital}
                countriesPopulation={population}
                countriesNCode={numericCode}
                countriesName={name}
                countriesregion={region}
                countriesFlag={flag}/>
                :null)
            )
        })}
        </div>
    </div>
    </div>);
}
export default Content;