import React, { Component } from 'react';

class RequestForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			category: '',
			description: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const tgt = e.target;
		if (tgt.type !== 'radio' || tgt.checked) {
			this.setState({[tgt.name]: tgt.value});
		}
	}

	handleSubmit(e) {
		let errorMsg = '',
			email = this.state.email,
			description = this.state.description;
		  /*emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;*/
		// Email regular expression taken from https://emailregex.com/

		e.preventDefault();

		if (email.length === 0) {
			alert("Please enter an email so we can get in touch.");
			return;
		} // else if (!emailRegex.test(email)) {

			// errorMsg += "That doesn't really look like an email address."
		// }
		if (this.state.category.length === 0) {
			alert("Please choose a category for your suggested topic.");
			return;
		}

		if (description.length < 10) {
			alert("Hmm, that description is awfully short.");
			return;
		}

		if (description.length > 200) {
			alert("Please keep your description to 200 characters or less.");
			return;
		}
		this.setState({
			email: '',
			category: '',
			description: ''
		});

		alert("Thanks! We'll be in touch.");
	}


	render() {
		return (
			<form class="resource__request-form global-footer__block" onSubmit={this.handleSubmit}>
				<h4>Suggest a topic</h4>
				<label for="email__input">Email:</label><input name="email" type="text" id="email__input" placeholder="your.name@yesmail.com" onChange={this.handleChange} value={this.state.email}/>
				<div class="category__radios">
					<label for="html__radio">
						<input name="category"
							type="radio"
							value="html"
							id="html__radio"
							checked={this.state.category === 'html'}
							onChange={this.handleChange} />HTML</label>
					<label for="css__radio">
						<input name="category"
							type="radio"
							value="css"
							id="css__radio"
							checked={this.state.category === 'css'}
							onChange={this.handleChange} />CSS</label>
					<label for="js__radio">
						<input name="category"
							type="radio"
							value="js"
							id="js__radio"
							checked={this.state.category === 'js'}
							onChange={this.handleChange} />JS</label>
					<label for="quality__radio">
						<input name="category"
							type="radio"
							value="quality"
							id="quality__radio"
							checked={this.state.category === 'quality'}
							onChange={this.handleChange} />Quality</label>
					<label for="other__radio">
						<input name="category"
							type="radio"
							value="other"
							id="other__radio"
							checked={this.state.category === 'other'}
							onChange={this.handleChange} />Other</label>
				</div>
				<textarea name="description" placeholder="Tell us what you'd like to hear about." id="description__textbox" onChange={this.handleChange} value={this.state.description}></textarea>
				<button type="submit">Send</button>
			</form>
		);
	}
}

export default RequestForm;
