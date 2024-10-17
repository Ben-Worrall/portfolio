import './fileExplorer-RightPanel-css.css'
const fileExplorer_RightPanel_Portfolio = () => {


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
    function go_blue_on_clickAboutMe(){
        let holder = document.getElementById('RightPanel-Certifications-Subfolders-Dev-holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }


    return(
        <div id='RightPanel-Portfolio-Subfolders-holder'>
            <div id='RightPanel-Portfolio-Subfolders-Certifications-holder'>
                <div id='RightPanel-Portfolio-Subfolders-Certifications-icon'></div>
                <div id='RightPanel-Portfolio-Subfolders-Certifications-text'>Certifications</div>
                <div id='RightPanel-Portfolio-Subfolders-Certifications-type'>File Folder</div>
            </div>
            <div id='RightPanel-Portfolio-Subfolders-Projects-holder'>
                <div id='RightPanel-Portfolio-Subfolders-Projects-icon'></div>
                <div id='RightPanel-Portfolio-Subfolders-Projects-text'>Projects</div>
                <div id='RightPanel-Portfolio-Subfolders-Projects-type'>File Folder</div>
            </div>
            <div id='RightPanel-Portfolio-Subfolders-AboutMe-holder'>
                <div id='RightPanel-Portfolio-Subfolders-AboutMe-icon'></div>
                <div id='RightPanel-Portfolio-Subfolders-AboutMe-text'>About Me</div>
                <div id='RightPanel-Portfolio-Subfolders-AboutMe-size'>10 KB</div>
                <div id='RightPanel-Portfolio-Subfolders-AboutMe-type'>Text File</div>
            </div>
        </div>
        
    )
}

export default fileExplorer_RightPanel_Portfolio