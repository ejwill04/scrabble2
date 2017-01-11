import scoreWord from '../lib/helperFunctions/scoreWord';
import Application from '../lib/components/Application';

import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
import React from 'react';

describe('scoreWord', () => {
  it('should return a score when a string is entered', () => {
    expect(scoreWord('word')).to.equal(8);
  });

  it('should multiple the score if multiplier is passed', () => {
    expect(scoreWord('word', 3)).to.equal(24);
  });

  it('should return 0 if null or empty string', () => {
    expect(scoreWord(null)).to.equal(0);
    expect(scoreWord('')).to.equal(0);
  });
});

describe('Application', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });
});
