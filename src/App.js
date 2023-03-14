import React, { Component } from 'react'

/* class-based component called App
   extends inherits from React.Component
   in other words: tells App to behave like a component.
*/
import Table from "./Table";




class App extends Component {

     // you always have a render function in a component
  render() {
    return (
      <div className="App">
        <Table />
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

// make it accessible to the rest of your application
export default App