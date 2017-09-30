import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'

class SongData extends Component {
  constructor (props) {
    super(props)

    this.state = {
      danceability: props.danceability,
      acousticness: props.acousticness,
      energy: props.energy,
      liveness: props.energy,
      instrumentalness: props.instrumentalness,
      speechiness: props.speechiness,
      valence: props.valence
    }
  }

  render () {
    var config = {
      chart: {
        type: 'bar'
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
        data: [this.state.danceability, this.state.acousticness, this.state.energy, this.state.liveness, this.state.instrumentalness, this.state.speechiness, this.state.valence]
      }]
    }
    return (
      <ReactHighcharts config={config} ref='test' />
    )
  }
}

export default SongData
