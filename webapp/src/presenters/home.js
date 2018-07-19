import React from 'react';

export default class Home extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const { genImage } = this.props
    genImage();
  }
  render() {
    return (
      <div>
        Welcome to home page
  </div>
    );
  }

}