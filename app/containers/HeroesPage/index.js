/*
 * HeroesPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectCharacters,
  makeSelectFetchingCharacters,
  makeSelectErrorCharacters } from 'containers/App/store/selectors';

import H2 from 'components/H2';
import HeroesList from 'components/HeroesList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { fetchAllCharacters } from '../App/store/actions';

import { changeFilter } from './store/actions';
import { makeSelectFilter } from './store/selectors';
import reducer from './store/reducer';
import saga from './store/saga';

export class HeroesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * Submit the form to fetch all characters with initial state filter
   */
  componentDidMount() {
    this.props.onSubmitForm();
  }

  render() {
    const { characters, filter, fetching, error } = this.props;
    const heroesListProps = {
      fetching,
      error,
      characters,
      filter,
    };

    return (
      <article>
        <Helmet>
          <title>Marvel heroes</title>
          <meta name="description" content="List of Marvel heroes" />
        </Helmet>
        <div>
          <Section>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="filter">
                Filter by
                <Input
                  id="filter"
                  type="text"
                  placeholder="Filter by hero's name"
                  value={this.props.filter || ''}
                  onChange={this.props.onChangeFilter}
                />
              </label>
            </Form>
            <HeroesList {...heroesListProps} />
          </Section>
        </div>
      </article>
    );
  }
}

HeroesPage.propTypes = {
  fetching: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  characters: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeFilter: (evt) => dispatch(changeFilter(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(fetchAllCharacters());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  characters: makeSelectCharacters(),
  filter: makeSelectFilter(),
  fetching: makeSelectFetchingCharacters(),
  error: makeSelectErrorCharacters(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'heroes', reducer });
const withSaga = injectSaga({ key: 'heroes', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HeroesPage);
