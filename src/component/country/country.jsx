import  React,{useState,useEffect}  from "react";
import {NativeSelect,FormControl} from '@material-ui/core'
import { fetchCountries } from "../../api/index";
import './country.css';

const Country = ({handleCountryChange}) =>{
    const [countries, setcountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () =>{
            setcountries(await fetchCountries());
        }
        fetchAPI();
    }, [setcountries])
    return(
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
            {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country;