import React from 'react';
import RandomChar from './randomChar';
// import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

// describe('Testing <RandomChar/>', () => {
//     it('RandomChar have rendered correctly', () => {
//         const char = renderer.create(<RandomChar/>).toJSON();
//         expect(char).toMatchSnapshot();
//     })
// })
describe('Testing <RandomChar/>', () => {
    const char = shallow(<RandomChar/>);
    describe('Testing snap & state', () => {
        it('RandomChar have rendered correctly', () => {
            // const char = shallow(<RandomChar/>);
            expect(char).toMatchSnapshot();
        });
        // it('should render a title', () => {
        //     const wrapper = shallow(<Document title='Some title'/>);
        //     expect(wrapper.prop('title')).toEqual('Some title')
        // })
        it('RandomChar state "char" is empty object', () => {
            // const char = shallow(<RandomChar/>);
            // expect(char.state().char).toBeObject();
            expect(char.state().char).toBeTruthy();
        });
        it('RandomChar state loading is true', () => {
            expect(char.state().loading).toBeTruthy();
        });
        it('RandomChar state error is false', () => {
            expect(char.state().error).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('testing onCharLoaded', () => {
            char.instance().onCharLoaded();
            expect(char.state().loading).toBeFalsy();
        });
        it('testing onError', () => {
            char.instance().onError();
            expect(char.state().loading).toBeFalsy();
            expect(char.state().error).toBeTruthy();
        });
        it('testing updateChar', () => {
            char.instance().updateChar();
            expect(char.state().loading).toBeFalsy();
        });
    });
})