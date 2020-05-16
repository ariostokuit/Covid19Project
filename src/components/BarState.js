import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';

function datas(props) {
  var labelMe = props.map(d =>  d.state);
  var caseData = props.map(d => d.deaths);
  return(
    {
      labels: labelMe,
      datasets: [
        {
        label: 'Deaths',
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderWidth: 10,
        data: caseData
        }
      ]
    }
  );
}

class BarCou extends Component{
  constructor(props){
    super(props);
    this.state = {
      states: []
    }
  }

// fetch data here
    componentDidMount() {
        axios.get('https://corona.lmao.ninja/v2/states?sort=deaths')
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
      <div>
        <Bar
          data={datas(this.state.states)}
          options={{
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
    )
  }
}

export default BarCou;