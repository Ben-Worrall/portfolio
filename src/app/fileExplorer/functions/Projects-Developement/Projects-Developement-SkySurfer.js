import '../fileExplorer-RightPanel-css.css'

function Projects_Developement_SkySurfer(){

//click anywhere else 
window.addEventListener('click',(e)=>{
    if(e.target.id !== "Projects-Developement-SkySurfer-holder" && e.target.id !== "Projects-Developement-SkySurfer-icon" && e.target.id !== "Projects-Developement-SkySurfer-text" ){
        let holder = document.getElementById('Projects-Developement-SkySurfer-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    if(e.target.id !== "Projects-Developement-SkySurfer-ReadMe-holder" && e.target.id !== "Projects-Developement-SkySurfer-ReadMe-icon" && e.target.id !== "Projects-Developement-SkySurfer-ReadMe-text" ){
        let holder = document.getElementById('Projects-Developement-SkySurfer-ReadMe-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    
    
})





     //one click
  function go_blue_on_1(){
    let holder = document.getElementById('Projects-Developement-SkySurfer-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }
  function go_blue_on_2(){
    let holder = document.getElementById('Projects-Developement-SkySurfer-ReadMe-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }

  //double click
  function open_on_doouble_1(){
    document.getElementById('RenderApp-SkySurfer').style.display = ""
    document.getElementById('EXE-App').style.display = ""
  }
  function open_on_doouble_2(){

  }



    return(
        <div id='Projects-Developement-SkySurfer-HOLDER'>
            <div id='Projects-Developement-SkySurfer-holder' className='Projects-Developement-file-holder' onClick={go_blue_on_1} onDoubleClick={open_on_doouble_1}>
                    <div id='Projects-Developement-SkySurfer-icon' className='Projects-Developement-fileEXE-icon' onClick={go_blue_on_1}></div>
                    <div id='Projects-Developement-SkySurfer-text' className='Projects-Developement-file-text' onClick={go_blue_on_1}>Sky Surfer</div>
                    <div id='Projects-Developement-SkySurfer-size' className='Projects-Developement-file-size' onClick={go_blue_on_1}>57.4MB</div>
                    <div id='Projects-Developement-SkySurfer-type' className='Projects-Developement-file-type' onClick={go_blue_on_1}>Application</div>
            </div>
            <div id='Projects-Developement-SkySurfer-ReadMe-holder' className='Projects-Developement-file-holder' onClick={go_blue_on_2} onDoubleClick={open_on_doouble_2}>
                <div id='Projects-Developement-SkySurfer-ReadMe-icon' className='Projects-Developement-file-icon' onClick={go_blue_on_2}></div>
                <div id='Projects-Developement-SkySurfer-ReadMe-text' className='Projects-Developement-file-text' onClick={go_blue_on_2}>readme</div>
                <div id='Projects-Developement-SkySurfer-ReadMe-size' className='Projects-Developement-file-size' onClick={go_blue_on_2}>4KB</div>
                <div id='Projects-Developement-SkySurfer-ReadMe-type' className='Projects-Developement-file-type' onClick={go_blue_on_2}>Text Document</div>
            </div>
        </div>
    )


}





export default Projects_Developement_SkySurfer
