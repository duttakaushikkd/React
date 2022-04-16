import { Component, Fragment } from 'react';
import './App.css';
import Calculator from './Calculator';
import Header from './Header';


class App extends Component{
    
  render()
  {

    return(

    <Fragment>
      <Header/>
    <Calculator/>
    </Fragment>
    )
  }

}

export default App;
