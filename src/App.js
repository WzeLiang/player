import React, { Component } from 'react';
import Header from "./views/header"
import Player from "./views/player"
import "./less/main.less"
import './App.css';
import {MUSIC_LIST} from "./data/musiclist"
import $ from 'jquery'
import 'jplayer'
let duration=null;
class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
        currentMusicItem: MUSIC_LIST[0],
        musicList: MUSIC_LIST,
        playModel: 'order', //顺序播放
        progress:0,
        progresswidth:0
    };


}

  render() {
    return (
      <div className="App" >
      <div id="player"></div>
        <Header/>
        <Player progress={this.state.progress} progresswidth={this.state.progresswidth} onProgresschange={this.Progresschangehandler}/>
      </div>
    );
  }
  Progresschangehandler(progress){
    console.log(progress)
    $("#player").jPlayer("play",duration*progress)
  }
  componentDidMount(){
   $("#player").jPlayer({
     ready:function(){
       $(this).jPlayer("setMedia",{
         mp3:"http://www.170mv.com/kw/other.web.ri01.sycdn.kuwo.cn/resource/n1/96/84/1523189814.mp3"
       }).jPlayer("play")
     },
     supplied:"mp3",
     wmode:"window"
   })
   $("#player").bind($.jPlayer.event.timeupdate,(e)=>{
    duration=e.jPlayer.status.duration
    this.setState({
      progress:Math.round(e.jPlayer.status.currentTime),
      progresswidth:e.jPlayer.status.currentPercentAbsolute
    })
    
   })

  }
  componentWillUnmount(){
    $("#player").unbind($.jPlayer.event.timeupdate)
  }
}

export default App;
