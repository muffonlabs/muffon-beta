import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class PageMenu extends React.Component {
  handleMenuItemClick = (_, { name }) => {
    this.props.scrollToSegmentTop(name)
  }

  render () {
    return (
      <Menu pointing secondary vertical className="w100">
        <Menu.Item
          name="info"
          active={this.props.menuActiveItem === 'info'}
          onClick={this.handleMenuItemClick}
        />
        <Menu.Item
          name="tracks"
          active={this.props.menuActiveItem === 'tracks'}
          onClick={this.handleMenuItemClick}
        />
        <Menu.Item
          name="albums"
          active={this.props.menuActiveItem === 'albums'}
          onClick={this.handleMenuItemClick}
        />
        <Menu.Item
          name="similar"
          active={this.props.menuActiveItem === 'similar'}
          onClick={this.handleMenuItemClick}
        />
      </Menu>
    )
  }
}
