/**
 * Table React Component
 * 
 */

/**
 * HTML REVIEW
 * thread -> table head
 * tr -> table row
 * th -> table header
 * tbody -> table body
 * td -> table cell
 */

import React, { Component } from "react";

/* 
create two simple function components to make 
our table more readable 
*/

//Table Header Component
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

//Table Body Component
const TableBody = () => {
    return (
     <tbody>
        <tr>
           <td>Charlie</td>
           <td>Janitor</td>
        </tr>
        <tr>
           <td>Mac</td>
           <td>Bouncer</td>
        </tr>
        <tr>
            <td>Dee</td>
             <td>Aspiring actress</td>
                </tr>
        <tr>
            <td>Dennis</td>
            <td>Bartender</td>
        </tr>
    </tbody> 
    )
}

class Table extends Component {

    render(){
        return (
            <table>
              <TableHeader/>
              <TableBody/>
            </table>
          )
        }
      }

export default Table