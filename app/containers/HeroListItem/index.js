/**
 * HeroListItem
 *
 * Lists the picture, name and the detail link of a marvel character
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';

export class HeroListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    const image = `${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`

    // Render the content of a character into a grid item
    return (
      <GridListTile key={`hero-item-${item.name}`}>
          <Link key={`hero-litem-${item.name}`} to={`/hero/${item.id}`}>
            <img src={image} alt={item.name} />
          </Link>
          <GridListTileBar
            title={item.name}
          />
      </GridListTile>
    );
  }
}

HeroListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(createStructuredSelector({
}))(HeroListItem);
