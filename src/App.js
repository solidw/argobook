import React, { Component } from 'react';
import Search from './Components/Search';
import BookList from './Components/BookList';
import bookData from './books.json';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    input: '',
    data: [],
    isRender: false,
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(res => {
        this.setState({ data: res.data, isRender: true });
      })
      .catch(e => {
        console.log('data가 load되지 못했습니다.');
      });
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
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
        {this.state.isRender ? <BookList data={this.state.data} /> : ''}
      </div>
    );
  }
}

export default App;
