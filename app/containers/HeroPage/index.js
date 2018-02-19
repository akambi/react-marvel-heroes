/*
 * HeroPage
 *
 * Detail of Marvel hero
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectCharacter,
  makeSelectFetchingCharacter,
  makeSelectErrorCharacter } from 'containers/App/store/selectors';

import H1 from 'components/H1';
import messages from './messages';
import Wrapper from './Wrapper';
import Detail from './Detail';
import StyledPaper from './StyledPaper';
import Typography from 'material-ui/Typography';

import { fetchCharacter } from 'containers/App/store/actions';
import saga from './store/saga';

class HeroPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  /**
   * Fetch the character information
   */
  componentDidMount() {
    this.props.onFetchCharacter(this.props.match.params.id);
  }

  render() {
    const { character, fetching, error } = this.props;
    const thumbnail = character.get('thumbnail');
    const series = character.get('series');
    const comics = character.get('comics');
    return fetching || !thumbnail ? <span/> : (
      <div>
        <Helmet>
          <title>Hero Page</title>
          <meta name="description" content="View marvel hero details" />
        </Helmet>
        <H1>
          {character.get('name')}
        </H1>
        <Wrapper>
          <StyledPaper>
            <img src={`${thumbnail.get('path')}/standard_fantastic.${thumbnail.get('extension')}`} alt={character.get('name')} />
          </StyledPaper>
          <Detail>
            <Typography variant="headline" component="h3">
                {character.get('name')}
            </Typography>
            <Typography component="p">
                {character.get('description')}
            </Typography>        
            <h3>Comis</h3>
            <ul>
              {comics.get('items').map(serie => <li key={serie.get('resourceURI')}>{serie.get('name')}</li>)}
            </ul>
            <h3>Series</h3>
            <ul>
              {series.get('items').map(comic => <li key={comic.get('resourceURI')}>{comic.get('name')}</li>)}
            </ul>
          </Detail>
        </Wrapper>
      </div>
    );
  }
}

HeroPage.propTypes = {
  match: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onFetchCharacter: (characterId) => dispatch(fetchCharacter(characterId)),
  };
}

const mapStateToProps = createStructuredSelector({
  character: makeSelectCharacter(),
  fetching: makeSelectFetchingCharacter(),
  error: makeSelectErrorCharacter(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'hero', saga });

export default compose(
  withSaga,
  withConnect,
)(HeroPage);

