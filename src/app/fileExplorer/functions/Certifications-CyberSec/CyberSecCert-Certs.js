import './test.css'

const fileExplorer_RightPanel_Certifications_CyberSec = () => {




 //click anywhere else 
 window.addEventListener('click',(e)=>{
    if(e.target.id !== "RightPanel-Certifications-CyberSec-Subfolders-ComptiaA-holder" && e.target.id !== "RightPanel-Certifications-CyberSec-Subfolders-ComptiaA-icon" && e.target.id !== "RightPanel-Certifications-CyberSec-Subfolders-ComptiaA-text" ){
        let holder = document.getElementById('RightPanel-Certifications-CyberSec-Subfolders-ComptiaA-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    
})









 //one click
  function go_blue_on_1Cert(){
    let holder = document.getElementById('RightPanel-Certifications-CyberSec-Subfolders-ComptiaA-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }








 //double click


 function on_double_1Cert(){
    
    document.getElementById('Certificates_CyberSec_ComptiaA').style.display = ""
    document.getElementById('Certificates-CyberSec').style.display = "none"
    document.getElementById('navigate-bnt-back').title = "Certificates_CyberSec_ComptiaA"
    
 }
 









    return(
        <div id='RightPanel-Certifications-CyberSec-Subfolders-holder'>

            <div id='RightPanel-Certifications-CyberSec-Subfolders-ComptiaA-holder'   className='folder-holder' onClick={go_blue_on_1Cert} onDoubleClick={on_double_1Cert}>
                <div id='RightPanel-Certifications-CyberSec-Subfolders-ComptiaA-icon' className='folder-icon'></div>
                <div id='RightPanel-Certifications-CyberSec-Subfolders-ComptiaA-text' className='folder-text'>CompTIA A+</div>
                <div id='RightPanel-Certifications-CyberSec-Subfolders-ComptiaA-type' className='folder-type'>File Folder</div>
            </div>
            

        </div>

    )
}

export default fileExplorer_RightPanel_Certifications_CyberSec