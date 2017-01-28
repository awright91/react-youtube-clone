import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: ''};
	}


	render() {
		return (
		<div>
		<input value = {this.state.term} className="form-control" onChange={event => this.onInputChange(event.target.value)} />
		</div>
		);
	}

	onInputChange(term) {
		console.log(term);
		this.setState({term: term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;