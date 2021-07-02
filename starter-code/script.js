//**--mobile menu toggle--**//
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav_menu');
const icon = document.getElementById('icon');

hamburger.addEventListener('click', () => {
    //toggles on the "display" for the menu in CSS.
    navUL.classList.toggle('show');
    //changes the hamburger menu into a circle with an x, toggles on when menu is opened//
    icon.classList.toggle('fa-times-circle');
    //toggles the hamburger back when menu is closed
    icon.classList.toggle('fa-bars');
});

const planetJSON = async () => {
    try{
        const response = await fetch('data_orig.json');
        const data = await response.json();
        console.log('IT WORKS!');
        appendAllData(data)
     }  catch (error){
        console.log("an error has occured"+error);
     }
}
planetJSON();

//** DATA STRUCTURE FOR .JSON TO HTML **/
let planetGrabber = document.querySelector('main'); //identifying where planet name will be via class
let planetSelected = planetGrabber.id; //identifying the planet name to use as variable in json functions - so will work across all pages!!

 //**--Functon that runs through fetch--**//
 //**--Creates all DOM HTML inserts, classes and relevent IDs for changing content--**//
function appendAllData(data){

        //identify the container for overview via element ID
        const overviewImgContainer = document.getElementById('overview-img');
        //adds planet class to overview
        overviewImgContainer.classList.add('planet', 'item-image');

            //**planet image content section**//
            //create img variable
            const OverviewPlanet_image = document.createElement('img');
            //add variable class to image
            OverviewPlanet_image.classList.add(data[planetSelected].name);
            //add source to img
            OverviewPlanet_image.src = data[planetSelected].images.planet;
            //add alt desc to img
            OverviewPlanet_image.alt = data[planetSelected].overview.alt;

        //add img to parent div
        overviewImgContainer.appendChild(OverviewPlanet_image);
        
    
        //identify the container for overview via element ID
        const overviewContainer = document.getElementById('overview');
        //creates div for the details of the planet that will be nested in overview
        const planet_details_overview = document.createElement('div');
            planet_details_overview.classList.add('item-info');
            //creates the h1 element in the parent div made above
            const planet_name_overview = document.createElement('h1');
            //feed data from json into h1 tag html
            planet_name_overview.innerHTML = data[planetSelected].name;

        //append h1 to parent div
        planet_details_overview.appendChild(planet_name_overview);

        // create new div element
        const overviewParagraph_overview = document.createElement('p'); 
             //adds classes to div
            overviewParagraph_overview.classList.add('planet_highlights', 'overview');
            //adds json data to html
            overviewParagraph_overview.innerHTML = data[planetSelected].overview.content;
            
        //appends div to parent Div
        planet_details_overview.appendChild(overviewParagraph_overview);
       
            //create paragraph element
        const paragraph_source_overview = document.createElement('p');
            //add class to paragraph
            paragraph_source_overview.classList.add('source');
            //add inner html with anchor tag into paragraph
            paragraph_source_overview.innerHTML = `
            Source : <a href="`+data[planetSelected].overview.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;
            //add paragraph element to parent element
            planet_details_overview.appendChild(paragraph_source_overview);

        //appends child div to parent div
        overviewContainer.appendChild(planet_details_overview);
        
    //identify the container for structure via element ID// 
        const structureImgContainer = document.getElementById('structure-img');
            //adds planet class to overview
             structureImgContainer.classList.add('planet', 'item-image');
            //create img variable
            const planet_image_structure = document.createElement('img');
            //add variable class to image
            planet_image_structure.classList.add(data[planetSelected].name);
            //add source to img
            planet_image_structure.src = data[planetSelected].images.internal;
            //add alt desc to img
            planet_image_structure.alt = data[planetSelected].structure.alt;

        //appends div to parent div
        structureImgContainer.appendChild(planet_image_structure);

        //identify the container for overview via element ID// 
        const structureContainer = document.getElementById('structure');
            const planet_details_structure = document.createElement('div');
            planet_details_structure.classList.add('item-info');

            //create h1 element variable
            const planet_name_structure = document.createElement('h1');
            //feed data from json into variable html
            planet_name_structure.innerHTML = data[planetSelected].name;
            //append h1 to parent div
            planet_details_structure.appendChild(planet_name_structure);
            //create new div element
            const paragraph_overview_structure = document.createElement('p'); 
            //adds classes to div
            paragraph_overview_structure.classList.add('planet_highlights', 'overview');
            //adds json data to html
            paragraph_overview_structure.innerHTML = data[planetSelected].structure.content;
       
        //appends div to html
        planet_details_structure.appendChild(paragraph_overview_structure);
        
        //create paragraph element
        const paragraph_source_structure = document.createElement('p');
            //add class to paragraph
            paragraph_source_structure.classList.add('source');
            //add inner html with anchor tag into paragraph
            paragraph_source_structure.innerHTML = `
            Source : <a href="`+data[planetSelected].structure.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;
       
            //add paragraph element to parent element
        planet_details_structure.appendChild(paragraph_source_structure);

        //appends div to parent div
        structureContainer.appendChild(planet_details_structure);

        //identify the container for overview via element ID
        const geologyImgContainer = document.getElementById('geology-img');
            //adds planet class to overview
            geologyImgContainer.classList.add('planet', 'item-image');

            //overview image below
            const bottomPlanet_image_geology = document.createElement('img');
            bottomPlanet_image_geology.setAttribute('id','geo_stack_back');
            bottomPlanet_image_geology.classList.add(data[planetSelected].name);
            //add source to img
            bottomPlanet_image_geology.src = data[planetSelected].images.planet;
            //add alt desc to img
            bottomPlanet_image_geology.alt = data[planetSelected].overview.alt;

            //create geology img variable
            const planet_image_geology = document.createElement('img');
            //add variable class to image
            planet_image_geology.classList.add('planetGeo__imgSize');
            planet_image_geology.setAttribute('id', 'geo_stack_front');
            //add source to img
            planet_image_geology.src = data[planetSelected].images.geology;
            //add alt desc to img
            planet_image_geology.alt = data[planetSelected].geology.alt;

        //add img to parent div
        geologyImgContainer.appendChild(bottomPlanet_image_geology);
        geologyImgContainer.appendChild(planet_image_geology);
        
        //identify the container for overview via element ID// 
        const geologyContainer = document.getElementById('geology');
                    //create div elelment
                    const planet_details_geology = document.createElement('div');
                    //assign class to new div element made above
                    planet_details_geology.classList.add('item-info');
                    //create h1 element variable
                    const planet_name_geology = document.createElement('h1');
                    //feed data from json into variable html
                    planet_name_geology.innerHTML = data[planetSelected].name;

                //append h1 to parent div
                planet_details_geology.appendChild(planet_name_geology);

                    // create new div element
                    const paragraph_overview_geology = document.createElement('p'); 
                    //adds classes to div
                    paragraph_overview_geology.classList.add('planet_highlights', 'overview');
                    //adds json data to html
                    paragraph_overview_geology.innerHTML = data[planetSelected].geology.content;

                //appends div to html
                planet_details_geology.appendChild(paragraph_overview_geology);
                    //create paragraph element
                    const paragraph_source_geology = document.createElement('p');
                    //add class to paragraph
                    paragraph_source_geology.classList.add('source');
                    //add inner html with anchor tag into paragraph
                    paragraph_source_geology.innerHTML = `
                    Source : <a href="`+data[planetSelected].geology.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;
                    //add paragraph element to parent element
                    planet_details_geology.appendChild(paragraph_source_geology);

                //appends div to html
                geologyContainer.appendChild(planet_details_geology);
    
            //identify the container for overview via element ID// 
            const metaDataContainer = document.getElementById('metaData');
                //adds styling class new div
                metaDataContainer.classList.add('planet_details_sub');
                    //create div for rotation
                    const rotation = document.createElement('div');
                    //adds class to div
                    rotation.classList.add('planet_details_sub');
                    //adds html for rotation
                    rotation.innerHTML = `
                    <h4>Rotation Time</h4><h3>`+data[planetSelected].rotation+'</h3>';
                //appends div to parent element
                metaDataContainer.appendChild(rotation); 

                    //create div for revolutions
                    const revolution = document.createElement('div'); 
                    //add style class to div
                    revolution.classList.add('planet_details_sub');
                    //adds html to div
                    revolution.innerHTML = `
                    <h4>Revolution Time</h4><h3>`+data[planetSelected].revolution+'</h3>';
                     //appends div to parent element
                    metaDataContainer.appendChild(revolution); 

                    //creates div for radius
                    const radius = document.createElement('div'); 
                    //adds style class to div
                    radius.classList.add('planet_details_sub'); 
                    // fills html data to div
                    radius.innerHTML = `
                    <h4>Radius</h4><h3>`+data[planetSelected].radius+'</h3>';

                //appends child div to parent
                metaDataContainer.appendChild(radius); 
                    //creates div for temperature
                    const temp = document.createElement('div'); 
                    //adds styling class to div
                    temp.classList.add('planet_details_sub');
                    //adds html to div
                    temp.innerHTML = `
                    <h4>Average Temp.</h4><h3>`+data[planetSelected].temperature+'</h3>';

                // appends div to parent element
                metaDataContainer.appendChild(temp); 
}



//**--TAB SWITCHING LOGIC--**//
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  
  // find the associated tabPanel and show it!
  const { id } = event.currentTarget;
  //Find in the array of tabPanels
  const tabPanel = tabPanels.filter(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  //make each tab pannel that is hidden equal false
  tabPanel.forEach(panel => {
    panel.hidden = false;
  });
}

//listen to the button and for each click execute the handleTabClick function
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
