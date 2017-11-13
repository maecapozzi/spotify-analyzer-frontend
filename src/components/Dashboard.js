import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'
import TrackData from './TrackData'
import ChartKey from './ChartKey'
import { Grid, Row, Col } from 'react-flexbox-grid'
import AudioAnalysis from './AudioAnalysis'
import DataCard from './DataCard'

class Dashboard extends Component {
  render () {
    const config = {
      chart: {
        type: 'bar',
        backgroundColor: '#181A1B'
      },
      labels: {
        color: '#5A6575'
      },
      title: 'Audio Features',
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
          colors: ['#00C457']
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
            <Col xs={12} lg={12}>
              <DataCard component={<ReactHighcharts config={config} ref='test' />} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <DataCard component={
                <TrackData
                  title={this.props.title}
                  artist={this.props.artist}
                  albumLink={this.props.albumLink}
                  popularity={this.props.popularity}
                  albumImages={this.props.albumImages}
                />
              } />
            </Col>
            <Col xs={12} lg={6}>
              <DataCard component={<ChartKey />} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <DataCard
                component={
                  <AudioAnalysis
                    type={'Time Signature'} value={this.props.timeSignature}
                  />}
              />
            </Col>
            <Col xs={12} lg={4}>
              <DataCard component={
                <AudioAnalysis
                  type={'Tempo'} value={this.props.tempo}
                />
              } />
            </Col>
            <Col xs={12} lg={4}>
              <DataCard component={
                <AudioAnalysis
                  type={'Duruation'} value={this.props.duration}
                />
              } />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Dashboard
