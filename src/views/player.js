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
                    <img src="https://p1.music.126.net/gGk-RFCXQb1pDIQybQcwgw==/8980810975735171.jpg" alt=""/>
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
                <div className="progress">
                    <div className="realtime">
                        <div className="realcircle" onMouseDown={this.ProgressChangedown} onMouseUp={this.ProgressChangemove}>●</div>
                    </div>
                    
                </div>
            </div>
        )
    }
    ProgressChangedown(e){
        console.log(e)
        
    
    }
    ProgressChangemove(e){
        console.log(e)
        let oDivX = e.clientX - this.offsetLeft;
        let oDivY = e.clientY - this.offsetTop;
    }
    componentDidMount(){
        
    }
}
export default Player;