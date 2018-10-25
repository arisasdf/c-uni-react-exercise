import React, { Component } from 'react';
import resourceJson from '../data/resources';

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nametag : '',
			comment : '',

			comments : [
				{nametag: "Al E.", comment: "Oh wow, I never knew about this! Thanks!"},
				{nametag: "Edward", comment: "I dunno, I'd have to fact check this. But thanks for the info."},
				{nametag: "Trisha", comment: "This sounds very useful. Do you know if it can also be applied in a mobile development context?"}
			]
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const tgt = e.target;
		this.setState({[tgt.name]: tgt.value});
	}

	handleSubmit(e) {
		let nametag = this.state.nametag,
			comment = this.state.comment;

		e.preventDefault();

		if (comment.length === 0) {
			alert('Aren\'t you going to say something?');
			return;
		}
		if (nametag.length === 0) {
			alert('Okay but, tell us who you are');
			return;
		}

		this.setState({
			'comments' : this.state.comments.concat([{
				nametag: this.state.nametag,
				comment: this.state.comment
			}]),
			nametag: '',
			comment: ''
		});
	}

  render() {
    return (
    	<aside class="comments">
        <h2>Comments</h2>
        {this.state.comments.map(function(c){
        	return <div class="comments__single">
        		<p><span class="comments__single--author">{c.nametag}:</span> {c.comment}</p>
        	</div>
        })}
        <h3>Add Comment</h3>
        <form onSubmit={this.handleSubmit}>
	        <label for="nametag">Name:</label>
	        <input name="nametag" id="nametag" value={this.state.nametag} onChange={this.handleChange}></input>
	        <label for="comment">Comment:</label>
	        <textarea name="comment" id="comment" value={this.state.comment} onChange={this.handleChange}></textarea>
	        <button type="submit">Send</button>
	       </form>
      </aside>
    );
  }
}

export default Comments;
