/**
 * Test the HeroesPage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import HeroesList from 'components/HeroesList';
import { HeroesPage, mapDispatchToProps } from '../index';
import { changeFilter } from '../actions';
import { loadRepos } from '../../App/actions';

describe('<HeroesPage />', () => {
  it('should render the repos list', () => {
    const renderedComponent = shallow(
      <HeroesPage loading error={false} repos={[]} />
    );
    expect(renderedComponent.contains(<HeroesList loading error={false} repos={[]} />)).toEqual(true);
  });

  it('should render fetch the repos on mount if a Filter exists', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HeroesPage
          Filter="Not Empty"
          onChangeFilter={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if Filter is an empty string', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HeroesPage
          onChangeFilter={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if Filter is null', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HeroesPage
          Filter=""
          onChangeFilter={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeFilter', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeFilter).toBeDefined();
      });

      it('should dispatch changeFilter when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const Filter = 'mxstbr';
        result.onChangeFilter({ target: { value: Filter } });
        expect(dispatch).toHaveBeenCalledWith(changeFilter(Filter));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
