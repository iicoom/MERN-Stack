import React from 'react';
import Comment from './Comment';


class CommentList extends React.Component{
	
	componentDidMount() {
		//console.log(this.props.data)
	}
	render() {
		let commentNodes = this.props.data.map((comment,index) => {
	      return (
	        <Comment
	          author={ comment.author }
	          key={ index }
	          text={ comment.text }
	          uniqueID={comment._id}
	          onCommentDelete={ this.props.onCommentDelete }
	          onCommentUpdate={ this.props.onCommentUpdate }>
	          	{ comment.text }
	        </Comment>
	      )
	    })

		return (
			<div>
			{ commentNodes }
			</div>
		)
	}
}

export default CommentList;