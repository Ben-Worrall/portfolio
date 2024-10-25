import './fileExplorer-RightPanel-css.css'
const fileExplorer_RightPanel_Projects = () => {
    window.addEventListener('click',(e)=>{
        if(e.target.id !== "RightPanel-Projects-Subfolders-CyberSec-holder" && e.target.id !== "RightPanel-Projects-Subfolders-CyberSec-icon" && e.target.id !== "RightPanel-Projects-Subfolders-CyberSec-text" ){
            let holder = document.getElementById('RightPanel-Projects-Subfolders-CyberSec-holder')
            holder.style.backgroundColor = 'white'
            holder.style.color = 'black'
            holder.style.outline = ''
            
        }
        if(e.target.id !== "RightPanel-Projects-Subfolders-Dev-holder" && e.target.id !== "RightPanel-Projects-Subfolders-Dev-icon" && e.target.id !== "RightPanel-Projects-Subfolders-Dev-text" ){
            let holder = document.getElementById('RightPanel-Projects-Subfolders-Dev-holder')
            holder.style.backgroundColor = 'white'
            holder.style.color = 'black'
            holder.style.outline = ''
            
        }
    })



    function go_blue_on_clickCyber(){
        let holder = document.getElementById('RightPanel-Projects-Subfolders-CyberSec-holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }
    function go_blue_on_clickDev(){
        let holder = document.getElementById('RightPanel-Projects-Subfolders-Dev-holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }
    function shownextfolderDev(){
        
        document.getElementById('Projects').style.display = "none"
        document.getElementById('Projects-Developement').style.display = ""
        document.getElementById('navigate-bnt-back').title = "Projects"
    }
    return(
        <div id='RightPanel-Projects-Subfolders-holder'>
            <div id='RightPanel-Projects-Subfolders-CyberSec-holder' onClick={go_blue_on_clickCyber} >
                <div id='RightPanel-Projects-Subfolders-CyberSec-icon'></div>
                <div id='RightPanel-Projects-Subfolders-CyberSec-text'>Cyber Security</div>
                <div id='RightPanel-Projects-Subfolders-CyberSec-type'>File Folder</div>
            </div>

            <div id='RightPanel-Projects-Subfolders-Dev-holder' onClick={go_blue_on_clickDev} onDoubleClick={shownextfolderDev}>
                <div id='RightPanel-Projects-Subfolders-Dev-icon'></div>
                <div id='RightPanel-Projects-Subfolders-Dev-text'>Developement</div>
                <div id='RightPanel-Projects-Subfolders-Dev-type'>File Folder</div>
                
            </div>
        </div>
        
    )
}

export default fileExplorer_RightPanel_Projects