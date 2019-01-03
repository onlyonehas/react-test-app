import  { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper
beforeEach(() => {
	const mockProp = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}
	wrapper = shallow(<MainPage {...mockProp} />)
})

it('renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
	const mockProp2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'

		}],
		searchField: 'john',
		isPending: false
	}
	const wrapper2 = shallow(<MainPage {...mockProp2} />)
	expect(wrapper2.instance().filterRobots([])).toEqual([{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
	}]);
})

it('filters robots correctly', () => {
	const mockProp3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'

		}],
		searchField: 'a',
		isPending: false
	}
	const filteredRobots = []
	const wrapper3 = shallow(<MainPage {...mockProp3} />)
	expect(wrapper3.instance().filterRobots([])).toEqual(filteredRobots);
})