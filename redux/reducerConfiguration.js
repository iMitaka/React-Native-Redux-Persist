import { combineReducers } from 'redux'
import security from './security/security-reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const securityPersistConfig = {
    key: 'security',
    storage: storage
}

export const reducers = combineReducers({
    security: persistReducer(securityPersistConfig, security)
})