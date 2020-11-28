import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import TableSimilarArtist from './TableSimilarArtist'
import { v4 as uuid } from 'uuid'

export default class Table extends React.PureComponent {
  render () {
    const { similar } = this.props

    const similarArtistData = artist => {
      const key = uuid()
      const similarArtistProps = { artist, key }

      return <TableSimilarArtist {...similarArtistProps} />
    }
    const similarListData = similar.map(similarArtistData)
    const similarData = similar.length > 0 && <Router>{similarListData}</Router>

    return <React.Fragment>{similarData}</React.Fragment>
  }
}