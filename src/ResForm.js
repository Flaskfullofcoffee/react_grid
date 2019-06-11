import React, { Component } from 'react'
import { Mailer } from 'nodemailer'
import axios from 'axios'
import './App.scss'

class ResFrom extends Component {


    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

  render() {
    return (
      <div>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
              <label for="message">Message</label>
              <textarea className="form-control" rows="5" id="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {/* <p className="App-intro">{this.state.data}</p> */}
      </div>
    )
  }
}

export default ResFrom



// state = {
//     data: null
//   };
//
// componentDidMount() {
//       // Call our fetch function below once the component mounts
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//     // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch('/express_backend');
//     const body = await response.json();
//
//     if (response.status !== 200) {
//       throw Error(body.message)
//     }
//     return body;
//   };
