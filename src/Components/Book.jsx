import React from 'react';
import Axios from 'axios';

const Book = (props) => {
    const onClick = (e) => {
        e.preventDefault();
        if (!props.isRented) {
            Axios.put(`/api/books/rent/${props.No}`)
                .then((res) => {
                    alert("대여되었습니다.")
                })
                .then(() => window.location.reload(false));

        }
        else if (props.isRented) {
            Axios.put(`/api/books/return/${props.No}`)
                .then((res) => {
                    alert("반납되었습니다.")
                })
                .then(() => window.location.reload(false));
        }
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '10px',
        padding: '8px',
        margin: '10px',
        width: '75%',
    };

    const whatBasisStyle = (basis) => ({
        flexBasis: basis + '%',
        margin: '3px',
        padding: '3px',
    });

    const styledButton = {
        borderRadius: 5,
    }

    const rentButton = {
        backgroundColor: 'skyblue',
    }

    const returnButton = {
        backgroundColor: 'orange',
    }

    return (
        <div style={containerStyle}>
            <div style={whatBasisStyle(5)}>
                {props.No}
            </div>
            <div style={whatBasisStyle(10)}>
                {props.Category}
            </div>
            <div style={whatBasisStyle(10)}>
                {props.SubCategory}
            </div>
            <div style={whatBasisStyle(40)}>
                {props.Title}
            </div>
            <div style={whatBasisStyle(10)}>
                {props.ManageNo}
            </div>
            <div style={whatBasisStyle(10)}>
                {props.isRented === "대여 가능" ? props.isRented :
                    props.isRented ? 'O' : 'X'}
            </div>
            <div>
                {
                    props.isRented === "대여 가능" ? "Button" :
                        !props.isRented ?
                            <button onClick={onClick} style={{ ...styledButton, ...rentButton }}>Rent</button> :
                            <button onClick={onClick} style={{ ...styledButton, ...returnButton }}>Return</button>
                }
            </div>
        </div>
    )
}
export default Book;