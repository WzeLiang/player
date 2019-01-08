import React, { Component } from 'react';
import Header from "./views/header"
import Player from "./views/player"
import "./less/main.less"
import './App.css';
import {MUSIC_LIST} from "./data/musiclist"
import $ from 'jquery'
import 'jplayer'
class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
        currentMusicItem: MUSIC_LIST[0],
        musicList: MUSIC_LIST,
        playModel: 'order'  //顺序播放
    };


}

  render() {
    return (
      <div className="App" >
      <div id="player"></div>
        <Header/>
        <Player/>
      </div>
    );
  }
   // 播放音乐
   playMusic(musicItem) {
    console.log('musicItem', musicItem)
    $('#player').jPlayer('setMedia', {
        mp3: musicItem.file
    }).jPlayer('play');
    this.setState({
        currentMusicItem: musicItem
    })
}
  componentDidMount(){
    $('#player').jPlayer('setMedia', {
      mp3: "http://www.170mv.com/kw/other.web.ri01.sycdn.kuwo.cn/resource/n1/96/84/1523189814.mp3"
  }).jPlayer('play');
    $('#player').jPlayer({
      supplied: 'mp3',
      wnode: 'window'
  })

  // this.playMusic(this.state.currentMusicItem)

  }
}

export default App;
