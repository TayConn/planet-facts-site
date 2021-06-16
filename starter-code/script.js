//mobile menu toggle//
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


//----.json file fetch API - get data from json file to populate planet information----//
//----tell API where to find file, local directory so this is all that is needed ----//

//..FETCH API FOR overview section..//
fetch('data.json')
    .then(function (response){//the json data will arrive here//
        return response.json();
    })
    .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
        appendOverviewData(data);
    })
    .catch(function (err) { //displays an error in the console in case something went wrong//
        console.log(err);
    });

//..FETCH API FOR overview section..//
fetch('data.json')
    .then(function (response){//the json data will arrive here//
        return response.json();
    })
    .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
        appendOverviewImgData(data);
    })
    .catch(function (err) { //displays an error in the console in case something went wrong//
        console.log(err);
    });

//..FETCH API FOR overview section..//
fetch('data.json')
    .then(function (response){//the json data will arrive here//
        return response.json();
    })
    .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
        appendStructureImgData(data);
    })
    .catch(function (err) { //displays an error in the console in case something went wrong//
        console.log(err);
    });
//..FETCH API FOR overview section..//
fetch('data.json')
    .then(function (response){//the json data will arrive here//
        return response.json();
    })
    .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
        appendGeologyImgData(data);
    })
    .catch(function (err) { //displays an error in the console in case something went wrong//
        console.log(err);
    });

//..FETCH API FOR structure section..//
fetch('data.json')
    .then(function (response){//the json data will arrive here//
        return response.json();
    })
    .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
        appendStructureData(data);
    })
    .catch(function (err) { //displays an error in the console in case something went wrong//
         console.log(err);
    });
//..FETCH API FOR geology section..//
fetch('data.json')
    .then(function (response){//the json data will arrive here//
        return response.json();
    })
    .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
        appendGeologyData(data);
    })
    .catch(function (err) { //displays an error in the console in case something went wrong//
         console.log(err);
    });
//..FETCH API FOR metadata section..//
    fetch('data.json')
    .then(function (response){//the json data will arrive here//
        return response.json();
    })
    .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
        appendMetaData(data);
    })
    .catch(function (err) { //displays an error in the console in case something went wrong//
         console.log(err);
    });
    
//TAB SWITCHING LOGIC FOR MOBILE//
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
//   console.log(event.currentTarget);
//   console.log(id);
  //Find in the array of tabPanels
//console.log(tabPanels);
  const tabPanel = tabPanels.filter(
    panel => panel.getAttribute('aria-labelledby') === id
  );
//   tabPanel.hidden = false;

  tabPanel.forEach(panel => {
    panel.hidden = false;
  });
}
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));


//** DATA STRUCTURE FOR .JSON TO HTML **/
let planetGrabber = document.getElementsByClassName('planet_main'); //identifying where planet name will be via class
const planetSelected = planetGrabber[0].id; //identifying the planet name to use as variable in json functions - so will work across all pages!!
    
//create function to populate planet images
function appendOverviewImgData(data){
    const overviewImgContainer = document.getElementById('overview-img');//identify the container for overview via element ID// 
    overviewImgContainer.classList.add('planet', 'item-image');//adds planet class to overview
    for (var i = 0; i <data.length; i++){
        //planet image content
        const planet_image = document.createElement('img');//create img variable
        planet_image.classList.add(`${planetSelected}`);//add variable class to image
        planet_image.src = data[i][planetSelected].overview.image;//add source to img
        planet_image.alt = data[i][planetSelected].overview.alt;//add alt desc to img
        overviewImgContainer.appendChild(planet_image);//add img to parent div
        
    }
}

    //** create loop functoin to get object from json and append to div **//
    function appendOverviewData(data){
        const overviewContainer = document.getElementById('overview');//identify the container for overview via element ID// 
        for (var i = 0; i <data.length; i++){//appends data to div

                const planet_details = document.createElement('div');
                planet_details.classList.add('item-info');

                const planet_name = document.createElement('h1');//create h1 element variable
                planet_name.innerHTML = data[i][planetSelected].name;//feed data from json into variable html
                planet_details.appendChild(planet_name);//append h1 to parent div

                const paragraph_overview = document.createElement('p'); // create new div element
                paragraph_overview.classList.add('planet_highlights', 'overview');//adds classes to div
                paragraph_overview.innerHTML = data[i][planetSelected].overview.content;//adds json data to html
                planet_details.appendChild(paragraph_overview);//appends div to html
                
                const paragraph_source = document.createElement('p');//create paragraph element
                paragraph_source.classList.add('source');//add class to paragraph
                paragraph_source.innerHTML = `
                Source : <a href="`+data[i][planetSelected].overview.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;//add inner html with anchor tag into paragraph
                planet_details.appendChild(paragraph_source);//add paragraph element to parent element
                overviewContainer.appendChild(planet_details);//appends div to html
            }
            
    }

//create function to populate planet images
function appendStructureImgData(data){
    const structureImgContainer = document.getElementById('structure-img');//identify the container for structure via element ID// 
    structureImgContainer.classList.add('planet', 'item-image');//adds planet class to overview
    for (var i = 0; i <data.length; i++){
        //planet image content

        const planet_image = document.createElement('img');//create img variable
        planet_image.classList.add(`${planetSelected}`);//add variable class to image
        planet_image.src = data[i][planetSelected].structure.image;//add source to img
        planet_image.alt = data[i][planetSelected].structure.alt;//add alt desc to img
        structureImgContainer.appendChild(planet_image);//add img to parent div
    }
}

//** function to fill html and data into the structure tab **//
    function appendStructureData(data) {
        const structureContainer = document.getElementById('structure');//identify the container for overview via element ID// 
            for (var i = 0; i <data.length; i++){//appends data to div
             
                const planet_details = document.createElement('div');
                planet_details.classList.add('item-info');

                const planet_name = document.createElement('h1');//create h1 element variable
                planet_name.innerHTML = data[i][planetSelected].name;//feed data from json into variable html
                planet_details.appendChild(planet_name);//append h1 to parent div

                const paragraph_overview = document.createElement('p'); // create new div element
                paragraph_overview.classList.add('planet_highlights', 'overview');//adds classes to div
                paragraph_overview.innerHTML = data[i][planetSelected].structure.content;//adds json data to html
                planet_details.appendChild(paragraph_overview);//appends div to html

                const paragraph_source = document.createElement('p');//create paragraph element
                paragraph_source.classList.add('source');//add class to paragraph
                paragraph_source.innerHTML = `
                Source : <a href="`+data[i][planetSelected].structure.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;//add inner html with anchor tag into paragraph
                planet_details.appendChild(paragraph_source);//add paragraph element to parent element
                structureContainer.appendChild(planet_details);//appends div to html

            }
    }

        //create function to populate planet images
function appendGeologyImgData(data){
    const geologyImgContainer = document.getElementById('geology-img');//identify the container for overview via element ID// 
    geologyImgContainer.classList.add('planet', 'item-image');//adds planet class to overview
    for (var i = 0; i <data.length; i++){
        //planet image content
        const planet_image = document.createElement('img');//create img variable
        planet_image.classList.add(`${planetSelected}`);//add variable class to image
        planet_image.src = data[i][planetSelected].geology.image;//add source to img
        planet_image.alt = data[i][planetSelected].geology.alt;//add alt desc to img
        geologyImgContainer.appendChild(planet_image);//add img to parent div
    }
}
//** function to fill html and data into the geoloy tab **//
    function appendGeologyData(data) {
        const geologyContainer = document.getElementById('geology');//identify the container for overview via element ID// 
            for (var i = 0; i <data.length; i++){//appends data to div
       
                const planet_details = document.createElement('div');
                planet_details.classList.add('item-info');

                const planet_name = document.createElement('h1');//create h1 element variable
                planet_name.innerHTML = data[i][planetSelected].name;//feed data from json into variable html
                planet_details.appendChild(planet_name);//append h1 to parent div

                const paragraph_overview = document.createElement('p'); // create new div element
                paragraph_overview.classList.add('planet_highlights', 'overview');//adds classes to div
                paragraph_overview.innerHTML = data[i][planetSelected].geology.content;//adds json data to html
                planet_details.appendChild(paragraph_overview);//appends div to html

                const paragraph_source = document.createElement('p');//create paragraph element
                paragraph_source.classList.add('source');//add class to paragraph
                paragraph_source.innerHTML = `
                Source : <a href="`+data[i][planetSelected].geology.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;//add inner html with anchor tag into paragraph
                planet_details.appendChild(paragraph_source);//add paragraph element to parent element
                geologyContainer.appendChild(planet_details);//appends div to html

            }
    }
//** function to fill html and data into the meta data section **//
    function appendMetaData(data) {
        const metaDataContainer = document.getElementById('metaData');//identify the container for overview via element ID// 
            metaDataContainer.classList.add('planet_details_sub');//adds styling class to overview
            for (var j = 0; j <data.length; j++){//appends data to div
                const rotation = document.createElement('div');//create div for rotation
                rotation.classList.add('planet_details_sub');//adds class to div
                rotation.innerHTML = `
                <h4>Rotation Time</h4><h3>`+data[j][planetSelected].rotation+'</h3>';//adds html for rotation
                metaDataContainer.appendChild(rotation); //appends div to parent element

                const revolution = document.createElement('div'); //create div for revolutions
                revolution.classList.add('planet_details_sub');//add style class to div
                revolution.innerHTML = `
                <h4>Revolution Time</h4><h3>`+data[j][planetSelected].revolution+'</h3>';//adds html to div
                metaDataContainer.appendChild(revolution);  //appends div to parent element

                const radius = document.createElement('div'); //creates div for radius
                radius.classList.add('planet_details_sub'); //adds style class to div
                radius.innerHTML = `
                <h4>Radius</h4><h3>`+data[j][planetSelected].radius+'</h3>';// fills html data to div
                metaDataContainer.appendChild(radius); //appends child div to parent

                const temp = document.createElement('div'); //creates div for temperature
                temp.classList.add('planet_details_sub');//adds styling class to div
                temp.innerHTML = `
                <h4>Average Temp.</h4><h3>`+data[j][planetSelected].temperature+'</h3>';//adds html to div
                metaDataContainer.appendChild(temp); // appends div to parent element
            }
    }
    