import React from 'react';

const Book = (props) => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '10px',
        padding: '8px',
        margin: '10px',
        width: '65%',
    };

    const whatBasisStyle = (basis) => ({
        flexBasis: basis + '%',
        margin: '3px',
        padding: '3px',
        // border: '1px solid black',
        // borderRadius: '5px',
    })

    return (
        <div style={containerStyle}>
            <div style={whatBasisStyle(10)}>
                {props.No}
            </div>
            <div style={whatBasisStyle(30)}>
                {props.Category}
            </div>
            <div style={whatBasisStyle(40)}>
                {props.Title}
            </div>
            <div style={whatBasisStyle(20)}>
                {props.ManageNo}
            </div>
        </div>
    )
}
export default Book;