import '../fileExplorer-RightPanel-css.css'

function Projects_Developement_Doors98(){

//click anywhere else 
window.addEventListener('click',(e)=>{
    if(e.target.id !== "Projects-Developement-Doors98-holder" && e.target.id !== "Projects-Developement-Doors98-icon" && e.target.id !== "Projects-Developement-Doors98-text" ){
        let holder = document.getElementById('Projects-Developement-Doors98-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    if(e.target.id !== "Projects-Developement-Doors98-ReadMe-holder" && e.target.id !== "Projects-Developement-Doors98-ReadMe-icon" && e.target.id !== "Projects-Developement-Doors98-ReadMe-text" ){
        let holder = document.getElementById('Projects-Developement-Doors98-ReadMe-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    
    
})





     //one click
  function go_blue_on_1(){
    let holder = document.getElementById('Projects-Developement-Doors98-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }
  function go_blue_on_2(){
    let holder = document.getElementById('Projects-Developement-Doors98-ReadMe-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }

  //double click
  function open_on_doouble_1(){
    document.getElementById('RenderApp-Doors98').style.display = ""
    document.getElementById('EXE-App').style.display = ""
  }
  function open_on_doouble_2(){
    document.getElementById('ReadMe-App-HOLDER').style.display = ""
    document.getElementById('ReadMe-Body-Doors98').style.display = ""
    document.getElementById('ReadMe-TopBar-URL-Doors98').style.display = ""
    document.getElementById('ReadMe-TopBar-text-AppTitle').innerHTML = "Doors 98"
    document.getElementById('ReadMe-App').style.display = ""
  }



    return(
        <div id='Projects-Developement-Doors98-HOLDER'>
            <div id='Projects-Developement-Doors98-holder' className='Projects-Developement-file-holder' onClick={go_blue_on_1} onDoubleClick={open_on_doouble_1}>
                    <div id='Projects-Developement-Doors98-icon' className='Projects-Developement-fileEXE-icon' onClick={go_blue_on_1}></div>
                    <div id='Projects-Developement-Doors98-text' className='Projects-Developement-file-text' onClick={go_blue_on_1}>Doors 98 Emulator</div>
                    <div id='Projects-Developement-Doors98-size' className='Projects-Developement-file-size' onClick={go_blue_on_1}>1.02GB</div>
                    <div id='Projects-Developement-Doors98-type' className='Projects-Developement-file-type' onClick={go_blue_on_1}>Application</div>
            </div>
            <div id='Projects-Developement-Doors98-ReadMe-holder' className='Projects-Developement-file-holder' onClick={go_blue_on_2} onDoubleClick={open_on_doouble_2}>
                <div id='Projects-Developement-Doors98-ReadMe-icon' className='Projects-Developement-file-icon' onClick={go_blue_on_2}></div>
                <div id='Projects-Developement-Doors98-ReadMe-text' className='Projects-Developement-file-text' onClick={go_blue_on_2}>readme</div>
                <div id='Projects-Developement-Doors98-ReadMe-size' className='Projects-Developement-file-size' onClick={go_blue_on_2}>4KB</div>
                <div id='Projects-Developement-Doors98-ReadMe-type' className='Projects-Developement-file-type' onClick={go_blue_on_2}>Text Document</div>
            </div>
        </div>
    )


}





export default Projects_Developement_Doors98