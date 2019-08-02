import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';
import MyButton from '..';


describe("<MyButton />", () => {
    let wrapper = null;

    afterEach(() => {
        if (wrapper != null)
            wrapper.unmount();
    })

    it('Render correctly', () => {
        wrapper = enzyme.mount(<MyButton />);
        expect(wrapper.find("button")).to.have.lengthOf(1);
    });
});