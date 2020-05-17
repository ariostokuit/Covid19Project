import React, {Component} from 'react';
import axios from 'axios';

function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

class Countie extends Component{
    constructor(props){
        super(props);
        this.state = {
            conts: []
        }
    }

    // fetch data here
    componentDidMount() {
        axios.get('https://disease.sh/v2/historical/usacounties/california?lastdays=1') // <-- sort here
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
        <h2>Number of Deaths In Orange Countie</h2>
        <table className="table table-condensed">
            <thead>
                <tr>
                <th>state</th>
                <th>county</th>
                <th>time</th>
                </tr>
            </thead>
            <tbody>
            {this.state.conts.map(cont => 
                <tr>
                    <td>{cont.province}</td>
                    <td>{cont.county}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
    )
  }
}
export default Countie;