import React,{Component} from 'react';
import Cards from './components/Cards//Cards';
import Charts from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './Api'
import styles from './App.module.css';

const coronaimage = require('./images/image1.png');

class App extends Component {

      state={
         data:[],
         country:'',
      };

      async componentDidMount(){
          const data=await fetchData();
          this.setState({data});
      }
      handleCountryChange=async(Country)=>{
          const fetchedData=await fetchData(Country);
          this.setState({data:fetchedData, country: Country});
      }

    render() { 
        const {data, country}=this.state;
        return ( 
            <div className={styles.container}>
              <img className={styles.image} src={coronaimage} alt="COVID-19"/> 
              <Cards  data={data} />
              <CountryPicker  handleCountryChange={this.handleCountryChange}/>
              <Charts data={data} country={country} />
            </div>

         );
    }
}
 
export default App;