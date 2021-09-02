import { combineReducers } from 'redux'

import addDataReducer from './appdata/addDataReducer'
import clientReducer from './client/clientReducer'

const rootReducer = combineReducers({
  clients: clientReducer,
  user: addDataReducer
})

export default rootReducer