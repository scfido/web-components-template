import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';
import MyLabel from '..';


describe("<MyLabel />", () => {
    let wrapper = null;

    afterEach(() => {
        if (wrapper != null)
            wrapper.unmount();
    })

    it('Render correctly', () => {
        wrapper = enzyme.mount(<MyLabel />);
        expect(wrapper.find("label")).to.have.lengthOf(1);
    });
});