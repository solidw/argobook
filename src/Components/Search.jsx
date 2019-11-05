import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.png';
import searchIcon from '../search.svg';

class Search extends Component {
    render() {
        const { handleChange, handleKeyPress, handleSubmit } = this.props;

        return (
            <Div>
                <a href="http://argos.or.kr" rel="noopener noreferrer" target="_blank"><Image width="auto" height="50px" src={logo} /></a>
                <Div>
                    <Input onKeyPress={handleKeyPress} placeholder="Type book's title" onChange={handleChange} />
                    <Button onSubmit={handleSubmit}><img src={searchIcon} alt="FIND" /></Button>
                </Div>
            </Div>
        )
    }
}

const Image = styled.img`   
    padding:2em;
    `
const Input = styled.input`
    flex : 0 0 180%;
    border: 1px solid white;
    border-radius: 3px;

    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: 2em;
    padding-left: 3em;
    font-size:1em;
    ::placeholder {
        color: rgb(123,123,123);
    }
    `

const Button = styled.button`
    flex:none;
    background:transparent;
    background-color: rgb(167,167,167);
    border-radius: 3px;
    border: 1px solid white;
    font-color: black;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size:1em;
    width: 2em;
    `

const Div = styled.div`
    background: transparent;
    background-color: rgb(123,123,123);
    display:flex;
    `

export default Search;