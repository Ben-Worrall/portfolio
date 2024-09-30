import './fileExplorer.css'
const FileExplorer = () => {


    return(
        <div id='App'>
            

            <div id='topPanel'>
                  <div id='Leftbar-topPanel' class='top-panel-item'></div>

                    <div class='top-panel-item'> 
                        <a class='top-panel-link' target="_blank" href='https://github.com/Ben-Worrall' >
                            <u>G</u>ithub
                        </a>     
                    </div>

                    <div class='top-panel-item'>
                        <a class='top-panel-link' target="_blank" href=''>
                            <u>E</u>mail_me
                        </a>
                    </div>

                    <div class='top-panel-item'>
                        <a class='top-panel-link' target="_blank" href='https://www.linkedin.com/in/ben-worrall-0517382b0/'>
                            <u>L</u>inkedIn
                        </a>
                    </div>

                    <div class='top-panel-item'>
                        <a class='top-panel-link' target="_blank" href='https://www.instagram.com/ben__worrall/'>
                            <u>I</u>nstagram
                        </a>
                    </div>

                    <div class='top-panel-item'>
                        <a class='top-panel-link' target="_blank" href='https://discord.com/users/:975334864947650590'>
                            <u>D</u>iscord
                        </a>
                    </div>
            </div>



            <div id='leftPanel'>

            </div>



            <div id='rightPanel'>

            </div>


        </div>
    )


}

export default FileExplorer