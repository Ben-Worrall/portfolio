import './fileExplorer-RightPanel-css.css'
const fileExplorer_RightPanel_Desktop = () => {

    window.addEventListener('click',(e)=>{
        if(e.target.id !== "RightPanel-BenW-Holder" && e.target.id !== "RightPanel-BenW-icon" && e.target.id !== "RightPanel-BenW-text" ){
            let holder = document.getElementById('RightPanel-BenW-Holder')
            holder.style.backgroundColor = 'white'
            holder.style.color = 'black'
            holder.style.outline = ''
            
        }
    })



    function go_blue_on_click(){
        let holder = document.getElementById('RightPanel-BenW-Holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }

    function shownextfolder(){
        document.getElementById('Desktop').style.display = "none"
           document.getElementById('BenW').style.display = ""
           document.getElementById('navigate-bnt-back').title = "Desktop"
    }      

    return(
        <div id='RightPanel-BenW-Holder' onClick={go_blue_on_click} onDoubleClick={shownextfolder}>
            <div id='RightPanel-BenW-icon'></div>
            <div id='RightPanel-BenW-text'>BenW</div>
            <div id='RightPanel-BenW-type'>User</div>
        </div>
    )
}

export default fileExplorer_RightPanel_Desktop