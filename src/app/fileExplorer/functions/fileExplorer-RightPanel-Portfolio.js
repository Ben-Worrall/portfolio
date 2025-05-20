import styles from './fileExplorer-RightPanel.module.css';
import './fileExplorer-RightPanel-css.css'

const fileExplorer_RightPanel_Portfolio = () => {


    window.addEventListener('click',(e)=>{
        if(e.target.id !== "RightPanel-Portfolio-Subfolders-Certifications-holder" && e.target.id !== "RightPanel-Portfolio-Subfolders-Certifications-icon" && e.target.id !== "RightPanel-Portfolio-Subfolders-Certifications-text" && e.target.id !== "RightPanel-Portfolio-Subfolders-Certifications-type" ){
            let holder = document.getElementById('RightPanel-Portfolio-Subfolders-Certifications-holder')
            holder.style.backgroundColor = 'white'
            holder.style.color = 'black'
            holder.style.outline = ''
            
        }
        if(e.target.id !== "RightPanel-Portfolio-Subfolders-Projects-holder" && e.target.id !== "RightPanel-Portfolio-Subfolders-Projects-icon" && e.target.id !== "RightPanel-Portfolio-Subfolders-Projects-text" && e.target.id !== "RightPanel-Portfolio-Subfolders-Projects-type"){
            let holder = document.getElementById('RightPanel-Portfolio-Subfolders-Projects-holder')
            holder.style.backgroundColor = 'white'
            holder.style.color = 'black'
            holder.style.outline = ''
            
        }
        if(e.target.id !== "RightPanel-Portfolio-Subfolders-AboutMe-holder" && e.target.id !== "RightPanel-Portfolio-Subfolders-AboutMe-icon" && e.target.id !== "RightPanel-Portfolio-Subfolders-AboutMe-text" && e.target.id !== "RightPanel-Portfolio-Subfolders-AboutMe-type"){
            let holder = document.getElementById('RightPanel-Portfolio-Subfolders-AboutMe-holder')
            holder.style.backgroundColor = 'white'
            holder.style.color = 'black'
            holder.style.outline = ''
            
        }
    })



    function go_blue_on_clickCyber(){
        let holder = document.getElementById('RightPanel-Portfolio-Subfolders-Certifications-holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }
    function go_blue_on_clickDev(){
        let holder = document.getElementById('RightPanel-Portfolio-Subfolders-Projects-holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }
    function go_blue_on_clickAboutMe(){
        let holder = document.getElementById('RightPanel-Portfolio-Subfolders-AboutMe-holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }

    function shownextfolderCert(){
        document.getElementById('Portfolio').style.display = "none"
        document.getElementById('Certifications').style.display = ""
        document.getElementById('navigate-bnt-back').title = "Certifications"
    }
    function shownextfolderProj(){
        document.getElementById('Portfolio').style.display = "none"
           document.getElementById('Projects').style.display = ""
           document.getElementById('navigate-bnt-back').title = "Portfolio"
    }

    return(
        <div id='RightPanel-Portfolio-Subfolders-holder'>
            <div id='RightPanel-Portfolio-Subfolders-Certifications-holder' className={styles.folderHolder} onClick={go_blue_on_clickCyber} onDoubleClick={shownextfolderCert}>
                <div id='RightPanel-Portfolio-Subfolders-Certifications-icon' className={styles.folderIcon}></div>
                <div id='RightPanel-Portfolio-Subfolders-Certifications-text'className={styles.folderText}>Certifications</div>
                <div id='RightPanel-Portfolio-Subfolders-Certifications-type'className={styles.folderType}>File Folder</div>
            </div>
            <div id='RightPanel-Portfolio-Subfolders-Projects-holder' className={styles.folderHolder} onClick={go_blue_on_clickDev} onDoubleClick={shownextfolderProj}>
                <div id='RightPanel-Portfolio-Subfolders-Projects-icon' className={styles.folderIcon}></div>
                <div id='RightPanel-Portfolio-Subfolders-Projects-text' className={styles.folderText}>Projects</div>
                <div id='RightPanel-Portfolio-Subfolders-Projects-type' className={styles.folderType}>File Folder</div>
            </div>
            <div id='RightPanel-Portfolio-Subfolders-AboutMe-holder' className={styles.folderHolder} onClick={go_blue_on_clickAboutMe}>
                <div id='RightPanel-Portfolio-Subfolders-AboutMe-icon' className={styles.folderIcon}></div>
                <div id='RightPanel-Portfolio-Subfolders-AboutMe-text' className={styles.folderText}>About Me</div>
                <div id='RightPanel-Portfolio-Subfolders-AboutMe-size' className={styles.folderSize}>10 KB</div>
                <div id='RightPanel-Portfolio-Subfolders-AboutMe-type' className={styles.folderType}>Text Document</div>
            </div>
        </div>
        
    )
}

export default fileExplorer_RightPanel_Portfolio