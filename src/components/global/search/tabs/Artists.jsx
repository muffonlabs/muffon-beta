import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { List, Tab, Segment } from 'semantic-ui-react'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import ErrorData from 'partials/ErrorData'
import Artist from './artists/Artist'

export default class Artists extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount () {
    this.request = axios.CancelToken.source()

    this.search()
  }

  componentWillUnmount () {
    this.request.cancel()
  }

  search () {
    const switchLoader = bool => this.setState({ loading: !!bool })

    switchLoader(true)

    const { query } = this.props

    const url = '/lastfm/search/artists'
    const params = { query: query, limit: 10 }
    const extra = { params: params, cancelToken: this.request.token }

    const handleSuccess = resp =>
      this.setState({ artists: resp.data.search.artists })
    const handleError = error => this.setState({ error: error, artists: null })

    axios
      .get(url, extra)
      .then(handleSuccess)
      .catch(handleError)
      .then(switchLoader)
  }

  render () {
    const { loading, artists, error } = this.state
    const { active, hideSearch } = this.props

    const artistData = artist => (
      <Artist key={uuid()} {...{ artist, hideSearch }} />
    )
    const artistsList = artists && artists.map(artistData)
    const artistsData = (
      <Router>
        <div className="searchResultsTabContent">
          <List
            selection
            size="medium"
            verticalAlign="middle"
            className="searchResultsTabContentList"
            content={artistsList}
          />
        </div>
      </Router>
    )

    const errorData = error && <ErrorData {...{ error }} />

    const tabContentData = artists ? artistsData : errorData

    const tabContent = (
      <Segment
        className="searchResultsTabContentWrap"
        loading={active && loading}
      >
        {tabContentData}
      </Segment>
    )

    return (
      <Tab.Pane
        className="searchResultsTab"
        active={active}
        content={tabContent}
      />
    )
  }
}
