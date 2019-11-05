import React from 'react';

const Book = (props) => {
    const containerStyle = {
        border: '1px solid black',
        borderRadius: '5px',
        padding: '8px',
        display: 'flex',
        width: '50%',
        alignItems: 'center',
        margin: 'auto',
    };

    const whatBasisStyle = (basis) => ({
        flexBasis: basis + '%',
        margin: '1px',
        padding: '3px',
    })

    return (
        <div>
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
        </div>
    )
}
export default Book;