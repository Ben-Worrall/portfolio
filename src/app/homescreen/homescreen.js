import './homescreen.css'


function Homescreen (){
    return(
        <div id="HomescreenBase">

       
          <div id='RecycleBin'>
            <div class="Icon-img" id='RecycleBin-img'>
                
            </div>
            <div class="Icon-text">
                Recycle Bin
            </div>
          </div>


          <div id='MyComputer'>
            <div class="Icon-img" id='MyComputer-img'>

            </div>
            <div class="Icon-text">
                My Computer
            </div>   
          </div>


          <div id='MyDocuments'>
            <div class="Icon-img" id='MyDocuments-img'>

            </div>
            <div class="Icon-text">
                My Documents
            </div>
          </div>


          




            <div id='taskbar'>
                <div id='StartButton'>
                    <img id='start-img'></img>
                    <div id='start-text'>Start</div>
                </div>


                <div class="siderbar1"></div>
                <div class="siderbar2"></div>


                <div id='InternetApps'>
                    <div id='internet1-img' class="internet-img"></div>
                    <div id='internet2-img' class="internet-img"></div>
                    <div id='internet3-img' class="internet-img"></div>
                    <div id='internet4-img' class="internet-img"></div>
                </div>


                <div class="siderbar1"></div>
                <div class="siderbar2"></div>
                

                <div id='OpenApps'>
                    <div id="fileExplorer">
                       <div id='fileExplorer-icon'></div>
                       <div id='fileExplorer-text'>Exploring - MyComputer</div>
                    </div>
                </div>
                

                
               



                <div class="siderbar1" id="sidebarRight"></div>
               <div id='FakeTime'>
                Made By Ben Worrall

               </div>
            </div>








            <div id='FileExplorer-App'>
                <div id='top-bar'>
                    <div id='Exploring-top-bar'>Exploring -</div>

                    <div id='button-holder-top-bar'>
                        <button id='minimize-bnt' class="topbar-bnt">🗕</button>
                        <button id='maximize-bnt' class="topbar-bnt">🗖</button>
                        <button id='exit-bnt' class="topbar-bnt">✖</button>
                    </div>
                   
                </div>



            </div>








        </div>
    )
}

export default Homescreen