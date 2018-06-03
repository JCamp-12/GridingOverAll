import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state={ term: '' };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />;
        value of the input: { this.state.term }
      </div>
    )
  }
  // **Used the es16 fat arrow syntax above so the below is not needed**
  // onInputChange(event) {
  //   console.log(event);
  // }
}

export default SearchBar;