import React, { Component } from 'react';
import {MUSIC_LIST} from "../data/musiclist"
import Previmg from "../static/images/prev.png"
import Nextimg from "../static/images/next.png"
import Playimg from "../static/images/play.png"
import Pauseimg from "../static/images/pause.png"
import $ from "jqeury"
import "jplayer"
class Player extends Component{
    getInitialSatate(){
        return{
            currentMusicItem:MUSIC_LIST[0]
        }
    }
    render(){
        return(
            <div className="Player">
                <div className="music-logo">
                    <img src="https://p1.music.126.net/gGk-RFCXQb1pDIQybQcwgw==/8980810975735171.jpg" alt="aaa"/>
                </div>
                <div className="name">放漾（电影《反转人生》插曲）</div>
                <div className="contorl-box">
                    <div className="prev">
                        <img src={Previmg} alt=""/>
                    </div>
                    <div className="playorpause">
                     <img src={Playimg} alt=""/>
                    </div>
                    <div className="next">
                        <img src={Nextimg} alt=""/>
                    </div>
                </div>
                <div className="progress" onClick={this.ProgressChange.bind(this)} ref="progressBar">
                    <div className="realtime" style={{width: `${this.props.progresswidth}%`}}>
                        <div className="realcircle" >●</div>
                    </div>
                    <div className="show-sec">{this.props.progress}s</div>
                </div>
            </div>
        )
    }

    ProgressChange(e){
         let progressBar= this.refs.progressBar;

         let progress=(e.clientX-progressBar.getBoundingClientRect().left)/progressBar.clientWidth
        this.props.onProgresschange && this.props.onProgresschange(progress)
    
    }
   
    componentDidMount(){
       
    }
}
export default Player;