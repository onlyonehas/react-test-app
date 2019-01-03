import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 

} from './constants'

import * as reducers from './reducers'
import * as actions from './actions'

describe('searchRobots', () =>{
	const intialStateSearch = {
		searchField: ''
	}

	it('it should return the intial state', () =>{
		expect(reducers.searchRobots(undefined, {}))
		.toEqual({searchField : ''})
	})

	it('should handle the CHANGE_SEARCH_FIELD', () =>{
		expect(reducers.searchRobots(intialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'

		})).toEqual({
			searchField: 'abc'
		})
	})
})

describe('requestRobots', () => {
	const intialStateRobots = {
		robots: [],
		isPending: false
	}

	it('should return the intial state', () =>{
		expect(reducers.requestRobots(undefined, {})).toEqual(intialStateRobots)
	})

	it('should handle REQUEST_ROBOTS_PENDING action', () =>{
		expect(reducers.requestRobots(intialStateRobots, {
			type: REQUEST_ROBOTS_PENDING,
		})).toEqual({
			robots: [],
			isPending: true
		})
	})

	it('should handle REQUEST_ROBOTS_SUCCESS action', () =>{
		expect(reducers.requestRobots(intialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: '123', 
				name: 'test',
				email: 'test@gmail.com'
			}]
		})).toEqual({
			robots: [{
				id: '123', 
				name: 'test',
				email: 'test@gmail.com'
			}],
			isPending: false
		})
	})

	it('should handle REQUEST_ROBOTS_FAILED action', () =>{
		expect(reducers.requestRobots(intialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: 'NOOOOOOOOOOOO!'
		})).toEqual({
			error: 'NOOOOOOOOOOOO!',
			robots: [],
			isPending: false
		})
	})
})	