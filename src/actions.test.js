import * as actions from './actions'
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants';

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureMockStore([thunkMiddleware])

describe('search field', () => {
	it('should create an action to search robots', () => {
		const text = 'woo'
		const expectedAction = {
			type:  CHANGE_SEARCH_FIELD,
			payload: text
		}

		expect(actions.setSearchField(text)).toEqual(expectedAction)
	})
})

describe('requesting api', () => {
	const store = mockStore();
	store.dispatch(actions.requestRobots())
	const action = store.getActions()
	console.log('action', action)
	const expectedAction = {
		type:  REQUEST_ROBOTS_PENDING
	}

	it('handles requesting robots', () => {
		expect(action[0]).toEqual(expectedAction)

	})
})