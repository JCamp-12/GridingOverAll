import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state={ term: '' };
  }

  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
  // **Used the es16 fat arrow syntax above so the below is not needed**
  // onInputChange(event) {
  //   console.log(event);
  // }
}

export default SearchBar;