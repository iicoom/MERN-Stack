import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from '../components/CommentBox';


ReactDOM.render(
	<CommentBox url='http://localhost:3000/comments' pollInterval={10000}/>,
	document.getElementById('root')
);