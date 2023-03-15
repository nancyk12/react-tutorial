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
                <th>Date</th>
            </tr>
        </thead>
    );
}

//Table Body Component
const TableBody = (props) => {

    
    //construct rows 
    // use map to iterate over each row and wrap it 
    // a html table row
    // registered an onClick listener to remove character
    const rows = props.data.map((row, index) => {
     return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row.date}</td>
          <td><button onClick={()=> props.removeCharacter(index)}>Delete</button></td>
        </tr>
      )
    })
    //return rows wrapped in tbody
    return <tbody>{rows}</tbody>
}
// TABLE is our main Component
class Table extends Component {
    render(){
        //read props passed in from App.js
        const { 
            characterData, 
            removeCharacter,
        } = this.props;
      
        return (
           <table>
                <TableHeader/>
                <TableBody 
                  data={characterData} 
                  removeCharacter={removeCharacter} 
                 />
          </table>
          )
        }
      }

export default Table