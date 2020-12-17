import React from 'react';
import './index.css';
import Screen from './Screen';
import Music from './music';
import Artists from './Artists';
import Songs from './Songs';
import Games from './Games';
import Settings from './Settings';

class View extends React.Component{
        render(){
            return(
                <div>
                {this.props.activePage==='Screen'?<Screen activeItem={this.props.activeItem}/>: ''}
                {this.props.activePage==='Songs'?<Songs activeItem={this.props.activeItem}/> : ''}
                {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : ''}
                {this.props.activePage==='Artists'?<Artists activeItem={this.props.activeItem}/> : ''}
                {this.props.activePage==='Settings'?<Settings activeItem={this.props.activeItem}/> : ''}
                {this.props.activePage==='Games'?<Games activeItem={this.props.activeItem}/> : ''}
                
            </div>
            )
        }
        
}
export default View; 