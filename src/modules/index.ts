import { all } from 'redux-saga/effects'
import { combineReducers } from 'redux'
import movies, { moivesSaga } from './movies'
import tv from './tv'
import { tvSaga } from './tv/saga'

const rootReducer = combineReducers({
	movies,
	tv,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
	yield all([moivesSaga(), tvSaga()])
}
