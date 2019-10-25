import React from 'react'
import {url} from '../constants'
import { connect } from 'react-redux'
import {addMessages} from '../actions/actions'
class Chatroom extends React.Component {
    state = {
        messages:[]
    }
    source = new EventSource(`${url}/stream`)//EventSource class comes from react
    componentDidMount(){
        // console.log("Component did mout of chat room component")

        this.source.onmessage = event => {
            //console.log("Got a message!", event)
            const messages = JSON.parse(event.data)
            this.setState({messages})
            this.props.addMessages(messages)
        }

        // console.log('source ',this.source)
    }
    render(){
        if(!this.props.messages) return "wait for messages"
        // console.log("local state", this.state)
        return(<div>
            <ul>
                {this.props.messages.map( message => 
                    <li key={message.id}>
                        {message.message}
                    </li>
                )}
            </ul>
        </div>)
    }
}
const mapStateToProps = (state) => {
    console.log("mstp of chatroom coponent")
    return {
        messages: state.message
    }
}
export default connect(mapStateToProps, {addMessages})(Chatroom)