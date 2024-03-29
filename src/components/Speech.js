 
import React, { Component } from "react"
import InputBox from './InputBox/InputBox'; 

//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition = window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'


//------------------------COMPONENT-----------------------------

class Speech extends Component {

  constructor(props) {
    super(props)
    
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  state = {
    listening: false,
    ttFinalTranscript: ''
  }

  toggleListen = () => {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen = () => {

    console.log('listening?', this.state.listening)

    // if the state of listening is TRUE, start voice recog
    if (this.state.listening) {
      recognition.start()
      //on extended pause continue listening and dont end
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }
      //else stop 
    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''; 

    
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').innerHTML = finalTranscript
      console.log('************[FINALTRANSSCRIPT ]************ \n'+ finalTranscript); 
      this.setState({ttFinalTranscript: finalTranscript});
    
    //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening'){
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          document.getElementsByClassName('textinput').innerHTML = finalText
        }
      }
    }
    
  //-----------------------------------------------------------------------
    
    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }
  
  inputHandler = () => {
    console.log('************[ THE STATE ]************ \n' + this.state.ttFinalTranscript ); 
    return this.state.inputHandler; 

  }

  render() {
    return (
      <div style={container}> 

        {/* <button id='microphone-btn' style={button} onClick={this.toggleListen} /> */}
        <InputBox
          
          paramsAtranscript={this.state.ttFinalTranscript}
          paramsBToggleListen={this.toggleListen}
          paramsCkeyinput={this.props.keyInput}
        />
        <div id='interim' style={interim}></div>
        <div id='final' style={final}></div>
      </div>
    )
  }
}// end class 

export default Speech

//-------------------------CSS------------------------------------

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    button: {
        width: '60px',
        height: '60px',
        background: 'lightblue',
        borderRadius: '50%',
        margin: '6em 0 2em 0'
    },
    interim: {
        color: 'gray',
        border: '#ccc 1px solid',
        padding: '1em',
        margin: '1em',
        width: '300px'
    },
    final: {
        color: 'black',
        border: '#ccc 1px solid',
        padding: '1em',
        margin: '1em',
        width: '300px'
    }
}

const { container, interim, final } = styles