import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import updateDocumentComponent from './updateDocumentComponent'

Enzyme.configure({adapter: new Adapter()});

describe(' test updateDocument Component',()=>{

    it('should work perfectly',() => {
        const component = shallow(<updateDocumentComponent/>);
        expect(component.exists()).toEqual(true);

    });

})