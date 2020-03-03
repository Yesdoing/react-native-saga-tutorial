import { tv } from './../../api/api'
import { all, take, call, put } from 'redux-saga/effects'
import {
	TV_REQUEST,
	loadingStart,
	tvSuccess,
	tvFailure,
	loadingEnd,
	POPULAR_REQUEST,
	popularSuccess,
	popularFailure,
	AIRING_TODAY_REQUEST,
	airingTodaySuccess,
	airingTodayFailure,
	TOP_RATED_REQUEST,
	topRatedSuccess,
	topRatedFailure,
} from '.'

function* tvDetail() {
	while (true) {
		const payload = yield take(TV_REQUEST)

		yield put(loadingStart())
		try {
			const res = yield call(tv.getShow, payload)

			if (res) {
				yield put(tvSuccess(res))
			}
		} catch (error) {
			yield put(tvFailure(error))
		} finally {
			yield put(loadingEnd())
		}
	}
}

function* tvPopular() {
	while (true) {
		yield take(POPULAR_REQUEST)

		yield put(loadingStart())

		try {
			const res = yield call(tv.getPopular)
			if (res) {
				yield put(popularSuccess(res))
			}
		} catch (error) {
			yield put(popularFailure(error))
		} finally {
			yield put(loadingEnd())
		}
	}
}

function* tvAiringToday() {
	while (true) {
		yield take(AIRING_TODAY_REQUEST)

		yield put(loadingStart())

		try {
			const res = yield call(tv.getAiringToday)

			if (res) {
				yield put(airingTodaySuccess(res))
			}
		} catch (error) {
			yield put(airingTodayFailure(error))
		} finally {
			yield put(loadingEnd())
		}
	}
}

function* tvTopRated() {
	while (true) {
		yield take(TOP_RATED_REQUEST)

		yield put(loadingStart())

		try {
			const res = yield call(tv.getTopRated)
			if (res) {
				yield put(topRatedSuccess(res))
			}
		} catch (error) {
			yield put(topRatedFailure(error))
		} finally {
			yield put(loadingEnd())
		}
	}
}

export function* tvSaga() {
	yield all([tvDetail(), tvPopular(), tvAiringToday(), tvTopRated()])
}
