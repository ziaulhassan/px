import React from 'react'
import {render} from 'react-dom'
import {SkiDayList} from './components/SkiDayList'

window.React=React

render( 
<SkiDayList days={ 
    [
       {
                      resort:"Sawat",
                      date: new Date("1/12/2018"),
                      powdr:true,
                      backcountry:false
       },
       {
                      resort:"naran",
                      date: new Date("4/12/2018"),
                      powdr:false,
                      backcountry:false
       },
       {
                      resort:"kaghan Valley",
                      date: new Date("6/12/2018"),
                      powdr:false,
                      backcountry:true
       },
       {
                      resort:"Islamabad",
                      date: new Date("7/12/2018"),
                      powdr:false,
                      backcountry:true
       }
    ]
}/>
 , document.getElementById('react-container')) 




