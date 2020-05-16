import React, {Component} from 'react';
import axios from 'axios';

<<<<<<< Updated upstream
=======
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                <th>Today's Cases</th>
                <th>Deaths</th>
                <th>Today's Deaths</th>
=======
                <th>Deaths</th>
>>>>>>> Stashed changes
                <th>Tests</th>
                </tr>
            </thead>
            <tbody>
            {this.state.states.map(state => 
                <tr>
                    <td>{state.state}</td>
<<<<<<< Updated upstream
                    <td>{state.cases}</td>
                    <td>{state.todayCases}</td>
                    <td>{state.deaths}</td>
                    <td>{state.todayDeaths}</td>
                    <td>{state.tests}</td>
=======
                    <td>{comma(state.cases)}</td>
                    <td style={{backgroundColor:"#ff3333"}}>{comma(state.deaths)}</td>
                    <td>{comma(state.tests)}</td>
>>>>>>> Stashed changes
                </tr>
            )}
            </tbody>
        </table>
    </div>
    )
  }
}
export default State;