import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'
import TrackData from './TrackData'
import ChartKey from './ChartKey'
import Card from 'material-ui/Card'
import { Grid, Row, Col } from 'react-flexbox-grid'
import AudioAnalysis from './AudioAnalysis'

class SongData extends Component {
  render () {
    const config = {
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
        data: [
          this.props.danceability,
          this.props.acousticness,
          this.props.energy,
          this.props.liveness,
          this.props.instrumentalness,
          this.props.speechiness,
          this.props.valence
        ]
      }]
    }
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12} lg={6}>
              <Card className='card'>
                <TrackData
                  title={this.props.title}
                  artist={this.props.artist}
                  albumLink={this.props.albumLink}
                  popularity={this.props.popularity}
                  albumImages={this.props.albumImages}
                />
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card className='card'>
                <AudioAnalysis
                  timeSignature={this.props.timeSignature}
                  tempo={this.props.tempo}
                  songKey={this.props.songKey}
                  duration={this.props.duration}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <Card className='card'>
                <ChartKey />
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card className='card'>
                <div className='chart'>
                  <ReactHighcharts config={config} ref='test' />
                </div>
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default SongData
