import React, { Component } from 'react';
import Logo from "../static/images/logo.png"
class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="logo">
                    <img src={Logo}></img>
                    网易云音乐
                </div>
            </div>
        )
    }
}
export default Header;