import React from 'react'
import request from 'superagent'
import { url } from '../constants'
export default class ChatroomForm extends React.Component{
    state = {
        message:''
    }
    onSubmit = (event) => {
        // console.log('onsubmit from chatroom form')
        event.preventDefault()
        request.post(`${url}/message`)
            .send({message: this.state.message})
            .then(() => this.setState({message:''}))
            .catch(error => console.log('got an error'))
    }
    onChange = (event) => {
        // console.log('onchange')
        this.setState({
            message: event.target.value
        })
        // console.log('current state:',this.state)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        name='messageForm'
                        type='text'
                        onChange={this.onChange}
                        value={this.state.message}
                        placeholder='Type your message here'
                        ></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }

}