import React, {Component} from 'react';
import axios from 'axios';

class Country extends Component{
    constructor(props){
        super(props);
        this.state = {
            conts: []
        }
    }

    // fetch data here
    componentDidMount() {
        axios.get('https://disease.sh/v2/countries?sort=deaths') // <-- sort here
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
        <h2>Number of Deaths Per Country</h2>
        <p>Sorted by Deaths</p>
        <table className="table table-condensed">
            <thead>
                <tr>
                <th>Country</th>
                <th>Cases</th>
                <th>Today's Cases</th>
                <th>Deaths</th>
                <th>Today's Deaths</th>
                <th>Tests</th>
                </tr>
            </thead>
            <tbody>
            {this.state.conts.map(cont => 
                <tr>
                    <td>{cont.country}</td>
                    <td>{cont.cases}</td>
                    <td>{cont.todayCases}</td>
                    <td>{cont.deaths}</td>
                    <td>{cont.todayDeaths}</td>
                    <td>{cont.tests}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
    )
  }
}
export default Country;