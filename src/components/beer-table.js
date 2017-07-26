import React, { Component } from 'react';

export default class BeerTable extends Component {
	render() {
		return(
			<table className="table">
				<thead>
					<tr>
						<th>Brewery</th>
					</tr>
				</thead>
				<tbody>
				{
				//return local breweries
				//img icon on the left  brewery.images.medium
				//Name would be brewery.Name
				//description would be brewery.description
				}
				</tbody>
			</table>
		)
	}
}
