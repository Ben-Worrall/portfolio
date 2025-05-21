import './fileExplorer-RightPanel-css.css'
const fileExplorer_RightPanel_Certifications = () => {
    window.addEventListener('click',(e)=>{
        if(e.target.id !== "RightPanel-Certifications-Subfolders-CyberSec-holder" && e.target.id !== "RightPanel-Certifications-Subfolders-CyberSec-icon" && e.target.id !== "RightPanel-Certifications-Subfolders-CyberSec-text" ){
            let holder = document.getElementById('RightPanel-Certifications-Subfolders-CyberSec-holder')
            holder.style.backgroundColor = 'white'
            holder.style.color = 'black'
            holder.style.outline = ''
            
        }
        if(e.target.id !== "RightPanel-Certifications-Subfolders-Dev-holder" && e.target.id !== "RightPanel-Certifications-Subfolders-Dev-icon" && e.target.id !== "RightPanel-Certifications-Subfolders-Dev-text" ){
            let holder = document.getElementById('RightPanel-Certifications-Subfolders-Dev-holder')
            holder.style.backgroundColor = 'white'
            holder.style.color = 'black'
            holder.style.outline = ''
            
        }
    })



    function go_blue_on_clickCyber(){
        let holder = document.getElementById('RightPanel-Certifications-Subfolders-CyberSec-holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }
    function go_blue_on_clickDev(){
        let holder = document.getElementById('RightPanel-Certifications-Subfolders-Dev-holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }



    function on_double_1(){
    
    document.getElementById('Certificates-CyberSec').style.display = ""
    document.getElementById('Certifications').style.display = "none"
    document.getElementById('navigate-bnt-back').title = "Certificates-CyberSec";

 }

    return(
        <div id='RightPanel-Certifications-Subfolders-holder'>
            <div id='RightPanel-Certifications-Subfolders-CyberSec-holder' onClick={go_blue_on_clickCyber} onDoubleClick={on_double_1}>
                <div id='RightPanel-Certifications-Subfolders-CyberSec-icon'></div>
                <div id='RightPanel-Certifications-Subfolders-CyberSec-text'>Cyber Security</div>
                <div id='RightPanel-Certifications-Subfolders-CyberSec-type'>File Folder</div>
            </div>

            <div id='RightPanel-Certifications-Subfolders-Dev-holder' onClick={go_blue_on_clickDev}>
                <div id='RightPanel-Certifications-Subfolders-Dev-icon'></div>
                <div id='RightPanel-Certifications-Subfolders-Dev-text'>Developement</div>
                <div id='RightPanel-Certifications-Subfolders-Dev-type'>File Folder</div>
                
            </div>
        </div>
        
    )
}

export default fileExplorer_RightPanel_Certifications