import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import HeroListItem from 'containers/HeroListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import HeroesList from '../index';

describe('<HeroesList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <HeroesList loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <HeroesList
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the repositories if loading was successful', () => {
    const repos = [{
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/react-marvel/react-marvel',
      name: 'react-marvel',
      open_issues_count: 20,
      full_name: 'react-marvel/react-marvel',
    }];
    const renderedComponent = shallow(
      <HeroesList
        repos={repos}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={repos} component={HeroListItem} />)).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <HeroesList
        repos={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
