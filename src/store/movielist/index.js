import { createAction, handleActions } from 'redux-actions';

export default {
  actions: {
    setList: createAction('putList'),
    clsList: createAction('empList'),
  },
  reducer: handleActions({
    putList(state, action) {
      return { ...state, list: action.payload.list };
    },
    empList(state) {
      return { ...state, list: [] };
    }
  }, {
    list: [{"rate":"7.6","cover_x":1500,"title":"恶人传","url":"https:\/\/movie.douban.com\/subject\/30211551\/","playable":false,"cover":"https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2555084871.jpg","id":"30211551","cover_y":2145,"is_new":false},{"rate":"8.1","cover_x":3600,"title":"疾速备战","url":"https:\/\/movie.douban.com\/subject\/26909790\/","playable":false,"cover":"https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2551393832.jpg","id":"26909790","cover_y":5550,"is_new":false},{"rate":"6.7","cover_x":950,"title":"妓房少爷","url":"https:\/\/movie.douban.com\/subject\/30394835\/","playable":false,"cover":"https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2559212046.jpg","id":"30394835","cover_y":1361,"is_new":true},{"rate":"6.0","cover_x":770,"title":"舞出我人生之舞所不能","url":"https:\/\/movie.douban.com\/subject\/26921076\/","playable":true,"cover":"https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2562665382.jpg","id":"26921076","cover_y":1080,"is_new":true},{"rate":"5.5","cover_x":5906,"title":"追龙Ⅱ","url":"https:\/\/movie.douban.com\/subject\/30175306\/","playable":true,"cover":"https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2558294190.jpg","id":"30175306","cover_y":8268,"is_new":false}]
  })
};
