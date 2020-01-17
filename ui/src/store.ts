import { combineReducers, AnyAction, Reducer } from 'redux'

export interface Hawk {
  id: number,
  name: string,
  gender: number
  size: number,
  wingspanBegin: number,
  wingspanEnd: number,
  weightBegin: number,
  weightEnd: number,
  lengthBegin: number,
  lengthEnd: number,
  colorDescription: string,
  behaviorDescription: string,
  habitatDescription: string,
  pictureUrl: string,
}

export interface AppState {
  birds: Hawk[]
}

export const initialState : AppState = {
  birds: [] as Hawk[]
}

// the birds reducer
const birds : (state: AppState, action: AnyAction) => AppState = (state = initialState, action) => {
  return state
}

export const rootReducer : Reducer = combineReducers({
  birds,
})
