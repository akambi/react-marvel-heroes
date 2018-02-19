import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 500,
  }
});

function List(props) {
  const { classes } = props;
  const ComponentToRender = props.component;

  return (
    <Wrapper className={classes.root}>
      <GridList cellHeight={180} spacing={12}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <Subheader component="div">List of Marvel heroes</Subheader>
        </GridListTile>
        {props.items ? props.items.map((item) => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
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
