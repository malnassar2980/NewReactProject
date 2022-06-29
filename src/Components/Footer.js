import React, { Component } from 'react'

export class Footer extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            message : 'click on the subscribe button to get our news'
       }
       this.clickUpdate = this.clickUpdate.bind(this)
   }
   
   clickUpdate() {
      this.setState({
          message : 'Thank you for subscribe'
      })
      console.log(this)
    }
    render() {
        return (
            <div className="Footer">
             <h1>{this.state.message}</h1>
             <button onClick={this.clickUpdate}>Subscribe</button>
            </div>
        )
    }
}

export default Footer
