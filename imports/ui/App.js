import React from 'react';
import TitleBar from './TitleBar';
import Addplayer from './Addplayer'
import Playerlist from './Playerlist';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <TitleBar title="Score-Keep "/>
         <div className="wrapper">
           <Playerlist players={this.props.players} />
           <Addplayer/>
         </div>

      </div>
    )
  }
}
