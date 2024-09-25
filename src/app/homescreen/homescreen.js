import './homescreen.css'
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";



function Homescreen (){




  
  useEffect(() => {
    




    //function for dragging the app

function filter(e) {
  let target = e.target;
  
  if (target.id === "Exploring-top-bar" || target.id === "button-holder-top-bar") {
    
  
  
  target = target.parentNode.parentNode
  console.log(target)
  target.moving = true;

  //NOTICE THIS 👇 Check if Mouse events exist on users' device
  if (e.clientX) {
    target.oldX = e.clientX; // If they exist then use Mouse input
    target.oldY = e.clientY;
  } else{
    target.oldX = e.touches[0].clientX; // Otherwise use touch input
    target.oldY = e.touches[0].clientY;
  }
  //NOTICE THIS 👆 Since there can be multiple touches, you need to mention which touch to look for, we are using the first touch only in this case

  target.oldLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1;
  target.oldTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1;

  document.onmousemove = dr;
  //NOTICE THIS 👇
  document.ontouchmove = dr;
  //NOTICE THIS 👆

  function dr(event) {
    event.preventDefault();

    if (!target.moving) {
      return;
    }
    //NOTICE THIS 👇
    if (event.clientX) {
      //console.log(target.distX = event.clientX - target.oldX)
      target.distX = event.clientX - target.oldX;
      target.distY = event.clientY - target.oldY;
    } else if(event.touches){
      //console.log(target.oldX)
      //console.log(event.touches[0].clientX)
      
      target.distX = event.touches[0].clientX - target.oldX;
      target.distY = event.touches[0].clientY - target.oldY;
    }
    //NOTICE THIS 👆

    target.style.left = target.oldLeft + target.distX + "px";
    target.style.top = target.oldTop + target.distY + "px";
  }

  function endDrag() {
    target.moving = false;
  }
  target.onmouseup = endDrag;
  //NOTICE THIS 👇
  target.ontouchend = endDrag;
  //NOTICE THIS 👆
   }
}
document.onmousedown = filter;
//NOTICE THIS 👇
document.ontouchstart = filter;
//NOTICE THIS 👆





    //function to adjust the app size
    function hover(e){
      var target = e.currentTarget
      var targetTop = target.getBoundingClientRect().top
      var targetBottom = target.getBoundingClientRect().bottom
      var targetLeft = target.getBoundingClientRect().left
      var targetRight = target.getBoundingClientRect().right

      var targetHeight = target.getBoundingClientRect().height
      var targetWidth = target.getBoundingClientRect().width


      
      document.addEventListener('mousemove', function (e) {

        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
//-------------------------------------------------------------------------------------//
         //top resize
        if(mouseY >= targetTop - 5 && mouseY <= targetTop + 5){

          document.body.style.cursor = "n-resize"

          document.onmousedown = function(e){
            
            document.onmousemove = function(e){
              e = e || window.event;
              e.preventDefault();
      
                 //drag up
              if(e.clientY < targetTop){
                  document.body.style.cursor = "n-resize"
                  target.style.top = e.clientY + "px"
                  target.style.height = (targetHeight) + (targetTop - e.clientY) + "px"
                  
      
      
                  //drag down
              } else if(e.clientY > targetTop){
                  document.body.style.cursor = "n-resize"
                  target.style.top = e.clientY+ "px"
                  target.style.height = (targetHeight) - (e.clientY - targetTop) + "px"
                  
              }
      
              document.body.style.cursor = "n-resize"
      
              console.log('Top Level drag')
            }

          }
          document.onmouseup = function(){
            
            document.onmousemove = function(e){}
          }
          
//-------------------------------------------------------------------------------------//
          //bottom resize
        }else if(mouseY >= targetBottom - 5 && mouseY <= targetBottom + 5){
          document.body.style.cursor = "n-resize"
          document.onmousedown = function(e){
            
            document.onmousemove = function(e){
              
              e = e || window.event;
              e.preventDefault();
               //drag up
               if(e.clientY < targetTop){
                
                target.style.bottom = e.clientY + "px"
                target.style.height = (targetHeight) - (targetBottom - e.clientY) + "px"
                
    
    
                //drag down
            } else if(e.clientY > targetTop){
                
                target.style.bottom = e.clientY+ "px"
                target.style.height = (targetHeight) + (e.clientY - targetBottom) + "px"
                
            }
            }
          }
          document.onmouseup = function(){
            document.onmousemove = function(e){}
          }
          
          




//-------------------------------------------------------------------------------------//
          //left resize

        }else if(mouseX >= targetLeft - 5 && mouseX <= targetLeft + 5){
          document.body.style.cursor = "ew-resize"
          document.onmousedown = function(e){
            
            document.onmousemove = function(e){
              e = e || window.event;
              e.preventDefault();

              //drag left
              if(e.clientX < targetLeft){
                document.body.style.cursor = "ew-resize"
                if(mouseY < targetBottom && mouseY > targetTop){
                  document.body.style.cursor = "ew-resize"
                  target.style.left = e.clientX + "px"
                  target.style.width = (targetWidth + (targetLeft - e.clientX)) + "px"
                  console.log('pull to the left')
      
                }
              }
               //drag right
               if(e.clientX > targetLeft){
                document.body.style.cursor = "ew-resize"
                if(mouseY < targetBottom && mouseY > targetTop){
                  document.body.style.cursor = "ew-resize"
                  target.style.left = e.clientX + "px"
                  target.style.width = (targetWidth + (targetLeft - e.clientX)) + "px"
                  console.log('pull to the right')
      
                }
              }


            }
          }
          document.onmouseup = function(){
            document.onmousemove = function(e){}
          }

          
         
         
//-------------------------------------------------------------------------------------//
          //right resize
        } else if(mouseX >= targetRight - 5 && mouseX <= targetRight + 5){
          document.body.style.cursor = "ew-resize"
          document.onmousedown = function(e){
            
            document.onmousemove = function(e){
              e = e || window.event;
              e.preventDefault();
              //drag left
              if(e.clientX > targetRight){
                document.body.style.cursor = "ew-resize"
                if(mouseY < targetBottom && mouseY > targetTop){
                  document.body.style.cursor = "ew-resize"
                  target.style.right = e.clientX + "px"
                  target.style.width = (targetWidth + (e.clientX - targetRight)) + "px"
                  console.log('pull to the left')
      
                }
              }
               //drag right
               if(e.clientX < targetRight){
                document.body.style.cursor = "ew-resize"
                if(mouseY < targetBottom && mouseY > targetTop){
                  document.body.style.cursor = "ew-resize"
                  target.style.right = e.clientX + "px"
                  target.style.width = (targetWidth + (e.clientX - targetRight)) + "px"
                  console.log('pull to the right')
      
                }
              }
            }
          }
          document.onmouseup = function(){
            document.onmousemove = function(e){}
          }
          







//-------------------------------------------------------------------------------------//
        }else{
          document.body.style.cursor = "default"
          document.onmousedown = filter
          document.onmouseup = function(){
            document.onmousemove = function(e){}
          }
        }
        
        
        
      });


      //console.log(target.getBoundingClientRect().top)
    }
  document.getElementById('FileExplorer-App').onmouseover = hover


  });


    return(
        <div id="HomescreenBase">

       
          <div id='RecycleBin'>
            <div className="Icon-img" id='RecycleBin-img'>
                
            </div>
            <div className="Icon-text">
                Recycle Bin
            </div>
          </div>


          <div id='MyComputer'>
            <div className="Icon-img" id='MyComputer-img'>

            </div>
            <div className="Icon-text">
                My Computer
            </div>   
          </div>


          <div id='MyDocuments'>
            <div className="Icon-img" id='MyDocuments-img'>

            </div>
            <div className="Icon-text">
                My Documents
            </div>
          </div>


          




            <div id='taskbar'>
                <div id='StartButton'>
                    <img id='start-img'></img>
                    <div id='start-text'>Start</div>
                </div>


                <div className="siderbar1"></div>
                <div className="siderbar2"></div>


                <div id='InternetApps'>
                    <div id='internet1-img' className="internet-img"></div>
                    <div id='internet2-img' className="internet-img"></div>
                    <div id='internet3-img' className="internet-img"></div>
                    <div id='internet4-img' className="internet-img"></div>
                </div>


                <div className="siderbar1"></div>
                <div className="siderbar2"></div>
                

                <div id='OpenApps'>
                    <div id="fileExplorer">
                       <div id='fileExplorer-icon'></div>
                       <div id='fileExplorer-text'>Exploring - MyComputer</div>
                    </div>
                </div>
                

                
               



                <div className="siderbar1" id="sidebarRight"></div>
               <div id='FakeTime'>
                Made By Ben Worrall

               </div>
            </div>








            <div id='FileExplorer-App' >
                <div id='top-bar'>
                    <div id='Exploring-top-bar'>Exploring -</div>

                    <div id='button-holder-top-bar'>
                        <button id='minimize-bnt' className="topbar-bnt">🗕</button>
                        <button id='maximize-bnt' className="topbar-bnt">🗖</button>
                        <button id='exit-bnt' className="topbar-bnt">✖</button>
                    </div>
                   
                </div>



            </div>








        </div>
    )
}

export default Homescreen