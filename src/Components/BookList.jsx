import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
    render() {
        const { data } = this.props;
        const ret = data.map(res => (
            <Book
                key={res.No}
                No={res.No}
                Category={res.Category}
                Title={res.Title}
                ManageNo={res.ManageNo}
            />))
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h1>
                        ARGOBOOK DATA
                    </h1>
                </div>
                {ret}
            </div>
        )
    }
}

export default BookList;