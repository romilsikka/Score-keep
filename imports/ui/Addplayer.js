import React from 'react';
import {Players} from './../../imports/api/players';

export default class Addplayer extends React.Component{
  handlesubmit(e){
   let playernm = e.target.playernm.value;
   e.preventDefault();
   if(playernm){
     e.target.playernm.value = '';
     Players.insert({
       name:playernm,
       score:0
     })
   }

  }
  render(){
    return(
      <div className="item">
        <form className="form" onSubmit={this.handlesubmit}>
         <input className="form__input" type="text" name="playernm" sutofocus autocomplete="off" placeholder="Add Player" />
         <button className="button">Add Player</button>
        </form>
      </div>
    )
  }
}
