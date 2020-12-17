import React from 'react';
import Screen from './Screen';
import Songs from './Songs';
import View from './View';

import ZingTouch from 'zingtouch';

class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem : 'Songs',
            activePage : 'Screen',
        }
    }

    zingtouchRotateWheel = () => {
      
       
        var touch = this;
        
        var currentAngle = 15;

            var target = document.getElementById('wheelrelativee');
        //console.log(target)
        var region = new ZingTouch.Region(target);
       // console.log(region)

         region.bind(target, 'rotate', function(e) {
            currentAngle += e.detail.distanceFromLast;
            console.log(currentAngle)
            if(currentAngle > 15){
                if(touch.state.activeItem === 'Songs'){
                    touch.setState({
                        activeItem : "Artists"
                    })
                }else if(touch.state.activeItem === 'Artists'){
                    touch.setState({
                        activeItem : "Games"
                    })
                }else if(touch.state.activeItem === 'Games'){
                    touch.setState({
                        activeItem : "Settings"
                    })
                }else if(touch.state.activeItem === 'Settings'){
                    touch.setState({
                        activeItem : "Songs"
                    })
                }
                
               
                console.log(touch)
            }
            else if(currentAngle < 15){
                
                if(touch.state.activeItem === 'Songs'){
                    touch.setState({
                        activeItem : "Settings"
                    })
                }else if(touch.state.activeItem === 'Artists'){
                    touch.setState({
                        activeItem : "Songs"
                    })
                }else if(touch.state.activeItem === 'Games'){
                    touch.setState({
                        activeItem : "Artists"
                    })
                }else if(touch.state.activeItem === 'Settings'){
                    touch.setState({
                        activeItem : "Games"
                    })
                }
            }

            //rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';
        })
        
        
    
    }

    goToHomeScreen = () => {
            console.log("home screen")
                    
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'Screen'
            })
            console.log(this.state)
    }
    changePage = () => {
             console.log("stop")
             console.log(this.state)
   
        if(this.state.activeItem === "Settings"){
            this.setState({
                activeItem : 'Settings',
                activePage : 'Settings'
            })
        }
        else if(this.state.activeItem === "Artists"){
            this.setState({
                activeItem : 'Artists',
                activePage : 'Artists'
            })
        }
        else if(this.state.activeItem === "Songs"){
            this.setState({
                activeItem : 'Songs',
                activePage : 'Songs'
            })
        }
        else if(this.state.activeItem === "Games"){
            this.setState({
                activeItem : 'Games',
                activePage : 'Games'
            })
        }
        console.log(this.state)  
    }
        
        
    

    render(){
        return(
          
    <div>  
    
        <div className="wheel-background">
        <View activeItem={this.state.activeItem} activePage={this.state.activePage}/>
        <div className="wheelrelative"  id="wheelrelativee" onMouseOver={this.zingtouchRotateWheel}>
          <div className="wheel"  id="rotatable">
               <div className="menu" onClick={this.goToHomeScreen}>Menu</div>
               <div className="actionbutton">
               <div className="backward">
               <img   className="action-icons" 
               src="https://www.flaticon.com/svg/static/icons/svg/25/25616.svg" />
               </div>
               <div className="center" onClick={this.changePage}></div>
               <div className="forward">
               <img   className="action-icons" 
               src=" https://www.flaticon.com/svg/static/icons/svg/37/37700.svg"/>
               </div>
               </div>
               <div className="pausestart">
               <img   className="action-icons pausestart" 
               src=" https://www.flaticon.com/svg/static/icons/svg/1792/1792864.svg"/>
               </div>
          </div>
        </div>
        </div>
    </div>)
    }
}

export default Ipod;