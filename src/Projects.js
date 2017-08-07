import React, { Component } from 'react';

export default class Projects extends Component {
	render() {
		const { data } = this.props
		return (
			<table className="projects highlight">
                  <thead>
                    <tr>
                      
                      <th>Project Name</th>
                      <th>State</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
		          <tbody>
					{
						data.map(({name, id, cost, state})=>(
					                    <tr key={id} className="project"> 
					                      <td>{name}</td>
					                      <td>{state}</td>
					                      <td>{cost}</td>
					                    </tr>
					                ))
					}
		          </tbody>
	          </table>
		);
	}
}
