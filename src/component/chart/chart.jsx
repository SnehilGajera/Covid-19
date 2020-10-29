import  React,{useEffect,useState}  from "react";
import { fetchDailyDate } from "../../api/index";
import {Line,Bar} from 'react-chartjs-2';
import   './chart.css';

const Chart = ({data : {confirmed,recovered,deaths}},country) =>{
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyDate());
        }
        fetchAPI();
    },[]);

    const lineChart = (
        dailyData.length !== 0  ? (<Line data={{labels:dailyData.map(({date}) => date),datasets:[{
            data:dailyData.map(( {confirmed})=>confirmed),
            label:'Infected',
            fill:true,
            borderColor:'#3333ff'
        },{
            data:dailyData.map(({deaths})=>deaths),
            label:'Deaths',
            fill:true,
            borderColor:'red',
            backgroundColor:'rgba(255,0,0,0.5)'
        }]}}></Line>) :null
    )

    const barChart =(
        
        confirmed ?(<Bar data={{
            labels:["Infected","Recovered","Deaths"],
            datasets:[{
                label:'People',
                backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                data:[confirmed.value,recovered.value,deaths.value]
            }]
        }} 
            options={{legend:{display:false}, title:{display:true,text:`Current State in ${country}`}}}></Bar>): null
    )


    return(
    <div className="container">
        {country ? barChart : lineChart}
    </div>
    )
}

export default Chart;