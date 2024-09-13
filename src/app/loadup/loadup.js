import './loadup.css'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function Loadupscreen() {
    const navigate = useNavigate()
    useEffect(() => {
    function firstLoad(){
    document.getElementById('loadBar1').style.backgroundColor = "blue"
    setTimeout(secondLoad, 500)
  } firstLoad()
  function secondLoad(){
    document.getElementById('loadBar2').style.backgroundColor = "blue"
    setTimeout(thirdLoad, 500)
  }
  
  function thirdLoad(){
    document.getElementById('loadBar3').style.backgroundColor = "blue"
    setTimeout(fourthLoad, 500)
  }
  
  function fourthLoad(){
    document.getElementById('loadBar4').style.backgroundColor = "blue"
    setTimeout(fifthLoad, 500)
  }
  
  function fifthLoad(){
    document.getElementById('loadBar5').style.backgroundColor = "blue"
    setTimeout(sixthLoad, 500)
  }
  
  function sixthLoad(){
    document.getElementById('loadBar6').style.backgroundColor = "blue"
    setTimeout(seventhLoad, 500)
  }
  
  function seventhLoad(){
    document.getElementById('loadBar7').style.backgroundColor = "blue"
    setTimeout(eigthLoad, 500)
  }
  
  function eigthLoad(){
    document.getElementById('loadBar8').style.backgroundColor = "blue"
    setTimeout(ninethLoad, 500)
  }
  
  function ninethLoad(){
    document.getElementById('loadBar9').style.backgroundColor = "blue"
    setTimeout(startUp, 2000)
    
    
  }
  
  function tenthLoad(){
    document.getElementById('loadBar10').style.backgroundColor = "blue"
    
  }
}, [])
  
  
  //show glitch effect on startup
  
  function startUp(){
    
    let bg = document.getElementById('screenHolder')
    var count = 500
    for (let i = 0; i < count; i++){
        let glitchBox = document.createElement('div')
        glitchBox.className = 'box'
        glitchBox.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
        bg.appendChild(glitchBox);
        
    }
  setInterval(function(){
    count++
    let glitch = document.getElementsByClassName('box')
    for(let i = 0; i < glitch.length; i++){
        glitch[i].style.top = Math.floor(Math.random()*100) + 'vh'
        glitch[i].style.width = "100%"
        glitch[i].style.height = Math.floor(Math.random()*4) + 'vh'
    }
  }, 300)
  
  setTimeout(SwitchOff, 1500)
  }
  
  //random color for glitch effect
  var colors = ['blue', 'green', 'yellow', 'white', 'red', 'black', 'pink']
  
  
  
  //take user to home screen
  
  function SwitchOff(){
    document.getElementById('Body').style.zIndex = 10000
    document.getElementById('Body').backgroundColor = 'black'
    document.getElementById('screenHolder').backgroundColor = 'white'
    while (document.getElementById('Body').childNodes.length > 2) {
        document.getElementById('Body').removeChild(document.getElementById('Body').lastChild);
    }
    document.getElementById('Body').classList.add('_off')
   
  
    setTimeout(toHome, 750)
  }
  
    
    function toHome(){
        navigate('/HomeScreen')
    }

    return (
      <div id='Body'>
  
  <div id="screenHolder">
    <div id="IntroAnimation"> 
          <div id="topBar">
            <div id="topBarTitle">Ben Worrall - Portfolio</div>
            <div id="fakeMini">🗕</div>
            <div id="fakeFull">□</div>
            <div id="fakeExit">x</div>
            
          </div>
      
      <div id="displayTextIntro"> Loading... </div> 
      <div id="loadBarHolder">
          <table id="loadBar"> 
            <tr>
              <th id="loadBar1" class="loadbarTH">&nbsp;</th>
              <th id="loadBar2" class="loadbarTH">&nbsp;</th> 
              <th id="loadBar3" class="loadbarTH">&nbsp;</th>
              <th id="loadBar4" class="loadbarTH">&nbsp;</th>
              <th id="loadBar5" class="loadbarTH">&nbsp;</th>
              <th id="loadBar6" class="loadbarTH">&nbsp;</th>
              <th id="loadBar7" class="loadbarTH">&nbsp;</th>
              <th id="loadBar8" class="loadbarTH">&nbsp;</th>
              <th id="loadBar9" class="loadbarTH">&nbsp;</th>
              <th id="loadBar10" class="loadbarTH">&nbsp;</th>
            </tr>
          </table>   
      </div>
          
  
         
  
      </div>
  </div>
       
      </div>
    );
  }

  export default Loadupscreen