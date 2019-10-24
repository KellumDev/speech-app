import React, {Component} from 'react';
import Speech from '../components/Speech'; 
 

class Landing extends Component {

    
    handleInputkey = (e) => {
        let a = e.target.value
        
        if (e.key === 'Enter') {

            console.log(a);

        }
    }

    

    render() {
        return (
        
            // <div className="Landing-Page" style={styles.background} >
            <div className="Landing-Page" >
                 <h1>Mantis Speech</h1>
                 <Speech 
                    keyInput={
                        this.handleInputkey
                    }
                 />
               
                
              
            </div>
        )
    }
}

export default Landing; 