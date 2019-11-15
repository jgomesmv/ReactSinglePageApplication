import './about.page.scss';

import React from 'react';

export default class AboutPage extends React.Component {
  pageName = "about";
  
  render() {
    return (
      <div className="p-about">
        <h1>This is the {this.pageName} page</h1>
      </div>
    );
  };
}