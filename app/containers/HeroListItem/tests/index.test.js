/**
 * Test the repo list item
 */

import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ListItem from 'components/ListItem';
import { HeroListItem } from '../index';

const renderComponent = (props = {}) => render(
  <IntlProvider locale="en">
    <HeroListItem {...props} />
  </IntlProvider>
);

describe('<HeroListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/react-marvel/react-marvel',
      name: 'react-marvel',
      open_issues_count: 20,
      full_name: 'react-marvel/react-marvel',
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(
      <HeroListItem item={item} />
    );
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });

  it('should not render the current filter', () => {
    const renderedComponent = renderComponent({
      item,
      currentUser: item.owner.login,
    });
    expect(renderedComponent.text()).not.toContain(item.owner.login);
  });

  it('should render filters that are not the current one', () => {
    const renderedComponent = renderComponent({
      item,
      currentUser: 'nikgraf',
    });
    expect(renderedComponent.text()).toContain(item.owner.login);
  });

  it('should render the repo name', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.name);
  });

  it('should render the issue count', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.open_issues_count);
  });

  it('should render the IssueIcon', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.find('svg').length).toBe(1);
  });
});
