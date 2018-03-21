import React from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
var createReactClass = require('create-react-class');
const percentToDecimal = (decimal) =>{
    return ((decimal*100) + '%')
}

const calcGoalProgress=(total,goal)=>{
    return percentToDecimal(total/goal)
}

export const SkiDayCount= (props) =>(
        <div className="ski-day-count">
            <div className="total-days">
                <span>{props.total}</span>
                <Calendar/>
                <span>days</span>
            </div>
            <div className="powder-days">
            <span>{props.powder}</span>
            <SnowFlake/>
            <span>days</span>
            </div>
            <div className="backcountry-days">
            <span>{props.backcountry}</span>
                  <Terrain/>
                <span>days</span>
                <div>
                    <span>
                        {calcGoalProgress(props.total,props.goal)}
                    </span>
                </div>
            </div>
            
        </div>
)
