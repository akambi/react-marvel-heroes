import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import HeroListItem from 'containers/HeroListItem';

function HeroesList({ fetching, error, characters }) {
  if (fetching) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (characters !== false) {
    return <List items={characters} component={HeroListItem} />;
  }

  return null;
}

HeroesList.propTypes = {
  fetching: PropTypes.bool,
  error: PropTypes.any,
  characters: PropTypes.any,
};

export default HeroesList;
