import React from 'react';
import { createStore } from 'redux';
import { Table, notification } from 'antd';
import { connect, Provider } from 'react-redux';
import request from '../utils/request';
import actions from '../../store/actions';
import reducers from '../../store/reducers';
import columns from './columns'

const store = createStore(reducers);
/*  const FETCH_URL = '/j/search_subjects';
request.get({uri: FETCH_URL + '?type=movie&tag=热门&page_limit=5&page_start=0'}).then(res => {
   this.props.setList({ list: res.subjects });
 }); */

class Temp extends React.Component {
  componentDidMount() {
    request({
      uri: '/movie/list',
      method: 'POST'
    })
      .then(res => {
        // this.props.setList({ list: res.subjects });
      })
      .catch(err => {
        notification.open({message: err.message})
      });
  }
  render() {
    const list = this.props.list;
    console.log(list)
    return (
      <div>
        <Table rowKey="id" dataSource={list} columns={columns} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.movielist });

const mapDispatchToProps = (dispatch) => {
  return {
    setList(list) {
      dispatch(actions.movielist.setList(list));
    },
    clsList() {
      dispatch(actions.movielist.clsList());
    }
  };
};

const ConnectedRoot = connect(
  mapStateToProps,
  mapDispatchToProps
)(Temp);

export default class MovieList extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRoot />
      </Provider>
    );
  }
}