import React, { Component } from 'react';
import Book from './Book';
import data from '../books.json';
import styled from 'styled-components';

class BookList extends Component {
    render() {
        const { data } = this.props;
        const ret = (
            <ChildDiv>
                {
                    data.map(res => (
                        <Book key={res.No} No={res.No} Category={res.Category} Title={res.Title} ManageNo={res.ManageNo} />
                    ))
                }
            </ChildDiv>
        )

        return (
            <ParentDiv>
                {ret}
            </ParentDiv>
        )
    }
}

const ParentDiv = styled.div`
    display:flex;
    `
const ChildDiv = styled.div`
    margin-top:1em;
    width: 75%;
    align:center;
    `
export default BookList;