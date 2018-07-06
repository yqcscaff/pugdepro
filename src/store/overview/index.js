import { createAction, handleActions } from 'redux-actions';

export default {
  actions: {
    setLoading: createAction('putLoading')
  },
  reducer: handleActions({
    putLoading(state, action) {
      return { ...state, loading: action.payload.loading || false };
    }
  }, {
    loading: false
  })
};
