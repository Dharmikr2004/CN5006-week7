import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmojiCounter from './EmojiCounter';

ReactDOM.render(
    <React.Fragment>
        <EmojiCounter pic="Love" />
        <EmojiCounter pic="Like" />
        <EmojiCounter pic="Sad" />
    </React.Fragment>,
    document.getElementById('root')
);