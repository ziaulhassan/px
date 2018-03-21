import React from 'react'
import text from './titles.json'
//var greetings=require('./titles.json')
import './stylesheets/goodbye.scss'
import './stylesheets/hello.css'

export const hello=(
    <h1 id='title'
    className='hello'>
    {greetings.hello}
    </h1> 
)
export const goodbye=(
        <h1 id='title' 
        className='goodbye'>
        {greetings.goodbye}
        </h1>
    )


