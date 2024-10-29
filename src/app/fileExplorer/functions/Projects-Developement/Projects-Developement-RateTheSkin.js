import '../fileExplorer-RightPanel-css.css'

function Projects_Developement_RateTheSkin(){

//click anywhere else 
window.addEventListener('click',(e)=>{
    if(e.target.id !== "Projects-Developement-RateTheSkin-holder" && e.target.id !== "Projects-Developement-RateTheSkin-icon" && e.target.id !== "Projects-Developement-RateTheSkin-text" ){
        let holder = document.getElementById('Projects-Developement-RateTheSkin-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    if(e.target.id !== "Projects-Developement-RateTheSkin-ReadMe-holder" && e.target.id !== "Projects-Developement-RateTheSkin-ReadMe-icon" && e.target.id !== "Projects-Developement-RateTheSkin-ReadMe-text" ){
        let holder = document.getElementById('Projects-Developement-RateTheSkin-ReadMe-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    
    
})





     //one click
  function go_blue_on_1(){
    let holder = document.getElementById('Projects-Developement-RateTheSkin-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }
  function go_blue_on_2(){
    let holder = document.getElementById('Projects-Developement-RateTheSkin-ReadMe-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }

  //double click
  function open_on_doouble_1(){
    document.getElementById('RenderApp-RateTheSkin').style.display = ""
    document.getElementById('EXE-App').style.display = ""
  }
  function open_on_doouble_2(){

  }



    return(
        <div id='Projects-Developement-RateTheSkin-HOLDER'>
            <div id='Projects-Developement-RateTheSkin-holder' className='Projects-Developement-file-holder' onClick={go_blue_on_1} onDoubleClick={open_on_doouble_1}>
                    <div id='Projects-Developement-RateTheSkin-icon' className='Projects-Developement-fileEXE-icon' onClick={go_blue_on_1}></div>
                    <div id='Projects-Developement-RateTheSkin-text' className='Projects-Developement-file-text' onClick={go_blue_on_1}>Rate the Skin</div>
                    <div id='Projects-Developement-RateTheSkin-size' className='Projects-Developement-file-size' onClick={go_blue_on_1}>263.2MB</div>
                    <div id='Projects-Developement-RateTheSkin-type' className='Projects-Developement-file-type' onClick={go_blue_on_1}>Application</div>
            </div>
            <div id='Projects-Developement-RateTheSkin-ReadMe-holder' className='Projects-Developement-file-holder' onClick={go_blue_on_2} onDoubleClick={open_on_doouble_2}>
                <div id='Projects-Developement-RateTheSkin-ReadMe-icon' className='Projects-Developement-file-icon' onClick={go_blue_on_2}></div>
                <div id='Projects-Developement-RateTheSkin-ReadMe-text' className='Projects-Developement-file-text' onClick={go_blue_on_2}>readme</div>
                <div id='Projects-Developement-RateTheSkin-ReadMe-size' className='Projects-Developement-file-size' onClick={go_blue_on_2}>4KB</div>
                <div id='Projects-Developement-RateTheSkin-ReadMe-type' className='Projects-Developement-file-type' onClick={go_blue_on_2}>Text Document</div>
            </div>
        </div>
    )


}





export default Projects_Developement_RateTheSkin