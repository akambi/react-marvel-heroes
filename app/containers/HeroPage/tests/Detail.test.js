import React from 'react';
import { shallow } from 'enzyme';

import Detail from '../Detail';

describe('<Detail />', () => {
  it('should render an <ul> tag', () => {
    const renderedComponent = shallow(<Detail />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Detail />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Detail id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Detail attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
