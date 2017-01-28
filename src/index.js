import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import ClickBoxContainer from './components/click-box-container';


const api_key = 'AIzaSyB-MSXuhAnwKqdw2TonQkcfw8MujKI4MPM';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
			 };

		this.videoSearch('bouldering');

	}

	videoSearch(term) {
		YTSearch({key: api_key, term: term}, (videos) => {
			this.setState({ 
							videos:videos,
							selectedVideo:videos[0]
							 });
		});
	}
	render() {
		return ( 
		<div> 
		<SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
		<ClickBoxContainer onSelectSearchTerm = {(term) => this.videoSearch(term)}/>
		<div className="row">
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) } videos={this.state.videos} />
		</div>
	 	</div>
	)}
}; 


ReactDOM.render(<App />, document.querySelector('.container')); 


