import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'

class SongData extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var config = {
      chart: {
        type: 'bar',
        width: 800
      },
      title: null,
      xAxis: {
        categories: ['danceability', 'acousticness', 'energy', 'liveness', 'instrumentalness', 'speechiness', 'valence']
      },
      yAxis: {
        max: 1,
        title: {
          text: null
        }
      },
      plotOptions: {
        series: {
          colorByPoint: true,
          colors: ['#7D8DFF']
        }
      },
      series: [{
        data: [this.props.danceability, this.props.acousticness, this.props.energy, this.props.liveness, this.props.instrumentalness, this.props.speechiness, this.props.valence]
      }]
    }
    return (
      <div className='chart'>
        <ReactHighcharts config={config} ref='test' />
      </div>
    )
  }
}

export default SongData
