import React, { Component } from 'react';


class InputBox extends Component {


    constructor(props) {

        super(props)

    }

    state = {
        text: [
            { textToSpeech: '' },
            { keyboardText: '' }
        ]
    }



    // handleKeyboardInput = (event) => {
    //     let a = event.target.value;
    //     let b = this.setState({ text: [{ keyboardText: a }] });
    //     console.log();
    // }



    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card indigo">
                        <div className="card-content white-text">

                            <input type="text"
                               // value={this.props.ttspeech}
                                onChange={this.props.changed}
                            // onKeyPress={}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default InputBox;
