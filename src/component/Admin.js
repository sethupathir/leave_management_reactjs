import React, { Component } from "react";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th>Days</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>sethu#123</td>
                <td>sethupathi</td>
                <td>11/5/2019</td>
            </tr>
        </tbody>
      </table>
    );
  }
}

export default Admin;
