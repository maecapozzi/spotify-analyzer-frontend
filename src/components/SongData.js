import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'

class SongData extends Component {
  constructor (props) {
    super()

    this.state = {
      danceability: '',
      acousticness: '',
      energy: '',
      liveness: '',
      instrumentalness: '',
      loudness: '',
      speechiness: '',
      valence: ''
    }
  }

  componentWillMount () {
    for (let i in this.props) {
      console.log(this.props[i])
    }
  }

  render () {
    var config = {
      xAxis: {
        categories: ['danceability', 'acousticness', 'energy', 'liveness', 'instrumentalness', 'loudness', 'speechiness', 'valence']
      },
      yAxis: {
        max: 100
      },
      series: [{
        data: [this.state.danceability, this.props.acousticness, this.props.energy, this.props.liveness, this.props.instrumentalness, this.props.loudness, this.props.speechiness, this.props.valence]
      }]
    }
    return (
      <ReactHighcharts config={config} ref='test' />
    )
  }
}

export default SongData

// <p>danceability: {this.props.danceability}</p>
//         <p>acousticness: {this.props.acousticness}</p>
//         <p>energy: {this.props.energy}</p>
//         <p>liveness: {this.props.liveness}</p>
//         <p>instrumentalness: {this.props.instrumentalness}</p>
//         <p>loudness: {this.props.loudness}</p>
//         <p>speechiness: {this.props.speechiness}</p>
//         <p>valence: {this.props.valence}</p>
