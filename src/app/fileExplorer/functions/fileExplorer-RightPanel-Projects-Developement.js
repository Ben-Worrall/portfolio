import './fileExplorer-RightPanel-css.css'
const fileExplorer_RightPanel_Projects_Developement = () => {




 //click anywhere else 
 window.addEventListener('click',(e)=>{
    if(e.target.id !== "RightPanel-Projects-Subfolders-Developement-RatingClients-holder" && e.target.id !== "RightPanel-Projects-Subfolders-Developement-RatingClients-icon" && e.target.id !== "RightPanel-Projects-Subfolders-Developement-RatingClients-text" ){
        let holder = document.getElementById('RightPanel-Projects-Subfolders-Developement-RatingClients-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    if(e.target.id !== "RightPanel-Projects-Subfolders-Developement-SkySurfer-holder" && e.target.id !== "RightPanel-Projects-Subfolders-Developement-SkySurfer-icon" && e.target.id !== "RightPanel-Projects-Subfolders-Developement-SkySurfer-text" ){
        let holder = document.getElementById('RightPanel-Projects-Subfolders-Developement-SkySurfer-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    if(e.target.id !== "RightPanel-Projects-Subfolders-Developement-Doors98-holder" && e.target.id !== "RightPanel-Projects-Subfolders-Developement-Doors98-icon" && e.target.id !== "RightPanel-Projects-Subfolders-Developement-Doors98-text" ){
        let holder = document.getElementById('RightPanel-Projects-Subfolders-Developement-Doors98-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    if(e.target.id !== "RightPanel-Projects-Subfolders-Developement-RateTheSkin-holder" && e.target.id !== "RightPanel-Projects-Subfolders-Developement-RateTheSkin-icon" && e.target.id !== "RightPanel-Projects-Subfolders-Developement-RateTheSkin-text" ){
        let holder = document.getElementById('RightPanel-Projects-Subfolders-Developement-RateTheSkin-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
})









 //one click
  function go_blue_on_1(){
    let holder = document.getElementById('RightPanel-Projects-Subfolders-Developement-RatingClients-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }
  function go_blue_on_2(){
    let holder = document.getElementById('RightPanel-Projects-Subfolders-Developement-SkySurfer-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }
  function go_blue_on_3(){
    let holder = document.getElementById('RightPanel-Projects-Subfolders-Developement-Doors98-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }
  function go_blue_on_4(){
    let holder = document.getElementById('RightPanel-Projects-Subfolders-Developement-RateTheSkin-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }












 //double click


 function on_double_1(){
    
    document.getElementById('Projects-Developement-RatingClients').style.display = ""
    document.getElementById('Projects-Developement').style.display = "none"
    document.getElementById('navigate-bnt-back').title = "Projects-Developement"
    
 }
 function on_double_2(){
    document.getElementById('Projects-Developement-SkySurfer').style.display = ""
    document.getElementById('Projects-Developement').style.display = "none"
    document.getElementById('navigate-bnt-back').title = "Projects-Developement"
 }
 function on_double_3(){
    
 }
 function on_double_4(){
    
 }









    return(
        <div id='RightPanel-Portfolio-Subfolders-holder'>

            <div id='RightPanel-Projects-Subfolders-Developement-RatingClients-holder'   className='folder-holder' onClick={go_blue_on_1} onDoubleClick={on_double_1}>
                <div id='RightPanel-Projects-Subfolders-Developement-RatingClients-icon' className='folder-icon'></div>
                <div id='RightPanel-Projects-Subfolders-Developement-RatingClients-text' className='folder-text'>Rating Clients</div>
                <div id='RightPanel-Projects-Subfolders-Developement-RatingClients-type' className='folder-type'>File Folder</div>
            </div>
            <div id='RightPanel-Projects-Subfolders-Developement-SkySurfer-holder'   className='folder-holder' onClick={go_blue_on_2} onDoubleClick={on_double_2}>
                <div id='RightPanel-Projects-Subfolders-Developement-SkySurfer-icon' className='folder-icon'></div>
                <div id='RightPanel-Projects-Subfolders-Developement-SkySurfer-text' className='folder-text'>Sky Surfer</div>
                <div id='RightPanel-Projects-Subfolders-Developement-SkySurfer-type' className='folder-type'>File Folder</div>
            </div>
            <div id='RightPanel-Projects-Subfolders-Developement-Doors98-holder'   className='folder-holder' onClick={go_blue_on_3} onDoubleClick={on_double_3}>
                <div id='RightPanel-Projects-Subfolders-Developement-Doors98-icon' className='folder-icon'></div>
                <div id='RightPanel-Projects-Subfolders-Developement-Doors98-text' className='folder-text'>Doors 98 Emulator</div>
                <div id='RightPanel-Projects-Subfolders-Developement-Doors98-type' className='folder-type'>File Folder</div>
            </div>
            <div id='RightPanel-Projects-Subfolders-Developement-RateTheSkin-holder'   className='folder-holder' onClick={go_blue_on_4} onDoubleClick={on_double_4}>
                <div id='RightPanel-Projects-Subfolders-Developement-RateTheSkin-icon' className='folder-icon'></div>
                <div id='RightPanel-Projects-Subfolders-Developement-RateTheSkin-text' className='folder-text'>Rate The Skin</div>
                <div id='RightPanel-Projects-Subfolders-Developement-RateTheSkin-type' className='folder-type'>File Folder</div>
            </div>
            
        </div>
        
    )
}

export default fileExplorer_RightPanel_Projects_Developement