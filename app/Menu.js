import React from 'react';

var butStyle = {display: "inline", position: "relative", float: "none"};
export default class SearchableTable extends React.Component {
	constructor() {
		super();
		// Initial state of the component
        this.state = {filterText: ''}
    }
    contentX(){
    	console.log('contentX pressed')
    }
    contentY(){
    	console.log('contentY pressed')
    }
	render(){
		return (
			<div id='Menu'>
				<button style={butStyle} onClick={this.contentX}>Content X</button>
				<button style={butStyle} onClick={this.contentY}>Content Y</button>
			</div>
		);
	}
}