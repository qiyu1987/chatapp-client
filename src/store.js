import { createStore, applyMiddleware, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducers/index'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancher = composeEnhancers(applyMiddleware(ReduxThunk))

const store = createStore(reducer, enhancher)

export default store