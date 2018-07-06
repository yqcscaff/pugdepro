import React from 'react'

export default [{
  title: '封面',
  dataIndex: 'cover',
  key: 'cover',
  render: (cover) => (
    <div>
      <img style={{ width: '140px', height: '200px' }} src={cover} alt="cover" referrerPolicy ="never" />
    </div>
  )
}, {
  title: '标题',
  dataIndex: 'title',
  key: 'title',
}, {
  title: '评分',
  dataIndex: 'rate',
  key: 'rate',
}, {
  title: '封面宽',
  dataIndex: 'cover_x',
  key: 'cover_x',
}, {
  title: '封面高',
  dataIndex: 'cover_y',
  key: 'cover_y',
}, {
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Is New',
  dataIndex: 'is_new',
  key: 'is_new'
}, {
  title: '可播放',
  dataIndex: 'playable',
  key: 'playable'
}, {
  title: '豆瓣地址',
  dataIndex: 'url',
  key: 'url',
  render: (text) => (
    <span>
      <a href={text}>{text}</a>
    </span>
  )
}];