import React from 'react'
import axios from 'axios'
import { Segment } from 'semantic-ui-react'
import Tags from 'global/Tags'
import setNavSections from './functions/setNavSections'
import getData from './functions/getData'
import handleArtistChange from './functions/handleArtistChange'
import pageData from './functions/pageData'

export default class ArtistTags extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}

    this.setNavSections = setNavSections.bind(this)
    this.getData = getData.bind(this)
    this.handleArtistChange = handleArtistChange.bind(this)
    this.pageData = pageData.bind(this)
  }

  componentDidMount () {
    this._isMounted = true
    this.request = axios.CancelToken.source()

    this.setNavSections(this.params().artistName)
    this.getData()
  }

  componentDidUpdate (prevProps, prevState) {
    this.handleArtistChange(prevProps)
  }

  componentWillUnmount () {
    this._isMounted = false
    this.request.cancel()
  }

  dataName = 'tags'
  navSectionData = 'Tags'

  params = () => this.props.match.params

  contentData = () => {
    const tagsProps = { tags: this.state.data }

    return (
      <Segment className="pageSegment">
        <Tags {...tagsProps} />
      </Segment>
    )
  }

  render () {
    return <React.Fragment>{this.pageData()}</React.Fragment>
  }
}