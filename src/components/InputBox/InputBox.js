
//import React, { Component } from 'react';
import React from 'react';
const InputBox = (props) => {

    return (
                    <div className="row">
                        <div className="col s12">
                            <div className="card indigo">
                                <div className="card-content white-text">
        
                                    <input className="textinput" type="text"
                                        defaultValue={props.paramsA}
                                        
                                    // onKeyPress={}
                                    />
                                   <button  onClick={props.paramsB} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
}
// class InputBox extends Component {

/*
 
public String InputBox(String paramsA, String paramsB ){


}



*/
//     constructor(props) {  public string init(string params a ,string params b ) {

//         super(props)

//     }

//     state = {
//         text: [
//             { textToSpeech: '' },
//             { keyboardText: '' }
//         ]
//     }



//     // handleKeyboardInput = (event) => {
//     //     let a = event.target.value;
//     //     let b = this.setState({ text: [{ keyboardText: a }] });
//     //     console.log();
//     // }



//     render() {
//         return (
//             <div className="row">
//                 <div className="col s12">
//                     <div className="card indigo">
//                         <div className="card-content white-text">

//                             <input type="text"
//                                value={this.props.ttspeech}
//                                 onChange={this.props.changed}
//                             // onKeyPress={}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

export default InputBox;
