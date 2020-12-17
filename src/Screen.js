import React from 'react';
import './index.css';

class Screen extends React.Component{
        render(){
            return(
                <div className="mainscreen">
                    <div style={styles.screen} id='screen-container' className="mainscreen-left">
                        <h2 style={styles.ipod}>Ipod</h2>
                        <p className={this.props.activeItem==='Songs'?'active':''}>
                        Songs 
                        </p>
                        <p className={this.props.activeItem==='Artist'?'active':''}>
                        Artist
                        </p>
                        <p className={this.props.activeItem==='Games'?'active':''}>
                        Games
                        </p>
                        <p className={this.props.activeItem==='Settings'?'active':''}>
                        Settings
                        </p>
                    </div>
                    
                    <div className="mainscreen-right">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1gD1sHUAakaMoY3nkT48_5hFWFoSa0Zu5Q&usqp=CAU" />
                    </div>
              </div>
            )
        }
        
       
        
}
const styles = {
      
    screen : {
        backgroundColor : 'white',
        marginLeft: 4,
        width: 120,
        
       
    },
    ipod:{
        padding:10,
        margin:0,
    }
}

export default Screen;