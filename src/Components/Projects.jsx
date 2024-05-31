"use client"
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CardComponent from './CardComponent'

const Projects = () => {
  
  return (
    <>
      <div id='promain'>
        <p className='prop'>Tasks done so far</p>
        <h1 className='pro'>Projects</h1>
        <div class="projects" id='projects'>
          <div class="grid-item">
            <a href='https://weather-rush.vercel.app/'><img src='weather.png' /></a>
            <p>Weather App</p>
          </div>
          <div class="grid-item">
            <a href='https://todo-list-rouge-seven.vercel.app/'><img src='todo.png' /></a>
            <p>To-Do List</p>
          </div>
          <div class="grid-item">
            <a href='https://tic-tac-toe-omega-wheat-23.vercel.app/'><img src='tic-tac-toe.png' /></a>
            <p>Tic Tac Toe Game</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects