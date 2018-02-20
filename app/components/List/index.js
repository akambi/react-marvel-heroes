import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';
import { withStyles } from 'material-ui/styles';
import Subheader from 'material-ui/List/ListSubheader';
import { Link } from 'react-router-dom';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IssueLink from './IssueLink';
import StyledIconButton from './StyledIconButton';
import InfoIcon from 'material-ui-icons/Info';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '750px',
    height: '100%',
  }
});

function List(props) {
  const { classes } = props;
  const ComponentToRender = props.component;
  const imageRender = (item) => `${item.get('thumbnail').get('path')}/standard_fantastic.${item.get('thumbnail').get('extension')}`

  return (
    <Wrapper className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} spacing={12} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <Subheader component="div">List of Marvel heroes</Subheader>
        </GridListTile>
        {props.items ? props.items.map((item) => (
            <GridListTile key={'hero-item-' + item.get('name')}>
          <Link key={`hero-litem-${item.get('name')}`} to={`/hero/${item.get('id')}`}>
            <img src={imageRender(item)} alt={item.get('name')} />
          </Link>
          <GridListTileBar
            title={item.get('name')}
            subtitle={<Wrapper>{item.get('urls').map((urlConfig, index) => <IssueLink key={`url-${index}`} href={urlConfig.get('url')} target="_blank">
            {urlConfig.get('type').charAt(0).toUpperCase() + urlConfig.get('type').slice(1)}
            </IssueLink>)}</Wrapper>}
            actionIcon={
              <StyledIconButton>
                <InfoIcon />
              </StyledIconButton>
            }
          />
      </GridListTile>
    )): <ComponentToRender />}
      </GridList>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
