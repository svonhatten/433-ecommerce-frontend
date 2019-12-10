import React from 'react';

export default class ExtraOptions extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }

    render() {
      return(
        <div>
            <form key={'viewOrder'}>
                <input type="button" value={"View Your Orders"}/>
            </form>
        </div>
      )  
    }
  }