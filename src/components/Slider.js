import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [{
        title: '代办',
        icon: 'todoList-icon'
      }]
    };
  }
  render() {
    const { navList } = this.state;
    return (
      <div>
        {
          navList.map((item, k) => {
            return (
              <div key={{k}} className="nav-item">
                {item.title}
              </div>
            );
          })
        }
      </div>
    );
  }
}
