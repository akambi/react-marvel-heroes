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
import StyledIconButton from './StyledIconButton';
import InfoIcon from 'material-ui-icons/Info';

import IssueLink from './IssueLink';
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
            subtitle={<Wrapper>{item.urls.map((urlConfig, index) => <IssueLink key={`url-${index}`} href={urlConfig.url} target="_blank">
            {urlConfig.type.charAt(0).toUpperCase() + urlConfig.type.slice(1)}
            </IssueLink>)}</Wrapper>}
            actionIcon={
              <StyledIconButton>
                <InfoIcon />
              </StyledIconButton>
            }
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
