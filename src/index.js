'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var botLost = [
  {
    "handle": "describemeknot",
    "img": "https://pbs.twimg.com/profile_images/798175562640588800/xnNzNUow.jpg",
    "bot": "Describe Me Knot"
  },
  {
    "handle": "michaelswebbot",
    "img": "https://abs.twimg.com/sticky/default_profile_images/default_profile_2_400x400.png",
    "bot": "Michael Li"
  },
  {
    "handle": "angstybot",
    "img": "https://pbs.twimg.com/profile_images/798240014157090816/mhssYKwm.jpg",
    "bot": "Millenial"
  },
  {
    "handle": "testbawt",
    "img": "https://pbs.twimg.com/profile_images/798239102491643904/oHQ3HOLB_400x400.jpg",
    "bot": "GreekLifeTruths"
  },
  {
    "handle": "FruitFactBot",
    "img": "https://pbs.twimg.com/profile_images/798273222349357057/eCkZ-zSA.jpg",
    "bot": "Fruit Facts"
  },
  {
    "handle": "camille_weins",
    "img": "https://pbs.twimg.com/profile_images/796944447975981056/mLeeJjbr_400x400.jpg",
    "bot": "Friendly pharma"
  },
  {
    "handle": "rcboto",
    "img": "https://pbs.twimg.com/profile_images/798260013328437253/V8cwS88s_400x400.jpg",
    "bot": "NYU Breaking News"
  },
  {
    "handle": "jtharrison0528",
    "img": "https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png",
    "bot": "celeb gossip"
  },
  {
    "handle": "clickbait_",
    "img": "https://pbs.twimg.com/profile_images/798182924533243904/KWjpr0cj_400x400.jpg",
    "bot": "clickbait generator"
  },
  {
    "handle": "KirsalyBotTest1",
    "img": "https://pbs.twimg.com/profile_images/797994940399763456/ReaQ9Qjh_400x400.jpg",
    "bot": "What aBot colors?"
  },
  {
    "handle": "femalegazebot",
    "img": "https://pbs.twimg.com/profile_images/797259377975631872/Udu2AbCw_400x400.jpg",
    "bot": "female gaze bot"
  },
  {
    "handle": "connormaxlinbot",
    "img": "https://abs.twimg.com/sticky/default_profile_images/default_profile_2_400x400.png",
    "bot": "random new products"
  }
];

var Profile = React.createClass({
    getInitialState: function(){
        return {
            searchTerm: undefined
        };  
    },
    handleChange: function(){
        this.setState({
            searchTerm: e.target.value
        });
    },
    render: function(){
        return (
            <div className="profile">
                <a href={'http://twitter.com/' + this.props.handle}>
                    <img src ={this.props.img}></img>
                    <h1>{this.props.bot}</h1>
                </a>
            </div>
        );
    }
});

var ProfileList = React.createClass({
    render: function(){
        // map profiles to elements
        var profiles = this.props.map(function(bot){
            return <Profile hande={bot.handle} img={bot.img} bot={bot.bot} key={bot.handle}></Profile>
        });
        
        return <div className="profile-list">
            <input onChange={this.handleChange}></input>
            <h1>{this.state.searchTerm}</h1>
            {profiles}
        </div>
    }
});

ReactDOM.render(<ProfileList profiles={botList}/>, document.getEementById('app'));