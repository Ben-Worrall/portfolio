import './test.css'
import '../fileExplorer-RightPanel-css.css'

function Certificates_CyberSec_ComptiaA(){

//click anywhere else
window.addEventListener('click',(e)=>{
    if(e.target.id !== "Certificates-CyberSec-ComptiaA-holder" && e.target.id !== "Certificates-CyberSec-ComptiaA-icon" && e.target.id !== "Certificates-CyberSec-ComptiaA-text" ){
        //let holder = document.getElementById('Certificates-CyberSec-ComptiaA-holder')
        //holder.style.backgroundColor = 'white'
        //holder.style.color = 'black'
        //holder.style.outline = ''
        
    }
    if(e.target.id !== "Certificates-CyberSec-ComptiaA-ReadMe-holder" && e.target.id !== "Certificates-CyberSec-ComptiaA-ReadMe-icon" && e.target.id !== "Certificates-CyberSec-ComptiaA-ReadMe-text" ){
        //let holder = document.getElementById('Certificates-CyberSec-ComptiaA-ReadMe-holder')
        //holder.style.backgroundColor = 'white'
        //holder.style.color = 'black'
        //holder.style.outline = ''
        
    }
    
    
})





     //one click
  function go_blue_on_1(){
    let holder = document.getElementById('Cert-CyberSec-ComptiaA-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }
  

  //double click
  function open_on_doouble_1(){
    document.getElementById('RenderApp-ComptiaA11').style.display = ""
    document.getElementById('EXE-App').style.display = ""
    document.getElementById('FileExplorer-App').style.display = "none"
    document.getElementById('fileExplorer').style.display = "none"
    document.getElementById('FileExplorer-App').style.display = "none"
    
  }
  



    return(
        <div id='Cert-CyberSec-ComptiaA-HOLDER'>
            <div id='Cert-CyberSec-ComptiaA-holder' className='Projects-Developement-file-holder' onClick={go_blue_on_1} onDoubleClick={open_on_doouble_1}>
                    <div id='Cert-CyberSec-ComptiaA-icon' className='Projects-Developement-fileEXE-icon' onClick={go_blue_on_1}></div>
                    <div id='Cert-CyberSec-ComptiaA-text' className='Projects-Developement-file-text' onClick={go_blue_on_1}>CompTIA A+ 220-1101/1102</div>
                    <div id='Cert-CyberSec-ComptiaA-size' className='Projects-Developement-file-size' onClick={go_blue_on_1}>204KB</div>
                    <div id='Cert-CyberSec-ComptiaA-type' className='Projects-Developement-file-type' onClick={go_blue_on_1}>File</div>
            </div>
            
        </div>
    )


}





export default  Certificates_CyberSec_ComptiaA