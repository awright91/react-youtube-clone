import React, { Component } from 'react';
import ClickBoxItem from './click-box-item';

const searchTerms = ['Bouldering', 'Sport Climbing', 'Trad Climbing', 'Aid Climbing', 'Alpine Climbing', 'Mountaineering', 'Ice Climbing', 'Indoor Rock Climbing', 'Competition Climbing', 'Buildering'];


const ClickBoxContainer = (props) => {

		

		const climbingSearchTerms = searchTerms.map((climbingTerm) => {
			return (
			<ClickBoxItem 
			className="col-xs-2"
			climbingTerm = {climbingTerm} 
			key={climbingTerm} 
			onSelectSearchTerm = {props.onSelectSearchTerm} 
			/>
			);
	});

		return (
				<div className="row">
 					{climbingSearchTerms}
 				</div>
 		);

	}


	export default ClickBoxContainer; 

