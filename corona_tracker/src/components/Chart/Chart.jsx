import React,{useState,useEffect}  from 'react';
import {fetchDailyData} from '../../Api'
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
const  Charts =({data:{confirmed,recovered,deaths}, country})=> {

    const [DailyData, setDailyData]=useState([]);

    useEffect(()=>{
     const fetchAPI= async()=>{
         setDailyData(await fetchDailyData());
     }

     fetchAPI();
         
    },[]);

    const lineChart=(
        DailyData.length?(
    <Line
     data={{
         labels : DailyData.map(({date})=> date),
         datasets: [{
          data: DailyData.map(({confirmed}) => confirmed),
          label:'Infected',
          borderColor: '#3333ff',
          backgroundColor: 'rgba(0,0,255,0.5)',
          fill: true,
         },{
            data: DailyData.map(({deaths}) => deaths),
            label:'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true,
         }] 
     }}
/>):null  
    );

    const Barchart =
    (
        confirmed?(
            <Bar 
            data ={{
                labels: ['Infected','Recovered','Deaths'],
                datasets: [{
                    label:'People',
                    backgroundColor: ['rgba(0,0,255,0.5','rgba(0,255,0,0.5)','rgba(255,0,0,0.5'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]

            }}
             options={{
                 legend:{display:false},
                 title: {display: true,text:`Current state in ${country}`},
             }} />
        ):null
    );


        return (<div className={styles.container}>
       { (country)? Barchart: lineChart}
        </div> );

}
 
export default Charts;