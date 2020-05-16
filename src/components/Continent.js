import React, {Component} from 'react';
import axios from 'axios';

<<<<<<< Updated upstream
=======
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

>>>>>>> Stashed changes
class Continent extends Component{
    constructor(props){
        super(props);
        this.state = {
            conts: []
        }
    }

    // fetch data here
    componentDidMount() {
        axios.get('https://disease.sh/v2/continents?sort=deaths') // <-- sort here
        .then(res => {
            const conts = res.data;
            this.setState({ conts });
        })
        .catch(err =>{
            console.log("Error getting data", err)
        })
    }

render(){
    return (
    <div className="container">
        <h2>Number of deaths per Continent</h2>
        <p>Sorted by Deaths</p>
        <table className="table table-condensed">
            <thead>
                <tr>
                <th>Continent</th>
                <th>Cases</th>
<<<<<<< Updated upstream
                <th>Today's Cases</th>
                <th>Deaths</th>
                <th>Today's Deaths</th>
=======
                <th>% of Pop. Infected <br />(Cases/Pop.)*100</th>
                <th>% of Death<br />(Death/Cases)*100</th>
                <th>% of Death<br />(Death/Pop.)*100</th>
                <th>% of Recover<br />(Recover/Case)*100</th>
                <th>Deaths</th>
                <th>Population</th>
>>>>>>> Stashed changes
                <th>Tests</th>
                </tr>
            </thead>
            <tbody>
            {this.state.conts.map(cont => 
                <tr>
                    <td>{cont.continent}</td>
<<<<<<< Updated upstream
                    <td>{cont.cases}</td>
                    <td>{cont.todayCases}</td>
                    <td>{cont.deaths}</td>
                    <td>{cont.todayDeaths}</td>
                    <td>{cont.tests}</td>
=======
                    <td>{comma(cont.cases)}</td>
                    <td>{"~" + ((cont.cases/cont.population)*100).toFixed(2) + "%"}</td>
                    <td>{"~" + ((cont.deaths/cont.cases)*100).toFixed(2) + "%"}</td>
                    <td>{"~" + ((cont.deaths/cont.population)*100).toFixed(2) + "%"}</td>
                    <td>{"~" + ((cont.recovered/(cont.cases))*100).toFixed(2) + "%"}</td>
                    <td style={{backgroundColor:"#ff3333"}}>{comma(cont.deaths)}</td>
                    <td>{comma(cont.population)}</td>
                    <td>{comma(cont.tests)}</td>
>>>>>>> Stashed changes
                </tr>
            )}
            </tbody>
        </table>
    </div>
    )
  }
}
export default Continent;