import React, { Component } from 'react';
import Search from './Components/Search';
import BookList from './Components/BookList';
import bookData from './books.json';

import './App.css';

class App extends Component {
  state = {
    input: '',
    data: bookData,
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = () => {
    const { input, data } = this.state;
    if (input === '') {
      this.setState({
        data: bookData
      })
    }
    else {
      this.setState({
        input: input,
        data: data.filter(item => {
          const lc = item['Title'].toLowerCase();
          const filter = input.toLowerCase();
          return lc.includes(filter);
        })
      })
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    const { input } = this.state;
    const {
      handleChange,
      handleKeyPress,
      handleSubmit
    } = this;

    return (
      <div>
        <Search handleChange={handleChange} handleSubmit={handleSubmit} handleKeyPress={handleKeyPress} />
        <BookList data={this.state.data} />
      </div>
    );
  }
}

export default App;
