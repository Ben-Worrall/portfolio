import './fileExplorer-LeftPanel.css'
import './fileExplorer-RightPanel.css'
import './functions/fileExplorer-RightPanel-css.css'
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import fileExplorer_RightPanel_Desktop from './functions/fileExplorer-RightPanel-Desktop';
import fileExplorer_RightPanel_Projects from './functions/fileExplorer-RightPanel-Projects';
import fileExplorer_RightPanel_Portfolio from './functions/fileExplorer-RightPanel-Portfolio';
import fileExplorer_RightPanel_Certifications from './functions/fileExplorer-RightPanel-Certifications';
import fileExplorer_RightPanel_BenW from './functions/fileExplorer-RightPanel-BenW';
import fileExplorer_RightPanel_AboutMe from './functions/fileExplorer-RightPanel-AboutMe';
import fileExplorer_RightPanel_Projects_Developement from './functions/fileExplorer-RightPanel-Projects-Developement';
import Projects_Developement_RatingClients from './functions/Projects-Developement/Projects-Developement-RatingClients';
import Projects_Developement_SkySurfer from './functions/Projects-Developement/Projects-Developement-SkySurfer';
import Projects_Developement_Doors98 from './functions/Projects-Developement/Projects-Developement-Doors98';
import Projects_Developement_RateTheSkin from './functions/Projects-Developement/Projects-Developement-RateTheSkin';

import fileExplorer_RightPanel_Certifications_CyberSec from './functions/Certifications-CyberSec/CyberSecCert-Certs';
import Certificates_CyberSec_ComptiaA from './functions/Certifications-CyberSec/Cert-CyberSec-ComptiaA';



const FileExplorer = () => {



    //when clicking on elements to expand or minimize
    const [backgroundClass1, setBackgroundClass1] = useState('LeftPanel-ThirdLayer-Expand-image');
    const [backgroundClass2, setBackgroundClass2] = useState('LeftPanel-ThirdLayer-Expand-image');
    const [backgroundClass3, setBackgroundClass3] = useState('LeftPanel-ThirdLayer-Expand-image');
    const [backgroundClass4, setBackgroundClass4] = useState('LeftPanel-ThirdLayer-Expand-image');

    //for certifications
  const changeBackground1 = () => {
    setBackgroundClass1(backgroundClass1 === 'LeftPanel-ThirdLayer-Expand-image' ? 'LeftPanel-ThirdLayer-Minimize-image' : 'LeftPanel-ThirdLayer-Expand-image');
    if(document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-holder').style.display !== ""){
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-holder').style.display = ""
    } else {
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-holder').style.display = "none"
        

    }
  };
  //fopr projects
  const changeBackground2 = () => {
    setBackgroundClass2(backgroundClass2 === 'LeftPanel-ThirdLayer-Expand-image' ? 'LeftPanel-ThirdLayer-Minimize-image' : 'LeftPanel-ThirdLayer-Expand-image');
    if(document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-holder').style.display !== ""){
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-holder').style.display = ""
    } else {
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-holder').style.display = "none"


    }
  };
  //for portfolio
  const changeBackground3 = () => {
    setBackgroundClass3(backgroundClass3 === 'LeftPanel-ThirdLayer-Expand-image' ? 'LeftPanel-ThirdLayer-Minimize-image' : 'LeftPanel-ThirdLayer-Expand-image');    
  
    if(document.getElementById('LeftPanel-Body-ThirdLayer').style.display !== ""){
        document.getElementById('LeftPanel-Body-ThirdLayer').style.display = ""
       
    } else {
        document.getElementById('LeftPanel-Body-ThirdLayer').style.display = "none"
         document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-holder').style.display = "none"
         document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-holder').style.display = "none"

       
    }
    };
  //for benw
  const changeBackground4 = () => {
    setBackgroundClass4(backgroundClass4 === 'LeftPanel-ThirdLayer-Expand-image' ? 'LeftPanel-ThirdLayer-Minimize-image' : 'LeftPanel-ThirdLayer-Expand-image');    
  
    if(document.getElementById('LeftPanel-Body-SecondLayer').style.display !== ""){
        document.getElementById('LeftPanel-Body-SecondLayer').style.display = ""
       
    } else {
        document.getElementById('LeftPanel-Body-SecondLayer').style.display = "none"
        document.getElementById('LeftPanel-Body-ThirdLayer').style.display = "none"
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-holder').style.display = "none"
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-holder').style.display = "none"

    }
    };
  
    

    useEffect(() => {

        

   // WHEN YOU CLICK ON EACH FOLDER, SHOW ON RIGHT PANEL
//-----------------------------------------------------------//
        //desktop
        document.getElementById('LeftPanel-Desktop-holder').addEventListener('click', function(){
            document.getElementById('Desktop').style.display = ""
            document.getElementById('BenW').style.display = "none"
            document.getElementById('Portfolio').style.display = "none"
            document.getElementById('Certifications').style.display = "none"
            document.getElementById('Projects').style.display = "none"
            document.getElementById('AboutMe').style.display = "none"
            document.getElementById('arrow-body').style.display = "none"

            
            document.getElementById('Projects-Developement').style.display = "none"
            document.getElementById('Projects-Developement-RatingClients').style.display = "none"
            document.getElementById('Projects-Developement-SkySurfer').style.display = "none"
            document.getElementById('Projects-Developement-Doors98').style.display = "none"
            document.getElementById('Projects-Developement-RateTheSkin').style.display = "none"
        })

        //--------------------------------------------------------------------------------//

        //benW
        document.getElementById('LeftPanel-FirstLayer-BenW-holder').addEventListener('click', function(){
            document.getElementById('BenW').style.display = ""
            document.getElementById('Desktop').style.display = "none"
            document.getElementById('Portfolio').style.display = "none"
            document.getElementById('Certifications').style.display = "none"
            document.getElementById('Projects').style.display = "none"
            document.getElementById('AboutMe').style.display = "none"

            document.getElementById('Projects-Developement').style.display = "none"
            document.getElementById('Projects-Developement-RatingClients').style.display = "none"
            document.getElementById('Projects-Developement-SkySurfer').style.display = "none"
            document.getElementById('Projects-Developement-Doors98').style.display = "none"
            document.getElementById('Projects-Developement-RateTheSkin').style.display = "none"
        })

        //--------------------------------------------------------------------------------//

        //portfolio
        document.getElementById('LeftPanel-SecondLayer-Portfolio-holder').addEventListener('click', function(){
            document.getElementById('Portfolio').style.display = ""
            document.getElementById('Desktop').style.display = "none"
            document.getElementById('BenW').style.display = "none"
            document.getElementById('Certifications').style.display = "none"
            document.getElementById('Projects').style.display = "none"
            document.getElementById('AboutMe').style.display = "none"

           document.getElementById('Projects-Developement').style.display = "none"
           document.getElementById('Projects-Developement-RatingClients').style.display = "none"
            document.getElementById('Projects-Developement-SkySurfer').style.display = "none"
            document.getElementById('Projects-Developement-Doors98').style.display = "none"
            document.getElementById('Projects-Developement-RateTheSkin').style.display = "none"
        })

        //--------------------------------------------------------------------------------//

        //certuifications
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').addEventListener('click', function(){
            document.getElementById('Certifications').style.display = ""
            document.getElementById('Desktop').style.display = "none"
            document.getElementById('BenW').style.display = "none"
            document.getElementById('Portfolio').style.display = "none"
            document.getElementById('Projects').style.display = "none"
            document.getElementById('AboutMe').style.display = "none"

            document.getElementById('Projects-Developement').style.display = "none"
            document.getElementById('Projects-Developement-RatingClients').style.display = "none"
            document.getElementById('Projects-Developement-SkySurfer').style.display = "none"
            document.getElementById('Projects-Developement-Doors98').style.display = "none"
            document.getElementById('Projects-Developement-RateTheSkin').style.display = "none"
        })

        //--------------------------------------------------------------------------------//

            //cyber sec
                document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').addEventListener('click', function(){
                document.getElementById('Projects-Developement').style.display = ""
                document.getElementById('Projects').style.display = "none"
                document.getElementById('Desktop').style.display = "none"
                document.getElementById('BenW').style.display = "none"
                document.getElementById('Portfolio').style.display = "none"
                document.getElementById('Certifications').style.display = "none"
                document.getElementById('AboutMe').style.display = "none"


                document.getElementById('Projects-Developement-RatingClients').style.display = "none"
                document.getElementById('Projects-Developement-SkySurfer').style.display = "none"
                document.getElementById('Projects-Developement-Doors98').style.display = "none"
                document.getElementById('Projects-Developement-RateTheSkin').style.display = "none"
    
            })



        //--------------------------------------------------------------------------------//

            //dev


        //--------------------------------------------------------------------------------//

        //projects
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').addEventListener('click', function(){
            document.getElementById('Projects').style.display = ""
            document.getElementById('Desktop').style.display = "none"
            document.getElementById('BenW').style.display = "none"
            document.getElementById('Portfolio').style.display = "none"
            document.getElementById('Certifications').style.display = "none"
            document.getElementById('AboutMe').style.display = "none"

             document.getElementById('Projects-Developement').style.display = "none"
             document.getElementById('Projects-Developement-RatingClients').style.display = "none"
            document.getElementById('Projects-Developement-SkySurfer').style.display = "none"
            document.getElementById('Projects-Developement-Doors98').style.display = "none"
            document.getElementById('Projects-Developement-RateTheSkin').style.display = "none"
        })

        //--------------------------------------------------------------------------------//
            //cyber sec


            //dev
            document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').addEventListener('click', function(){
                document.getElementById('Projects-Developement').style.display = ""
                document.getElementById('Projects').style.display = "none"
                document.getElementById('Desktop').style.display = "none"
                document.getElementById('BenW').style.display = "none"
                document.getElementById('Portfolio').style.display = "none"
                document.getElementById('Certifications').style.display = "none"
                document.getElementById('AboutMe').style.display = "none"


                document.getElementById('Projects-Developement-RatingClients').style.display = "none"
                document.getElementById('Projects-Developement-SkySurfer').style.display = "none"
                document.getElementById('Projects-Developement-Doors98').style.display = "none"
                document.getElementById('Projects-Developement-RateTheSkin').style.display = "none"
    
            })



        //about me
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').addEventListener('click', function(){
            document.getElementById('AboutMe').style.display = ""
            document.getElementById('Desktop').style.display = "none"
            document.getElementById('BenW').style.display = "none"
            document.getElementById('Portfolio').style.display = "none"
            document.getElementById('Certifications').style.display = "none"
            document.getElementById('Projects').style.display = "none"

            document.getElementById('Projects-Developement').style.display = "none"
            document.getElementById('Projects-Developement-RatingClients').style.display = "none"
            document.getElementById('Projects-Developement-SkySurfer').style.display = "none"
            document.getElementById('Projects-Developement-Doors98').style.display = "none"
            document.getElementById('Projects-Developement-RateTheSkin').style.display = "none"

        })




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
    //projects cyber sec
    function DefaultProjectsCyberSec(){
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder').style.color = 'black'
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder').style.outlineStyle = ''

    }
    //certifications cyber sec
    function DefaultCertificationsCyberSec(){
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder').style.color = 'black'
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder').style.outlineStyle = ''

    }
    // projects dev
    function DefaultCertificationsDev(){
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder').style.color = 'black'
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder').style.outlineStyle = ''

    }
    //certifications dev
    function  DefaultProjectsDev(){
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').style.backgroundColor = 'white'
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').style.color = 'black'
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').style.outlineStyle = ''
        
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

                        //cyber sec (4th layer)
                        if(e.target.id !== "LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder" &&  e.target.id !== "LeftPanel-FourthLayer-Projects-subfolder-CyberSec-text" && e.target.id !== "LeftPanel-FourthLayer-Projects-subfolder-CyberSec-icon"){
                            DefaultProjectsCyberSec()
                        }
                        if(e.target.id !== "LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder" &&  e.target.id !== "LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-text" && e.target.id !== "LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-icon"){
                            DefaultCertificationsCyberSec()
                        }
                        //dev (4th layer)
                        if(e.target.id !== "LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder" &&  e.target.id !== "LeftPanel-FourthLayer-Certifications-subfolder-Developement-text" && e.target.id !== "LeftPanel-FourthLayer-Certifications-subfolder-Developement-icon"){
                            DefaultCertificationsDev()
                        }
                        if(e.target.id !== "LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder" &&  e.target.id !== "LeftPanel-FourthLayer-Projects-subfolder-Developement-text" && e.target.id !== "LeftPanel-FourthLayer-Projects-subfolder-Developement-icon"){
                            DefaultProjectsDev()
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
        document.getElementById('fileExplorer-text').innerText = "Exploring - Desktop"

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
        document.getElementById('fileExplorer-text').innerText = "Exploring - BenW"

        DefaultPortfolio()
    })
    document.getElementById('LeftPanel-FirstLayer-minimize').onclick = function(e){
        e.preventDefault(); 
        changeBackground4()
    }

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
        document.getElementById('fileExplorer-text').innerText = "Exploring - Portfolio (c:)"
    })
    document.getElementById('LeftPanel-SecondLayer-minimize').onclick = function(e){
        e.preventDefault(); 
        changeBackground3()
    }




    //THIRD LAYER


    //certifcations (third layer)
    document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.color = 'white'
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-Body-ThirdLayer-Certifications-holder').style.outlineStyle = 'dotted'

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Certifications"
        document.getElementById('fileExplorer-text').innerText = "Exploring - Certifications"
    })
    //minimize or expand
    document.getElementById('LeftPanel-ThirdLayer-minimize1').onclick = function(e){
        e.preventDefault(); 
        changeBackground1()
    }


    //Projects (third layer)
    document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.color = 'white'
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-Body-ThirdLayer-Projects-holder').style.outlineStyle = 'dotted'

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Projects"
        document.getElementById('fileExplorer-text').innerText = "Exploring - Projects"
    })
    //minimize or expand
    document.getElementById('LeftPanel-ThirdLayer-minimize2').onclick = function(e){
        e.preventDefault();
        changeBackground2()
        
    }
    


    //About me (third layer)
    document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.color = 'white'
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-Body-ThirdLayer-AboutMe-holder').style.outlineStyle = 'dotted'

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - About Me.txt"
        document.getElementById('fileExplorer-text').innerText = "Exploring - About Me.txt"
    })


    //Certifications (4th layer)
    //Cyber Sec
    document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder').style.color = 'white'
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder').style.outlineStyle = 'dotted'

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Certifications / Cyber Security"
    })
    
    //Dev
    document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder').style.color = 'white'
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder').style.outlineStyle = 'dotted'

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Certifications / Developement"
        document.getElementById('fileExplorer-text').innerText = "Exploring - Certifications"
    })
    


    //Projects (4th layer)
    //cyber sec
    document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder').style.color = 'white'
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder').style.outlineStyle = 'dotted'

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Projects / Cyber Security"
        document.getElementById('fileExplorer-text').innerText = "Exploring - Projects"
    })
    
    //Dev
    document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').addEventListener('click', function(){
        //change style
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').style.backgroundColor = 'blue'
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').style.color = 'white'
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').style.outline = '0.2vw solid black '
        document.getElementById('LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder').style.outlineStyle = 'dotted'

        //change exploring text
        document.getElementById('Exploring-top-bar').innerText = "Exploring - Projects / Developement"
        document.getElementById('fileExplorer-text').innerText = "Exploring - Projects"
    })


//-----------------------------------------------------------//

    //navigate  back

    //back
    document.getElementById('navigate-bnt-back').onclick = (e)=>{
        
        
        let test = false
        while(test === false){

            if(document.getElementById('navigate-bnt-back').title == "Desktop"){
                console.log('check benw')
                document.getElementById('Desktop').style.display = ""
                document.getElementById('BenW').style.display = "none"
                
                 
                test = true

            }
             if(document.getElementById('navigate-bnt-back').title == "BenW"){
                console.log('check portfolio')
                document.getElementById('BenW').style.display = ""
                document.getElementById('Portfolio').style.display = "none"
                document.getElementById('navigate-bnt-back').title = "Desktop"
                test = true
                
            }
            if(document.getElementById('navigate-bnt-back').title == "Portfolio"){
                console.log('check portfolio')
                document.getElementById('Portfolio').style.display = ""
                document.getElementById('Projects').style.display = "none"
                document.getElementById('Certifications').style.display = "none"
                document.getElementById('navigate-bnt-back').title = "BenW"
                test = true
                
            }
            if(document.getElementById('navigate-bnt-back').title == "Projects"){
                console.log('check portfolio')
               
                document.getElementById('Projects').style.display = ""
                document.getElementById('Projects-Developement').style.display = "none"
                document.getElementById('navigate-bnt-back').title = "Portfolio"
                test = true
                
            }
            if(document.getElementById('navigate-bnt-back').title == "Projects-Developement"){
                console.log('check portfolio')
               
                
                document.getElementById('Projects-Developement').style.display = ""
                document.getElementById('Projects-Developement-RatingClients').style.display = "none"
                document.getElementById('Projects-Developement-SkySurfer').style.display = "none"
                document.getElementById('Projects-Developement-Doors98').style.display = "none"
                document.getElementById('Projects-Developement-RateTheSkin').style.display = "none"
                document.getElementById('navigate-bnt-back').title = "Projects"
                test = true
                
            }
            if(document.getElementById('navigate-bnt-back').title == "Certifications"){
                console.log('check portfolio')
               
                
                document.getElementById('Portfolio').style.display = ""
                document.getElementById('Certifications').style.display = "none"
                document.getElementById('navigate-bnt-back').title = "Portfolio"
                test = true
                
            }
            if(document.getElementById('navigate-bnt-back').title == "Certifications-CyberSec"){
                console.log('check portfolio')
               
                
                document.getElementById('Certifications').style.display = ""
                document.getElementById('Certificates-CyberSec').style.display = "none"
                document.getElementById('navigate-bnt-back').title = "Certifications"
                test = true
                
            }
            if(document.getElementById('navigate-bnt-back').title == "Certificates_CyberSec_ComptiaA"){
                console.log('check portfolio')
        
                document.getElementById('Certificates-CyberSec').style.display = ""
                document.getElementById('Certificates_CyberSec_ComptiaA').style.display = "none"
                document.getElementById('navigate-bnt-back').title = "Certifications-CyberSec"
                test = true
                
            }
            
            else{
                test = true

            }
            

        }
           
        
        

    }








    });

    return(
        <div id='App'>

            {/* arrow to point to desktop (first option) */}
            <div className='arrows-body' id='arrow-body'>
                <div className='arrow'></div>
                <div className='arrow'></div>
                <div className='arrow'></div>
            </div>
            

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
                    <div id='navigate-bnts-holder'>
                        <button id='navigate-bnt-back' >⇦</button>
                    </div>
                    
                </div>


                <div id='LeftPanel-Body'>

                    
                    <div id='LeftPanel-Body-Header'>
                        <div id='LeftPanel-Desktop-holder'>
                            <div id='LeftPanel-Desktop-icon'></div>
                            <div id='LeftPanel-Desktop-text'>Desktop</div>
                        </div>
                    </div>




       
                    <div id='leftPanel-Body-FirstLayer' style={{display:'none'}}>
                        

                        <div id='LeftPanel-FirstLayer-minimize' className={backgroundClass4}></div>


                        <div id='LeftPanel-FirstLayer-BenW-holder'>
                            <div id='LeftPanel-FirstLayer-BenW-icon'></div>
                            <div id='LeftPanel-FirstLayer-BenW-text'>BenW</div>
                        </div>

                    </div>


                    <div id='LeftPanel-Body-SecondLayer' style={{display:'none'}}>

                            <div id='LeftPanel-SecondLayer-minimize' className={backgroundClass3}></div>

                            <div id='LeftPanel-SecondLayer-Portfolio-holder'>
                                <div id='LeftPanel-SecondLayer-Portfolio-icon'></div>
                                <div id='LeftPanel-SecondLayer-Portfolio-text'>Portfolio (c:)</div>

                            </div>

                    </div>


                    <div id='LeftPanel-Body-ThirdLayer' style={{display:'none'}}>

                        
                               {/* 3rd layer (Certifications)*/}
                            <div id='LeftPanel-ThirdLayer-Certifications'>
                                <div id='LeftPanel-ThirdLayer-minimize1' className={backgroundClass1}></div>
        
                                <div id='LeftPanel-Body-ThirdLayer-Certifications-holder'>
                                    <div id='LeftPanel-Body-ThirdLayer-Certifications-icon'></div>
                                    <div id='LeftPanel-Body-ThirdLayer-Certifications-text'>Certifications</div>
                                </div>
                            </div>
                            


                            {/* 4th layer (SUB FOLDER (certifications))*/}

                            <div id='LeftPanel-FourthLayer-Certifications-subfolder-holder' style={{display:"none"}}>

                                <div id='LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-holder'>

                                    <div id='LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Normal'></div>
                                    <div id='LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Minimize-Maximize'></div>

                                    <div id='LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-Folder'>
                                        <div id='LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-icon'></div>
                                        <div id='LeftPanel-FourthLayer-Certifications-subfolder-CyberSec-text'>Cyber Security</div>
                                    </div>

                                </div>

                                <div id='LeftPanel-FourthLayer-Certifications-subfolder-Developement-holder'>

                                    <div id='LeftPanel-FourthLayer-Certifications-subfolder-Developement-Normal'></div>
                                        <div id='LeftPanel-FourthLayer-Certifications-subfolder-Developement-Minimize-Maximize'></div>
                                        <div id='LeftPanel-FourthLayer-Certifications-subfolder-Developement-Folder'>
                                            <div id='LeftPanel-FourthLayer-Certifications-subfolder-Developement-icon'></div>
                                            <div id='LeftPanel-FourthLayer-Certifications-subfolder-Developement-text'>Developement</div>
                                        </div>
                                </div>

                            </div>

                            

                            


                        
                            {/* 3rd layer (Projects)*/}
                            <div id='LeftPanel-ThirdLayer-Projects'>
                                <div id='LeftPanel-ThirdLayer-minimize2' className={backgroundClass2}></div>

                                <div id='LeftPanel-Body-ThirdLayer-Projects-holder'>
                                    <div id='LeftPanel-Body-ThirdLayer-Projects-icon'></div>
                                    <div id='LeftPanel-Body-ThirdLayer-Projects-text'>Projects</div>
                                </div>
                            </div>

                            {/* 4th layer (SUB FOLDER (projects))*/}
                            <div id='LeftPanel-FourthLayer-Projects-subfolder-holder' style={{display:"none"}}>

                                <div id='LeftPanel-FourthLayer-Projects-subfolder-CyberSec-holder'>

                                    <div id='LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Normal'></div>
                                    <div id='LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Minimize-Maximize'></div>

                                    <div id='LeftPanel-FourthLayer-Projects-subfolder-CyberSec-Folder'>
                                        <div id='LeftPanel-FourthLayer-Projects-subfolder-CyberSec-icon'></div>
                                        <div id='LeftPanel-FourthLayer-Projects-subfolder-CyberSec-text'>Cyber Security</div>
                                    </div>

                                </div>

                                <div id='LeftPanel-FourthLayer-Projects-subfolder-Developement-holder'>

                                    <div id='LeftPanel-FourthLayer-Projects-subfolder-Developement-Normal'></div>
                                        <div id='LeftPanel-FourthLayer-Projects-subfolder-Developement-Minimize-Maximize'></div>
                                        <div id='LeftPanel-FourthLayer-Projects-subfolder-Developement-Folder'>
                                            <div id='LeftPanel-FourthLayer-Projects-subfolder-Developement-icon'></div>
                                            <div id='LeftPanel-FourthLayer-Projects-subfolder-Developement-text'>Developement</div>
                                        </div>
                                </div>

                            </div>
                        


                        
                            {/* 3rd layer (About Me)*/}

                            <div id='LeftPanel-ThirdLayer-AboutMe'>
                                <div id='LeftPanel-ThirdLayer-minimize3' ></div>

                                <div id='LeftPanel-Body-ThirdLayer-AboutMe-holder'>
                                    <div id='LeftPanel-Body-ThirdLayer-AboutMe-icon'></div>
                                    <div id='LeftPanel-Body-ThirdLayer-AboutMe-text'>About Me</div>
                                </div>
                            </div>

                        


                    </div>








                </div>


            </div>



            <div id='rightPanel'>
                
                <div id='Rightbar-topPanel' >
                    <div id='Rightbar-topPanel-Name'><div style={{marginLeft:"3%"}}>Name</div></div>
                    <div id='Rightbar-topPanel-Size'><div style={{marginLeft:"77.5%"}}>Size</div></div>
                    <div id='Rightbar-topPanel-Type'><div style={{marginLeft:"3%"}}>Type</div></div>
                </div>

                <div id="Desktop" className='rightpanel-object' style={{display:'none'}}>
                    {fileExplorer_RightPanel_Desktop()}
                </div>
                <div id="BenW" className='rightpanel-object' style={{display:'none'}}>
                    {fileExplorer_RightPanel_BenW()}
                </div>
                <div id="Portfolio" className='rightpanel-object' style={{display:'none'}}>
                    {fileExplorer_RightPanel_Portfolio()}
                </div>
                <div id="Certifications" className='rightpanel-object' style={{display:'none'}}>
                    {fileExplorer_RightPanel_Certifications()}
                </div>
                <div id="Projects" className='rightpanel-object' style={{display:'none'}}>
                    {fileExplorer_RightPanel_Projects()}
                </div>
                <div id="AboutMe" className='rightpanel-object' style={{display:'none'}}>
                    {fileExplorer_RightPanel_AboutMe()}
                </div>
                <div id="Certificates-CyberSec" className='rightpanel-object' style={{display:'none'}}>
                    {fileExplorer_RightPanel_Certifications_CyberSec()}
                </div>
                
                <div id="Projects-Developement" className='rightpanel-object' style={{display:'none'}}>
                    {fileExplorer_RightPanel_Projects_Developement()}
                </div>
        
                <div id="Projects-Developement-RatingClients" className='rightpanel-object' style={{display:'none'}}>
                    {Projects_Developement_RatingClients()}
                </div>
                <div id="Projects-Developement-SkySurfer" className='rightpanel-object' style={{display:'none'}}>
                    {Projects_Developement_SkySurfer()}
                </div>
                <div id="Projects-Developement-Doors98" className='rightpanel-object' style={{display:'none'}}>
                    {Projects_Developement_Doors98()}
                </div>
                <div id="Projects-Developement-RateTheSkin" className='rightpanel-object' style={{display:'none'}}>
                    {Projects_Developement_RateTheSkin()}
                </div>
                <div id="Certificates_CyberSec_ComptiaA" className='rightpanel-object' style={{display:'none'}}>
                    {Certificates_CyberSec_ComptiaA()}
                </div>
                

            </div>


        </div>
    )


}

export default FileExplorer