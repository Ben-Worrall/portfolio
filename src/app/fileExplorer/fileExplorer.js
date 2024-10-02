import './fileExplorer.css'
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";




const FileExplorer = () => {

    useEffect(() => {



    //EXPAND selected, LEFT PANEL





//-----------------------------------------------------------//


    // function to click off and make style back to default 

    //(desktop)
    function DefualtDesktop(){
        document.getElementById('LeftPanel-Desktop-holder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-Desktop-holder').style.color = 'black'
        document.getElementById('LeftPanel-Desktop-holder').style.outlineStyle = ''
    }
    //BenW
    function DefaultBenW(){
        document.getElementById('LeftPanel-FirstLayer-BenW-holder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-FirstLayer-BenW-holder').style.color = 'black'
        document.getElementById('LeftPanel-FirstLayer-BenW-holder').style.outlineStyle = ''
    }
    //portoflio
    function DefaultPortfolio(){
        document.getElementById('LeftPanel-SecondLayer-Portfolio-holder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-SecondLayer-Portfolio-holder').style.color = 'black'
        document.getElementById('LeftPanel-SecondLayer-Portfolio-holder').style.outlineStyle = ''
    }
    //certifications
    function DefaultCertifications(){
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.color = 'black'
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.outlineStyle = ''
    }
    //projects
    function DefaultProjects(){
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.color = 'black'
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.outlineStyle = ''
    }
    //about me
    function DefaultAboutMe(){
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.color = 'black'
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.outlineStyle = ''
    }



    //make selected elements default when u click off

    window.addEventListener('click',(e)=>{

        //desktop (base layer)
        if(e.target.id !== "LeftPanel-Desktop-holder" &&  e.target.id !== "LeftPanel-Desktop-text" && e.target.id !== "LeftPanel-Desktop-icon"){
            DefualtDesktop()

            //BenW  (first layer)
            if(e.target.id !== "LeftPanel-FirstLayer-BenW-holder" &&  e.target.id !== "LeftPanel-FirstLayer-BenW-text" && e.target.id !== "LeftPanel-FirstLayer-BenW-icon"){
                DefaultBenW()
            }

                //Portfolio (second layer)
                if(e.target.id !== "LeftPanel-SecondLayer-Portfolio-holder" &&  e.target.id !== "LeftPanel-SecondLayer-Portfolio-text" && e.target.id !== "LeftPanel-SecondLayer-Portfolio-icon"){
                    DefaultPortfolio()
                }

                    //certification (third layer)
                    if(e.target.id !== "LeftPanel-Body-ThirdLayer-Certifications-holder" &&  e.target.id !== "LeftPanel-Body-ThirdLayer-Certifications-text" && e.target.id !== "LeftPanel-Body-ThirdLayer-Certifications-icon"){
                        DefaultCertifications()
                    }

                    //projects (third layer)
                    if(e.target.id !== "LeftPanel-Body-ThirdLayer-Projects-holder" &&  e.target.id !== "LeftPanel-Body-ThirdLayer-Projects-text" && e.target.id !== "LeftPanel-Body-ThirdLayer-Projects-icon"){
                        DefaultProjects()
                    }

                    //about me (third layer)
                    if(e.target.id !== "LeftPanel-Body-ThirdLayer-AboutMe-holder" &&  e.target.id !== "LeftPanel-Body-ThirdLayer-AboutMe-text" && e.target.id !== "LeftPanel-Body-ThirdLayer-AboutMe-icon"){
                        DefaultAboutMe()
                    }
        }
        

        

        
    })
    










    

//-----------------------------------------------------------//

    //EXPAND ELEMENTS AND CHANGE COLOURS


    //desktop (base layer)

    document.getElementById('LeftPanel-Desktop-holder').addEventListener('click', function(){

        //change style
        document.getElementById('LeftPanel-Desktop-holder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-Desktop-holder').style.color = 'white'
        document.getElementById('LeftPanel-Desktop-holder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-Desktop-holder').style.outlineStyle = 'dotted'

        //show expanded elements
        document.getElementById('leftPanel-Body-FirstLayer').style.display = ""

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Desktop"

        DefaultBenW()
        DefaultPortfolio()
    })
    


    //FIRST LAYER

    //BenW  (first layer)

    document.getElementById('LeftPanel-FirstLayer-BenW-holder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-FirstLayer-BenW-holder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-FirstLayer-BenW-holder').style.color = 'white'
        document.getElementById('LeftPanel-FirstLayer-BenW-holder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-FirstLayer-BenW-holder').style.outlineStyle = 'dotted'

        //show expanded elements
        document.getElementById('LeftPanel-Body-SecondLayer').style.display = ""

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - BenW"

        DefaultPortfolio()
    })

    //SECOND LAYER


    //portfolio (second layer)
    document.getElementById('LeftPanel-SecondLayer-Portfolio-holder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-SecondLayer-Portfolio-holder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-SecondLayer-Portfolio-holder').style.color = 'white'
        document.getElementById('LeftPanel-SecondLayer-Portfolio-holder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-SecondLayer-Portfolio-holder').style.outlineStyle = 'dotted'

        //show expanded elements
        document.getElementById('LeftPanel-Body-ThirdLayer').style.display = ""

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Portfolio (c:)"
    })


    //THIRD LAYER


    //certifcations (third layer)
    document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.color = 'white'
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.outlineStyle = 'dotted'

        //show expanded elements
        //document.getElementById('LeftPanel-Body-ThirdLayer').style.display = ""

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Certifications"
    })


    //Projects (third layer)
    document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.color = 'white'
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.outlineStyle = 'dotted'

        //show expanded elements
        //document.getElementById('LeftPanel-Body-ThirdLayer').style.display = ""

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Portfolio (c:)"
    })


    //About me (third layer)
    document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.color = 'white'
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.outlineStyle = 'dotted'

        //show expanded elements
        //document.getElementById('LeftPanel-Body-ThirdLayer').style.display = ""

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Portfolio (c:)"
    })






//-----------------------------------------------------------//

    //MINIMIZE ELEMENTS


  //MINIMIZE desktop
   document.getElementById('LeftPanel-FirstLayer-minimize').addEventListener('click', function(){
        document.getElementById('leftPanel-Body-FirstLayer').style.display = "none"
        document.getElementById('LeftPanel-Body-SecondLayer').style.display = "none"
   })

   //MINIMIZE BenW
   document.getElementById('LeftPanel-SecondLayer-minimize').addEventListener('click', function(){
    document.getElementById('LeftPanel-Body-SecondLayer').style.display = "none"
     document.getElementById('LeftPanel-Body-ThirdLayer').style.display = "none"

   })
  //MINIMIZE Portfolio








    });

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

                    <div class='top-panel-item'>
                        <a class='top-panel-link' target="_blank" href=''>
                            <u>R</u>esume
                        </a>
                    </div>
            </div>



            <div id='leftPanel'>


                <div id='LeftPanel-Header'>
                    <div style={{marginLeft:"5%"}}>Folders</div>
                    
                </div>


                <div id='LeftPanel-Body'>

                    
                    <div id='LeftPanel-Body-Header'>
                        <div id='LeftPanel-Desktop-holder'>
                            <div id='LeftPanel-Desktop-icon'></div>
                            <div id='LeftPanel-Desktop-text'>Desktop</div>
                        </div>
                    </div>




       
                    <div id='leftPanel-Body-FirstLayer' >
                        

                        <div id='LeftPanel-FirstLayer-minimize'></div>


                        <div id='LeftPanel-FirstLayer-BenW-holder'>
                            <div id='LeftPanel-FirstLayer-BenW-icon'></div>
                            <div id='LeftPanel-FirstLayer-BenW-text'>BenW</div>
                        </div>

                    </div>


                    <div id='LeftPanel-Body-SecondLayer' >

                            <div id='LeftPanel-SecondLayer-minimize'></div>

                            <div id='LeftPanel-SecondLayer-Portfolio-holder'>
                                <div id='LeftPanel-SecondLayer-Portfolio-icon'></div>
                                <div id='LeftPanel-SecondLayer-Portfolio-text'>Portfolio (c:)</div>

                            </div>

                    </div>


                    <div id='LeftPanel-Body-ThirdLayer'>

                        <div id='LeftPanel-ThirdLayer-minimize1'></div>

                        <div id='LeftPanel-Body-ThirdLayer-Certifications-holder'>
                            <div id='LeftPanel-Body-ThirdLayer-Certifications-icon'></div>
                            <div id='LeftPanel-Body-ThirdLayer-Certifications-text'>Certifications</div>
                        </div>

                        <div id='LeftPanel-ThirdLayer-minimize2'></div>

                        <div id='LeftPanel-Body-ThirdLayer-Projects-holder'>
                            <div id='LeftPanel-Body-ThirdLayer-Projects-icon'></div>
                            <div id='LeftPanel-Body-ThirdLayer-Projects-text'>Projects</div>
                        </div>

                        <div id='LeftPanel-ThirdLayer-minimize3'></div>
                        
                        <div id='LeftPanel-Body-ThirdLayer-AboutMe-holder'>
                            <div id='LeftPanel-Body-ThirdLayer-AboutMe-icon'></div>
                            <div id='LeftPanel-Body-ThirdLayer-AboutMe-text'>About Me</div>
                        </div>


                    </div>








                </div>


            </div>



            <div id='rightPanel'>

            </div>


        </div>
    )


}

export default FileExplorer