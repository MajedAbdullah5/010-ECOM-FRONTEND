import React, {Component} from 'react';
import {Button} from "react-bootstrap";
class App extends Component {
    render() {
        return (
            <div>
              <Button variant="primary">Hello World</Button>
              <Button variant="primary"><i className="fa fa-home"></i>Hello World</Button>
            </div>
        );
    }
}

export default App;