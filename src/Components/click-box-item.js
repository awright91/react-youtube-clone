import React from 'react';

class ClickBoxItem extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.onSelected = this.onSelected.bind(this);

	}

	render(){
		return (
		<div>
		<span onClick = {() => this.onSelected(this.props.climbingTerm)} className="click-box-span"> {this.props.climbingTerm}</span>
		</div>
				);
			}

onSelected(term) {
	this.props.onSelectSearchTerm(term);
}

}

export default ClickBoxItem;