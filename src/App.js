import React, { Component } from 'react';
import Search from './Components/Search';
import BookList from './Components/BookList';
import bookData from './books.json';

import './App.css';

class App extends Component {
  state = {
    input: '',
    inputTimeout: 200,
    inputTimeoutEvent: undefined,
    data: bookData,

  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });

    if (this.state.inputTimeoutEvent) {
      clearTimeout(this.state.inputTimeoutEvent);
    }

    this.state.inputTimeoutEvent = setTimeout(() => this.handleSubmit(), this.state.inputTimeout);
  }

  handleSubmit = () => {
    const { input } = this.state;
    if (input === '') {
      this.setState({
        data: bookData
      })
    }
    else {
      this.setState({
        input: input,
        data: bookData.filter(item => {
          const filteredByCategory = item['Category'].toLowerCase().replace(/\s/gi, "");
          const filteredByTitle = item['Title'].toLowerCase().replace(/\s/gi, "");
          const filteredByManageNo = item['ManageNo'].toLowerCase().replace(/\s/gi, "");
          const filter = input.toLowerCase().replace(/\s/gi, "");
          return filteredByCategory.includes(filter) | filteredByTitle.includes(filter) | filteredByManageNo.includes(filter);
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
