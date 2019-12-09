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
                SubCategory={res.SubCategory}
                Title={res.Title}
                ManageNo={res.ManageNo}
                isRented={res.isRented}
            />))
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h1>
                        ARGOBOOK DATA
                    </h1>
                </div>
                <Book
                    key={0}
                    No={"번호"}
                    Category={"대분류"}
                    SubCategory={"소분류"}
                    Title={"타이틀"}
                    ManageNo={"도서번호"}
                    isRented={"대여 가능"}
                />
                {ret}
            </div>
        )
    }
}

export default BookList;