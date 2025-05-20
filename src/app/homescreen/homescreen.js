import './homescreen.css'
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import FileExplorer from '../fileExplorer/fileExplorer';
import RatingClients_ReadMe from '../fileExplorer/functions/Projects-Developement/RatingClients-ReadMe';
import Doors98_ReadMe from '../fileExplorer/functions/Projects-Developement/Door98-ReadMe';
import RateTheSkin_ReadMe from '../fileExplorer/functions/Projects-Developement/RateTheSkin-ReadMe';
import SkySurfer_ReadMe from '../fileExplorer/functions/Projects-Developement/SkySurfer-ReadMe';
import Image1 from "../../assets/ComptiaA+11.png"

function Homescreen (){






function preloadImage (src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function() {
      resolve(img)
    }
    img.onerror = img.onabort = function() {
      reject(src)
    }
    img.src = src
  })
}
preloadImage (Image1)



 const [enabled, setEnabled] = useState(true); // Toggle control
  
  useEffect(() => {

   if (document.getElementById('FileExplorer-App').style.display !== "none"){

    if (!enabled) return
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
          if(e.clientX > targetLeft && e.clientX < targetRight){
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

          }
          document.onmouseup = function(){
            
            document.onmousemove = function(e){}
          }
          
//-------------------------------------------------------------------------------------//
          //bottom resize
        }else if(mouseY >= targetBottom - 5 && mouseY <= targetBottom + 5){
          if(e.clientX > targetLeft && e.clientX < targetRight){
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


} else {
  return
}
  }, [enabled]);



    








  function CloseRenderApp(){
    document.getElementById('RenderApp-RatingClients').style.display = "none"
    document.getElementById('RenderApp-SkySurfer').style.display = "none"
    document.getElementById('RenderApp-Doors98').style.display = "none"
    document.getElementById('RenderApp-RateTheSkin').style.display = "none"
    document.getElementById('EXE-App').style.display = "none"
    document.getElementById('fileExplorer').style.display = ""
    document.getElementById('FileExplorer-App').style.display = ""
    //setEnabled(true)
    document.getElementById('FileExplorer-App').style.pointerEvents = "auto"
  }
  function CloseRenderAppCert(){
    document.getElementById('RenderApp-ComptiaA11').style.display = "none"
    document.getElementById('fileExplorer').style.display = ""
    document.getElementById('FileExplorer-App').style.display = ""
    //setEnabled(true)
    document.getElementById('FileExplorer-App').style.pointerEvents = "auto"
  }
  function CloseReadMe(){
    document.getElementById('ReadMe-App-HOLDER').style.display = "none"

    document.getElementById('ReadMe-Body-RatingClients').style.display = "none"
    document.getElementById('ReadMe-Body-SkySurfer').style.display = "none"
    document.getElementById('ReadMe-Body-Doors98').style.display = "none"
    document.getElementById('ReadMe-Body-RateTheSkin').style.display = "none"

    document.getElementById('ReadMe-TopBar-URL-Doors98').style.display = "none"
    document.getElementById('ReadMe-TopBar-URL-RateTheSkin').style.display = "none"
    document.getElementById('ReadMe-TopBar-URL-SkySurfer').style.display = "none"
    document.getElementById('ReadMe-TopBar-URL-RatingClients').style.display = "none"

    document.getElementById('ReadMe-App').style.display = "none"

    document.getElementById('fileExplorer').style.display = ""
    document.getElementById('FileExplorer-App').style.display = ""
    //setEnabled(true)
    document.getElementById('FileExplorer-App').style.pointerEvents = "auto"
  }


const DownloadCert1 = async () => {
  const response = await fetch('https://raw.githubusercontent.com/Ben-Worrall/portfolio/master/src/assets/ComptiaA+11.png');
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'CompTIA-Aplus-1101-1102.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url); // Cleanup
};



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
                    <div id="EXE-App" style={{display:'none'}}>
                       <div id='EXE-App-icon'></div>
                       <div id='EXE-App-text'>Render App.exe</div>
                    </div>
                    <div id="ReadMe-App" style={{display:'none'}}>
                       <div id='ReadMe-App-icon'></div>
                       <div id='ReadMe-App-text'>ReadMe.txt</div>
                    </div>
                    
                    
                </div>
                

                
               



                <div className="siderbar1" id="sidebarRight"></div>
               <div id='FakeTime'>
                Made By Ben Worrall

               </div>
            </div>








            <div id='FileExplorer-App' >
                <div id='top-bar'>
                    <div id='FileExplorer-icon'></div>
                    <div id='Exploring-top-bar'>Exploring -</div>

                    <div id='button-holder-top-bar'>
                        <button id='minimize-bnt' className="topbar-bnt">🗕</button>
                        <button id='maximize-bnt' className="topbar-bnt">🗖</button>
                        <button id='exit-bnt' className="topbar-bnt">✖</button>
                    </div>
                   
                </div>
                <div id="app-body">
                  {FileExplorer()}
                 
                </div>

            </div>

            {/* Rating Clients */}
            <div className='RenderApp' id='RenderApp-RatingClients' style={{display:'none'}}>
              <div className='RenderApp-top-bar'>
                <div className='RenderApp-WebLink'>
                <a className="RenderApp-link-text">Link to full website:</a>
                  <a className='RenderApp-link' href='https://ratingclients.netlify.app/' target="_blank">https://ratingclients.netlify.app/</a>
                </div>
                <div className='RenderApp-top-buttons'>
                  <button className='RenderApp-exit-button' onClick={CloseRenderApp}>X</button>
                </div>
              </div>
              <div className='RenderApp-body'>
              <iframe src="https://ratingclients.netlify.app/" className='RenderApp-body-iframe'></iframe>
              </div>
            </div>


            {/* SkySurfer */}
            <div className='RenderApp' id='RenderApp-SkySurfer' style={{display:'none'}}>
              <div className='RenderApp-top-bar'>
                <div className='RenderApp-WebLink'>
                  <a className="RenderApp-link-text">Link to full website:</a>
                  <a className='RenderApp-link' href='https://ben-worrall.github.io/SkySurfer/' target="_blank">https://ben-worrall.github.io/SkySurfer/</a>
                </div>
                <div className='RenderApp-top-buttons'>
                  <button className='RenderApp-exit-button' onClick={CloseRenderApp}>X</button>
                </div>
              </div>
              <div className='RenderApp-body'>
              <iframe src="https://ben-worrall.github.io/SkySurfer/" className='RenderApp-body-iframe'></iframe>
              </div>
            </div>
            {/* Doors 98  */}
            <div className='RenderApp' id='RenderApp-Doors98' style={{display:'none'}}>
              <div className='RenderApp-top-bar'>
                <div className='RenderApp-WebLink'>
                <a className="RenderApp-link-text">Link to full website:</a>
                  <a className='RenderApp-link' href='https://ben-worrall.github.io/Doors98/' target="_blank">https://ben-worrall.github.io/Doors98/</a>
                </div>
                <div className='RenderApp-top-buttons'>
                  <button className='RenderApp-exit-button' onClick={CloseRenderApp}>X</button>
                </div>
              </div>
              <div className='RenderApp-body'>
              <iframe src="https://ben-worrall.github.io/Doors98/" className='RenderApp-body-iframe'></iframe>
              </div>
            </div>
            {/* Rate the skin */}
            <div className='RenderApp' id='RenderApp-RateTheSkin' style={{display:'none'}}>
              <div className='RenderApp-top-bar'>
                <div className='RenderApp-WebLink'>
                <a className="RenderApp-link-text">Link to full website:</a>
                  <a className='RenderApp-link' href='https://ben-worrall.github.io/RateTheSkin/' target="_blank">https://ben-worrall.github.io/RateTheSkin/</a>
                </div>
                <div className='RenderApp-top-buttons'>
                  <button className='RenderApp-exit-button' onClick={CloseRenderApp}>X</button>
                </div>
              </div>
              <div className='RenderApp-body'>
              <iframe src="https://ben-worrall.github.io/RateTheSkin/" className='RenderApp-body-iframe'></iframe>
              </div>
            </div>

    


            {/* READ ME */}
            <div className='ReadMe-App' id='ReadMe-App-HOLDER' onClick={CloseReadMe} style={{display:'none'}}>

              <div className='ReadMe-TopBar'>

                    <div className='ReadMe-TopBar-text'>
                      <div className='ReadMe-TopBar-text-AppTitle' id='ReadMe-TopBar-text-AppTitle'></div>
                      <div className='ReadMe-TopBar-text-AppLink'>
                      <a className='ReadMe-TopBar-text-link' id='ReadMe-TopBar-URL-Doors98' href='https://ben-worrall.github.io/Doors98/' target="_blank" style={{display:'none'}}>https://ben-worrall.github.io/Doors98/</a>
                      <a className='ReadMe-TopBar-text-link' id='ReadMe-TopBar-URL-RateTheSkin' href='https://ben-worrall.github.io/RateTheSkin/' target="_blank" style={{display:'none'}}>https://ben-worrall.github.io/RateTheSkin/</a>
                      <a className='ReadMe-TopBar-text-link' id='ReadMe-TopBar-URL-SkySurfer' href='https://ben-worrall.github.io/SkySurfer/' target="_blank" style={{display:'none'}}>https://ben-worrall.github.io/SkySurfer/</a>
                      <a className='ReadMe-TopBar-text-link' id='ReadMe-TopBar-URL-RatingClients' href='https://ratingclients.netlify.app/' target="_blank" style={{display:'none'}}>https://ratingclients.netlify.app/</a>
                      </div>
                    </div>

                    <div className='ReadMe-TopBar-button'>
                      <button className='ReadMe-TopBar-ExitBNT'>X</button>
                    </div>
              </div>

              <div className='ReadMe-Body' id='ReadMe-Body-RatingClients' style={{display:'none'}}>
              {RatingClients_ReadMe()}
              </div>
              <div className='ReadMe-Body' id='ReadMe-Body-RateTheSkin' style={{display:'none'}}>
              {RateTheSkin_ReadMe()}
              </div>
              <div className='ReadMe-Body' id='ReadMe-Body-Doors98' style={{display:'none'}}>
              {Doors98_ReadMe()}
              </div>
              <div className='ReadMe-Body' id='ReadMe-Body-SkySurfer' style={{display:'none'}}>
              {SkySurfer_ReadMe()}
              </div>


            </div>
            

            {/* Certifications */}

            {/* Comptia A+ 11 */}
            <div className='RenderAppCert' id='RenderApp-ComptiaA11' style={{display:'none'}}>
              <div className='RenderApp-top-bar'>
                <div className='RenderApp-WebLink'>
                
                  <a className='RenderApp-link' id='DownloadCertText' target="_blank" onClick={DownloadCert1}>Download Certificate</a>
                </div>
                <div className='RenderApp-top-buttons'>
                  <button className='RenderApp-exit-button' onClick={CloseRenderAppCert}>X</button>
                </div>
              </div>
              <div className='RenderApp-body' id='CertImageA11'>
              
              </div>
            </div>






        </div>
    )
}

export default Homescreen