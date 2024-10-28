import '../fileExplorer-RightPanel-css.css'

function Projects_Developement_RateTheSkin (){

//click anywhere else 
window.addEventListener('click',(e)=>{
    if(e.target.id !== "RightPanel-Projects-Developement-RateTheSkin-holder" && e.target.id !== "RightPanel-Projects-Developement-RateTheSkin-icon" && e.target.id !== "RightPanel-Projects-Developement-RateTheSkin-text" ){
        let holder = document.getElementById('RightPanel-Projects-Developement-RateTheSkin-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    if(e.target.id !== "RightPanel-Projects-Developement-RateTheSkin-ReadMe-holder" && e.target.id !== "RightPanel-Projects-Developement-RateTheSkin-ReadMe-icon" && e.target.id !== "RightPanel-Projects-Developement-RateTheSkin-ReadMe-text" ){
        let holder = document.getElementById('RightPanel-Projects-Developement-RateTheSkin-ReadMe-holder')
        holder.style.backgroundColor = 'white'
        holder.style.color = 'black'
        holder.style.outline = ''
        
    }
    
    
})





     //one click
  function go_blue_on_1(){
    let holder = document.getElementById('RightPanel-Projects-Developement-RateTheSkin-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }
  function go_blue_on_2(){
    let holder = document.getElementById('RightPanel-Projects-Developement-RateTheSkin-ReadMe-holder')
    holder.style.backgroundColor = 'blue'
    holder.style.color = 'white'
    holder.style.outline = '0.2vw solid black '
    holder.style.outlineStyle = 'dotted'
  }





    return(
        <div id='RightPanel-Projects-Developement-RateTheSkin-HOLDER'>
            <div id='RightPanel-Projects-Developement-RateTheSkin-holder' className='RightPanel-Projects-Developement-file-holder' onClick={go_blue_on_1}>
                    <div id='RightPanel-Projects-Developement-RateTheSkin-icon' className='RightPanel-Projects-Developement-fileEXE-icon'></div>
                    <div id='RightPanel-Projects-Developement-RateTheSkin-text' className='RightPanel-Projects-Developement-file-text'>Rating Clients</div>
                    <div id='RightPanel-Projects-Developement-RateTheSkin-size' className='RightPanel-Projects-Developement-file-size'>564MB</div>
                    <div id='RightPanel-Projects-Developement-RateTheSkin-type' className='RightPanel-Projects-Developement-file-type'>Executable</div>
            </div>
            <div id='RightPanel-Projects-Developement-RateTheSkin-ReadMe-holder' className='RightPanel-Projects-Developement-file-holder' onClick={go_blue_on_2}>
                <div id='RightPanel-Projects-Developement-RateTheSkin-ReadMe-icon' className='RightPanel-Projects-Developement-file-icon'></div>
                <div id='RightPanel-Projects-Developement-RateTheSkin-ReadMe-text' className='RightPanel-Projects-Developement-file-text'>readme</div>
                <div id='RightPanel-Projects-Developement-RateTheSkin-ReadMe-size' className='RightPanel-Projects-Developement-file-size'>4KB</div>
                <div id='RightPanel-Projects-Developement-RateTheSkin-ReadMe-type' className='RightPanel-Projects-Developement-file-type'>Text Document</div>
            </div>
        </div>
    )


}





export default Projects_Developement_RateTheSkin



