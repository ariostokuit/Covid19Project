import React, {Component} from 'react';
import axios from 'axios';

class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            states: []
        }
    }

    // fetch data here
    componentDidMount() {
        axios.get('https://disease.sh/v2/states?sort=deaths') // <-- sort here
        .then(res => {
            const states = res.data;
            this.setState({ states });
        })
        .catch(err =>{
            console.log("Error getting data", err)
        })
    }

render(){
    return (
    <div className="container">
        <h2>Number of deaths per U.S. State</h2>
        <p>Sorted by Deaths</p>
        <table className="table table-condensed">
            <thead>
                <tr>
                <th>State</th>
                <th>Cases</th>
                <th>Today's Cases</th>
                <th>Deaths</th>
                <th>Today's Deaths</th>
                <th>Tests</th>
                </tr>
            </thead>
            <tbody>
            {this.state.states.map(state => 
                <tr>
                    <td>{state.state}</td>
                    <td>{state.cases}</td>
                    <td>{state.todayCases}</td>
                    <td>{state.deaths}</td>
                    <td>{state.todayDeaths}</td>
                    <td>{state.tests}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
    )
  }
}
export default State;