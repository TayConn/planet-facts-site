# Planets fact site

-[view live site](https://planet-facts-site.vercel.app/)

##Table of Contents

- [The challenge](#the-challenge)
- [What was provided](#what-was-provided)
- [Building the project](#building-the-project)
- [Personal Challenge](#personal-challenge)
- [A few things I'm proud of](#a-few-things-i'm-proud-of:)


![Design preview for the Planets fact site coding challenge](./preview.jpg)

## Welcome! 👋 🚀 

### The challenge

Build out this 8-page planets fact site and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### What was provided:

+ .json data
+ barebones html for each page
+ images for each page
+ figma/sketch design file with theme sheet

### Building the project

1. Planning overall HTML architecture and semantics
2. Setting CSS (Sass) globals, importing fonts and roughing out styling for main elements
3. Designed 'mobile first' with responsive resizing based on screen resolution
4. Work to add mobile menu functionality and create .jason fetches to pull in data to populate pages
5. Repeat HTML structure across all pages

### Personal Challenge!!

I decided to take a JS-heavy approach, using the provided local `data.json` file for the planets. I have yet to work with pulling in data sets from .json files and adding them to the DOM via JS - seemed like a great challenge to futher my familiarity with JS and working with data.

### A few things I'm proud of:

```html
<div class="tabs planet_buttons_wrapper item-buttons">
      <div role="tablist" aria-label="Planet Information" class="planet_details_buttons">
        <button role="tab" id="overview_tab" aria-selected="true"><span class="number_opacity">01</span>Overview</button>
        <button role="tab" id="structure_tab" aria-selected="false"><span class="number_opacity">02</span><span class="tab_desk_vis">Internal </span>Structure</button>
        <button role="tab" id="surface_tab"
        aria-selected="false"><span class="number_opacity">03</span>Surface<span class="tab_desk_vis"> Geology</span></button>
      </div>
    </div>
```
```css - Targeting styling based on aria selection was new to me! Great to target it based off of actions taken by users and translated through JS.

   button[aria-selected="true"] { /*activates a change in styling when aria-selected is = to true*/
        opacity: 1;
        background-color: $color_aqua;
    }
    button[aria-selected="false"] {/*activates a change in styling when aria-selected is = to false*/
        opacity: .5;
    }
```
```js

  function appendOverviewImgData(data){
    const overviewImgContainer = document.getElementById('overview-img');//identify the container for overview via element ID// 
    overviewImgContainer.classList.add('planet', 'item-image');//adds planet class to overview
    for (var i = 0; i <data.length; i++){
        //planet content
        const planet_image = document.createElement('img');//create img variable
        planet_image.classList.add(`${planetSelected}`);//add variable class to image using template literals
        planet_image.src = data[i][planetSelected].overview.image;//add source to img (found via variables set by a class in the HTML!)
        planet_image.alt = data[i][planetSelected].overview.alt;//add alt desc to img (found via variables set by a class in the HTML!)
        overviewImgContainer.appendChild(planet_image);//add img to parent div
   
    }
}

```

