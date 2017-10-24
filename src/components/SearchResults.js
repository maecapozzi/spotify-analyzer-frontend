import React, { Component } from 'react'
import SongLink from './SongLink'
import Paper from 'material-ui/Paper'

class SearchResults extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isHidden: false
    }

    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render () {
    if (!this.state.isHidden) {
      return (
        <div className='search-results__container'>
          <Paper style={{
            maxWidth: 800,
            margin: '0 auto',
            padding: '20px'
          }}>
            <div className='search-results--p'>
              {this.props.results.map((result) => {
                return <SongLink key={result.id} id={result.id} name={result.name} artist={result.artist} />
              })}
            </div>
          </Paper>
        </div>
      )
    } else {
      return null
    }
  }
}

export default SearchResults
