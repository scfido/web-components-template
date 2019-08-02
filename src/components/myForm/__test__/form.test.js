import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';
import Button from '../';


describe("<Button />", () => {
    let wrapper = null;

    afterEach(() => {
        if (wrapper != null)
            wrapper.unmount();
    })

    it('Render correctly', () => {
        wrapper = enzyme.mount(<Button />);
        expect(wrapper.find("button")).to.have.lengthOf(1);
    });
});