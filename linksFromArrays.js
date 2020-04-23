
const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
    },
    {
        "address": "https://google.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
    },

];

const header = document.createElement("div");
header.style.height = "20vh";
header.style.width = "100vw"
document.body.appendChild(header)


const colorBlock = document.createElement("div");
colorBlock.style.width = "100%";
colorBlock.style.height = "20%";
colorBlock.style.backgroundColor = "blue";
header.appendChild(colorBlock);


const navLinks = document.createElement("div");
navLinks.style.display = "flex";
navLinks.style.justifyContent = "flex-end";
navLinks.style.color = "#fc5d0d";
navLinks.style.fontSize = "25px";
navLinks.style.backgroundColor = "#d0fc0d";
header.appendChild(navLinks);

const navContainer = document.querySelector('.js-link-container');
// navLinks.appendChild(navContainer);





const createLink = function(sites) {               //creates address array, links, connects elements
    const divItem = document.createElement("div");
    const link = document.createElement("a");
    const image = document.createElement("img");
    image.setAttribute('src', sites.logo);
    image.style.width = "40%";
    image.style.marginLeft = "28%";
    image.style.marginTop = "6%";
    image.style.marginBottom = "6%";
    link.setAttribute('href', sites.address);
    link.appendChild(image);
    divItem.appendChild(link);
    navLinks.appendChild(divItem);
}

sites.forEach(createLink);






// Transform each object in the array into DOM elements structured like this:

// ```
// <a href="https://apple.com">
//     <img src="https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg">
// </a>
// ```

// Add each of these to a single container element on the page.