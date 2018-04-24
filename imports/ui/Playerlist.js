import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class Playerlist extends React.Component{
   renderplayer (){
     if(this.props.players.length === 0){
       return (
         <div className="item">
           <p  className="item__message">Add your Player to get started</p>
         </div>
       )
     }else{
       return this.props.players.map((player)=>{
         return (
           <Player key={player._id} player = {player} />
     );
     });
     }

  };

  render(){
    return(
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderplayer()}
        </FlipMove>
      </div>
    )
  }
}
Playerlist.propTypes = {
  players: PropTypes.array.isRequired
}
