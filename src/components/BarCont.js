import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';

function datas(props) {
  var labelMe = props.map(d =>  d.continent);
  var caseData = props.map(d => d.deaths);
  return(
    {
      labels: labelMe,
      datasets: [
        {
        label: 'Deaths',
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderWidth: 2,
        data: caseData
        }
      ]
    }
  );
}

class BarCont extends Component{
  constructor(props){
    super(props);
    this.state = {
      cont: []
    }
  }

// fetch data here
    componentDidMount() {
        axios.get('https://corona.lmao.ninja/v2/continents?sort=deaths')
        .then(res => {
          const cont = res.data;
          this.setState({ cont });
        })
        .catch(err =>{
            console.log("Error getting data", err)
        })
    }

  render(){
    return (
      <div>
        <Bar
          data={datas(this.state.cont)}
          options={{
            title:{
              display:true,
              text:'Number of deaths per Continent',
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )
  }
}

export default BarCont;