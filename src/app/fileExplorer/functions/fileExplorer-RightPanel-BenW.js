import './fileExplorer-RightPanel-css.css'
const fileExplorer_RightPanel_BenW = () => {

    window.addEventListener('click',(e)=>{
        if(e.target.id !== "RightPanel-Portfolio-Holder" && e.target.id !== "RightPanel-Portfolio-icon" && e.target.id !== "RightPanel-Portfolio-text" ){
            let holder = document.getElementById('RightPanel-Portfolio-Holder')
            holder.style.backgroundColor = 'white'
            holder.style.color = 'black'
            holder.style.outline = ''
            
        }
    })



    function go_blue_on_click(){
        let holder = document.getElementById('RightPanel-Portfolio-Holder')
        holder.style.backgroundColor = 'blue'
        holder.style.color = 'white'
        holder.style.outline = '0.2vw solid black '
        holder.style.outlineStyle = 'dotted'
    }
    function shownextfolder(){
        document.getElementById('BenW').style.display = "none"
        document.getElementById('Portfolio').style.display = ""
        document.getElementById('navigate-bnt-back').title = "Portfolio"
    }
    

    return(
        <div id='RightPanel-Portfolio-Holder' onClick={go_blue_on_click} onDoubleClick={shownextfolder}>
            <div id='RightPanel-Portfolio-icon'></div>
            <div id='RightPanel-Portfolio-text'>Portfolio (c:)</div>
            <div id='RightPanel-Portfolio-type'>Drive</div>
        </div>
    )
}

export default fileExplorer_RightPanel_BenW