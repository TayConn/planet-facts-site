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





//----.json file fetch API - get data from json file to populate planet information----//
//----tell API where to find file, local directory so this is all that is needed ----//

//json test rewrite
// const myRequest = new Request('data.json');

// fetch(myRequest)
//   .then(response => response.json())
//   .then(data => {
//       const returnedData = data;
//       console.log(returnedData);
//     //   return returnedData;
//   })
//   .catch(console.error);
  

//   let planet = returnedData.filter(selectedPlanet => selectedPlanet[planetSelected]);
//   console.log(planet);
// const getPlanetData = async () => {
//     const request = await fetch('data.json');
//     const data = await request.json();
//     return data;
// };


// getPlanetData().then( function (data) {
//         let overviewContentTemp = appendOverviewData(data);
//         let overviewContentImgTemp = appendOverviewImgData(data);
//         let structureContentTemp = appendStructureImgData(data);
//         let structureContentImgTemp = appendStructureData(data);
//         let geologyContentTemp = appendGeologyImgData(data);
//         let geologyContentImgTemp = appendGeologyData(data);
//         let metaDataContentTemp = appendMetaData(data);
//         return (overviewContentTemp && overviewContentImgTemp && structureContentTemp && structureContentImgTemp && geologyContentTemp && geologyContentImgTemp && metaDataContentTemp);
//     })
//     .catch(function (error) { //displays an error in the console in case something went wrong//
//                 console.log(error);
//     });



//..FETCH API FOR overview section..//

// fetch('data.json')
//     .then(function (response){//the json data will arrive here//
//         return response.json();
//     })
//     .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
//         appendOverviewData(data);
//     })
    
//     .catch(function (error) { //displays an error in the console in case something went wrong//
//         console.log(error);
//     });

// //..FETCH API FOR overview section..//
// fetch('data.json')
//     .then(function (response){//the json data will arrive here//
//         return response.json();
//     })
//     .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//

//         appendOverviewImgData(data);
//     })
//     .catch(function (error) { //displays an error in the console in case something went wrong//
//         console.log(error);
//     });

// //..FETCH API FOR overview section..//
// fetch('data.json')
//     .then(function (response){//the json data will arrive here//
//         return response.json();
//     })
//     .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
     
//         appendStructureImgData(data);
//     })
//     .catch(function (error) { //displays an error in the console in case something went wrong//
//         console.log(error);
//     });
// //..FETCH API FOR overview section..//
// fetch('data.json')
//     .then(function (response){//the json data will arrive here//
//         return response.json();
//     })
//     .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//

//         appendGeologyImgData(data);
//     })
//     .catch(function (error) { //displays an error in the console in case something went wrong//
//         console.log(error);
//     });

// //..FETCH API FOR structure section..//
// fetch('data.json')
//     .then(function (response){//the json data will arrive here//
//         return response.json();
//     })
//     .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//

//         appendStructureData(data);
//     })
//     .catch(function (error) { //displays an error in the console in case something went wrong//
//          console.log(error);
//     });
// //..FETCH API FOR geology section..//
// fetch('data.json')
//     .then(function (response){//the json data will arrive here//
//         return response.json();
//     })
//     .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//

//         appendGeologyData(data);
//     })
//     .catch(function (error) { //displays an error in the console in case something went wrong//
//          console.log(error);
//     });
// //..FETCH API FOR metadata section..//
//     fetch('data.json')
//     .then(function (response){//the json data will arrive here//
//         return response.json();
//     })
//     .then(function (data) {//retrieves actual json data as a parameter identical to data in .json file//
//         console.log(data);
//         appendMetaData(data);
//     })
//     .catch(function (error) { //displays an error in the console in case something went wrong//
//          console.log(error);
//     });


 

    fetch('data_orig.json')
    .then(function (response){//the json data will arrive here//
        return response.json();
    })
    .then(function (data){
        console.log(data);
        appendAllData(data);
    })
    // .then(data => {
    //     const planetObj = data;
    //     console.log(planetObj[id]);
    // })
    .catch(function (error) { //displays an error in the console in case something went wrong//
         console.log(error);
    });
   
    // fetch('data_orig.json')
    //         .then(response => response.json())
    //     .then(data => { 
    //         const planetObj = data;
    //         console.log(planetObj[0]);
    //     })
    // .catch((error) => {
    // console.error('Error:', error);
    // });

//** DATA STRUCTURE FOR .JSON TO HTML **/
let planetGrabber = document.querySelector('main'); //identifying where planet name will be via class
let planetSelected = planetGrabber.id; //identifying the planet name to use as variable in json functions - so will work across all pages!!

 

function appendAllData(data){
    
        const overviewImgContainer = document.getElementById('overview-img');//identify the container for overview via element ID// 
        overviewImgContainer.classList.add('planet', 'item-image');//adds planet class to overview

            //planet image content
            const OverviewPlanet_image = document.createElement('img');//create img variable
            OverviewPlanet_image.classList.add(data[planetSelected].name);//add variable class to image
            OverviewPlanet_image.src = data[planetSelected].images.planet;//add source to img
            OverviewPlanet_image.alt = data[planetSelected].overview.alt;//add alt desc to img
            overviewImgContainer.appendChild(OverviewPlanet_image);//add img to parent div
        
    
        //** create loop functoin to get object from json and append to div **//
     
        const overviewContainer = document.getElementById('overview');//identify the container for overview via element ID// 
           //appends data to div
    
            const planet_details_overview = document.createElement('div');
            planet_details_overview.classList.add('item-info');

            const planet_name_overview = document.createElement('h1');//create h1 element variable
            planet_name_overview.innerHTML = data[planetSelected].name;//feed data from json into variable html
            planet_details_overview.appendChild(planet_name_overview);//append h1 to parent div

            const overviewParagraph_overview = document.createElement('p'); // create new div element
            overviewParagraph_overview.classList.add('planet_highlights', 'overview');//adds classes to div
            overviewParagraph_overview.innerHTML = data[planetSelected].overview.content;//adds json data to html
            planet_details_overview.appendChild(overviewParagraph_overview);//appends div to html
            
            const paragraph_source_overview = document.createElement('p');//create paragraph element
            paragraph_source_overview.classList.add('source');//add class to paragraph
            paragraph_source_overview.innerHTML = `
            Source : <a href="`+data[planetSelected].overview.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;//add inner html with anchor tag into paragraph
            planet_details_overview.appendChild(paragraph_source_overview);//add paragraph element to parent element
            overviewContainer.appendChild(planet_details_overview);//appends div to html
        
    
    //create function to populate planet images
    
        const structureImgContainer = document.getElementById('structure-img');//identify the container for structure via element ID// 
        structureImgContainer.classList.add('planet', 'item-image');//adds planet class to overview
      
            //planet image content
    
            const planet_image_structure = document.createElement('img');//create img variable
            planet_image_structure.classList.add(data[planetSelected].name);//add variable class to image
            planet_image_structure.src = data[planetSelected].images.internal;//add source to img
            planet_image_structure.alt = data[planetSelected].structure.alt;//add alt desc to img
            structureImgContainer.appendChild(planet_image_structure);//add img to parent div
        
    
    //** function to fill html and data into the structure tab **//
      
            const structureContainer = document.getElementById('structure');//identify the container for overview via element ID// 
           //appends data to div
                 
                    const planet_details_structure = document.createElement('div');
                    planet_details_structure.classList.add('item-info');
    
                    const planet_name_structure = document.createElement('h1');//create h1 element variable
                    planet_name_structure.innerHTML = data[planetSelected].name;//feed data from json into variable html
                    planet_details_structure.appendChild(planet_name_structure);//append h1 to parent div
    
                    const paragraph_overview_structure = document.createElement('p'); // create new div element
                    paragraph_overview_structure.classList.add('planet_highlights', 'overview');//adds classes to div
                    paragraph_overview_structure.innerHTML = data[planetSelected].structure.content;//adds json data to html
                    planet_details_structure.appendChild(paragraph_overview_structure);//appends div to html
    
                    const paragraph_source_structure = document.createElement('p');//create paragraph element
                    paragraph_source_structure.classList.add('source');//add class to paragraph
                    paragraph_source_structure.innerHTML = `
                    Source : <a href="`+data[planetSelected].structure.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;//add inner html with anchor tag into paragraph
                    planet_details_structure.appendChild(paragraph_source_structure);//add paragraph element to parent element
                    structureContainer.appendChild(planet_details_structure);//appends div to html
    
            
            //create function to populate planet images
    
        const geologyImgContainer = document.getElementById('geology-img');//identify the container for overview via element ID// 
        geologyImgContainer.classList.add('planet', 'item-image');//adds planet class to overview
        
            //planet image content
            const planet_image_geology = document.createElement('img');//create img variable
            planet_image_geology.classList.add(data[planetSelected].name);//add variable class to image
            planet_image_geology.src = data[planetSelected].images.geology;//add source to img
            planet_image_geology.alt = data[planetSelected].geology.alt;//add alt desc to img
            geologyImgContainer.appendChild(planet_image_geology);//add img to parent div
        
    //** function to fill html and data into the geoloy tab **//
            const geologyContainer = document.getElementById('geology');//identify the container for overview via element ID// 
                //appends data to div
           
                    const planet_details_geology = document.createElement('div');
                    planet_details_geology.classList.add('item-info');
    
                    const planet_name_geology = document.createElement('h1');//create h1 element variable
                    planet_name_geology.innerHTML = data[planetSelected].name;//feed data from json into variable html
                    planet_details_geology.appendChild(planet_name_geology);//append h1 to parent div
    
                    const paragraph_overview_geology = document.createElement('p'); // create new div element
                    paragraph_overview_geology.classList.add('planet_highlights', 'overview');//adds classes to div
                    paragraph_overview_geology.innerHTML = data[planetSelected].geology.content;//adds json data to html
                    planet_details_geology.appendChild(paragraph_overview_geology);//appends div to html
    
                    const paragraph_source_geology = document.createElement('p');//create paragraph element
                    paragraph_source_geology.classList.add('source');//add class to paragraph
                    paragraph_source_geology.innerHTML = `
                    Source : <a href="`+data[planetSelected].geology.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;//add inner html with anchor tag into paragraph
                    planet_details_geology.appendChild(paragraph_source_geology);//add paragraph element to parent element
                    geologyContainer.appendChild(planet_details_geology);//appends div to html
    
                
        
    //** function to fill html and data into the meta data section **//
        
            const metaDataContainer = document.getElementById('metaData');//identify the container for overview via element ID// 
                metaDataContainer.classList.add('planet_details_sub');//adds styling class to overview
                //appends data to div
                    const rotation = document.createElement('div');//create div for rotation
                    rotation.classList.add('planet_details_sub');//adds class to div
                    rotation.innerHTML = `
                    <h4>Rotation Time</h4><h3>`+data[planetSelected].rotation+'</h3>';//adds html for rotation
                    metaDataContainer.appendChild(rotation); //appends div to parent element
    
                    const revolution = document.createElement('div'); //create div for revolutions
                    revolution.classList.add('planet_details_sub');//add style class to div
                    revolution.innerHTML = `
                    <h4>Revolution Time</h4><h3>`+data[planetSelected].revolution+'</h3>';//adds html to div
                    metaDataContainer.appendChild(revolution);  //appends div to parent element
    
                    const radius = document.createElement('div'); //creates div for radius
                    radius.classList.add('planet_details_sub'); //adds style class to div
                    radius.innerHTML = `
                    <h4>Radius</h4><h3>`+data[planetSelected].radius+'</h3>';// fills html data to div
                    metaDataContainer.appendChild(radius); //appends child div to parent
    
                    const temp = document.createElement('div'); //creates div for temperature
                    temp.classList.add('planet_details_sub');//adds styling class to div
                    temp.innerHTML = `
                    <h4>Average Temp.</h4><h3>`+data[planetSelected].temperature+'</h3>';//adds html to div
                    metaDataContainer.appendChild(temp); // appends div to parent element
    
}


  
// //create function to populate planet images
// function appendOverviewImgData(data){
//     const overviewImgContainer = document.getElementById('overview-img');//identify the container for overview via element ID// 
//     overviewImgContainer.classList.add('planet', 'item-image');//adds planet class to overview
//     for (var i = 0; i <data.length; i++){
//         //planet image content
//         const planet_image = document.createElement('img');//create img variable
//         planet_image.classList.add(`${planetSelected}`);//add variable class to image
//         planet_image.src = data[i][planetSelected].overview.image;//add source to img
//         planet_image.alt = data[i][planetSelected].overview.alt;//add alt desc to img
//         overviewImgContainer.appendChild(planet_image);//add img to parent div
        
//     }
// }

//     //** create loop functoin to get object from json and append to div **//
//     function appendOverviewData(data){
//         const overviewContainer = document.getElementById('overview');//identify the container for overview via element ID// 
//         for (var i = 0; i <data.length; i++){//appends data to div

//                 const planet_details = document.createElement('div');
//                 planet_details.classList.add('item-info');

//                 const planet_name = document.createElement('h1');//create h1 element variable
//                 planet_name.innerHTML = data[i][planetSelected].name;//feed data from json into variable html
//                 planet_details.appendChild(planet_name);//append h1 to parent div

//                 const paragraph_overview = document.createElement('p'); // create new div element
//                 paragraph_overview.classList.add('planet_highlights', 'overview');//adds classes to div
//                 paragraph_overview.innerHTML = data[i][planetSelected].overview.content;//adds json data to html
//                 planet_details.appendChild(paragraph_overview);//appends div to html
                
//                 const paragraph_source = document.createElement('p');//create paragraph element
//                 paragraph_source.classList.add('source');//add class to paragraph
//                 paragraph_source.innerHTML = `
//                 Source : <a href="`+data[i][planetSelected].overview.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;//add inner html with anchor tag into paragraph
//                 planet_details.appendChild(paragraph_source);//add paragraph element to parent element
//                 overviewContainer.appendChild(planet_details);//appends div to html
//             }
            
//     }

// //create function to populate planet images
// function appendStructureImgData(data){
//     const structureImgContainer = document.getElementById('structure-img');//identify the container for structure via element ID// 
//     structureImgContainer.classList.add('planet', 'item-image');//adds planet class to overview
//     for (var i = 0; i <data.length; i++){
//         //planet image content

//         const planet_image = document.createElement('img');//create img variable
//         planet_image.classList.add(`${planetSelected}`);//add variable class to image
//         planet_image.src = data[i][planetSelected].structure.image;//add source to img
//         planet_image.alt = data[i][planetSelected].structure.alt;//add alt desc to img
//         structureImgContainer.appendChild(planet_image);//add img to parent div
//     }
// }

// //** function to fill html and data into the structure tab **//
//     function appendStructureData(data) {
//         const structureContainer = document.getElementById('structure');//identify the container for overview via element ID// 
//             for (var i = 0; i <data.length; i++){//appends data to div
             
//                 const planet_details = document.createElement('div');
//                 planet_details.classList.add('item-info');

//                 const planet_name = document.createElement('h1');//create h1 element variable
//                 planet_name.innerHTML = data[i][planetSelected].name;//feed data from json into variable html
//                 planet_details.appendChild(planet_name);//append h1 to parent div

//                 const paragraph_overview = document.createElement('p'); // create new div element
//                 paragraph_overview.classList.add('planet_highlights', 'overview');//adds classes to div
//                 paragraph_overview.innerHTML = data[i][planetSelected].structure.content;//adds json data to html
//                 planet_details.appendChild(paragraph_overview);//appends div to html

//                 const paragraph_source = document.createElement('p');//create paragraph element
//                 paragraph_source.classList.add('source');//add class to paragraph
//                 paragraph_source.innerHTML = `
//                 Source : <a href="`+data[i][planetSelected].structure.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;//add inner html with anchor tag into paragraph
//                 planet_details.appendChild(paragraph_source);//add paragraph element to parent element
//                 structureContainer.appendChild(planet_details);//appends div to html

//             }
//     }

//         //create function to populate planet images
// function appendGeologyImgData(data){
//     const geologyImgContainer = document.getElementById('geology-img');//identify the container for overview via element ID// 
//     geologyImgContainer.classList.add('planet', 'item-image');//adds planet class to overview
//     for (var i = 0; i <data.length; i++){
//         //planet image content
//         const planet_image = document.createElement('img');//create img variable
//         planet_image.classList.add(`${planetSelected}`);//add variable class to image
//         planet_image.src = data[i][planetSelected].geology.image;//add source to img
//         planet_image.alt = data[i][planetSelected].geology.alt;//add alt desc to img
//         geologyImgContainer.appendChild(planet_image);//add img to parent div
//     }
// }
// //** function to fill html and data into the geoloy tab **//
//     function appendGeologyData(data) {
//         const geologyContainer = document.getElementById('geology');//identify the container for overview via element ID// 
//             for (var i = 0; i <data.length; i++){//appends data to div
       
//                 const planet_details = document.createElement('div');
//                 planet_details.classList.add('item-info');

//                 const planet_name = document.createElement('h1');//create h1 element variable
//                 planet_name.innerHTML = data[i][planetSelected].name;//feed data from json into variable html
//                 planet_details.appendChild(planet_name);//append h1 to parent div

//                 const paragraph_overview = document.createElement('p'); // create new div element
//                 paragraph_overview.classList.add('planet_highlights', 'overview');//adds classes to div
//                 paragraph_overview.innerHTML = data[i][planetSelected].geology.content;//adds json data to html
//                 planet_details.appendChild(paragraph_overview);//appends div to html

//                 const paragraph_source = document.createElement('p');//create paragraph element
//                 paragraph_source.classList.add('source');//add class to paragraph
//                 paragraph_source.innerHTML = `
//                 Source : <a href="`+data[i][planetSelected].geology.source+`" title="Click here to visit the wikipedia page">Wikipedia <i class="fas fa-external-link-square-alt"></i></a>`;//add inner html with anchor tag into paragraph
//                 planet_details.appendChild(paragraph_source);//add paragraph element to parent element
//                 geologyContainer.appendChild(planet_details);//appends div to html

//             }
//     }
// //** function to fill html and data into the meta data section **//
//     function appendMetaData(data) {
//         const metaDataContainer = document.getElementById('metaData');//identify the container for overview via element ID// 
//             metaDataContainer.classList.add('planet_details_sub');//adds styling class to overview
//             for (var j = 0; j <data.length; j++){//appends data to div
//                 const rotation = document.createElement('div');//create div for rotation
//                 rotation.classList.add('planet_details_sub');//adds class to div
//                 rotation.innerHTML = `
//                 <h4>Rotation Time</h4><h3>`+data[j][planetSelected].rotation+'</h3>';//adds html for rotation
//                 metaDataContainer.appendChild(rotation); //appends div to parent element

//                 const revolution = document.createElement('div'); //create div for revolutions
//                 revolution.classList.add('planet_details_sub');//add style class to div
//                 revolution.innerHTML = `
//                 <h4>Revolution Time</h4><h3>`+data[j][planetSelected].revolution+'</h3>';//adds html to div
//                 metaDataContainer.appendChild(revolution);  //appends div to parent element

//                 const radius = document.createElement('div'); //creates div for radius
//                 radius.classList.add('planet_details_sub'); //adds style class to div
//                 radius.innerHTML = `
//                 <h4>Radius</h4><h3>`+data[j][planetSelected].radius+'</h3>';// fills html data to div
//                 metaDataContainer.appendChild(radius); //appends child div to parent

//                 const temp = document.createElement('div'); //creates div for temperature
//                 temp.classList.add('planet_details_sub');//adds styling class to div
//                 temp.innerHTML = `
//                 <h4>Average Temp.</h4><h3>`+data[j][planetSelected].temperature+'</h3>';//adds html to div
//                 metaDataContainer.appendChild(temp); // appends div to parent element
//             }
//     }
    