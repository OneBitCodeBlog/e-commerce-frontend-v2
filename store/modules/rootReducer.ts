import { combineReducers } from 'redux';

import auth from './auth/reducer';
import category from './admin/category/reducer';

export default combineReducers({
    auth,
    category
});