//variables
const allPages = document.getElementsByClassName("page");
const pageContent = document.getElementsByClassName("pageContent");
const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutPage");
const contactPage = document.getElementById("contactPage");
const portfolioSubPage = document.getElementById("portfolioSubPage");

const navBarIndicator = document.getElementById("navBarIndicator")
const navBarLinks = document.querySelectorAll('#navBar li');
const homeLink = navBarLinks[0];
const aboutLink = navBarLinks[1];
const contactLink = navBarLinks[2];
//timeDelay must be the same value as the transition value in style.css for the .page class
const timeDelay = 200;

//Calls home page initially
pageChange("home");

//function that updates page and navbar
function pageChange(page, translateAmount) {
  
  //updates navbar indicator
  navBarIndicator.style.transform = translateAmount;
    
  //changes nav bar
  removeNav();
  if (page == "home") {
    homeLink.style.color = "white";
  }
  
  else if (page == "about") {
    aboutLink.style.color = "white";
  }
  
  else if (page == "contact") {
    contactLink.style.color = "white";
  }
  
  //turns page invis first
  for (let i = 0; i < allPages.length; i++) {
    allPages[i].style.opacity = "0"; 
  }
  
  //waits some time before changing the display of specific page to let fade animation happen
  setTimeout(() => {
    
    //scroll to top of screen first
    window.scrollTo(0,0);
    
    //starts page content on edge of screen, so it can slide in to its normal position
    for (let i = 0; i < pageContent.length; i++) {
      pageContent[i].style.transform = "translateX(-5%)";
      pageContent[i].style.opacity = "0"; 
    }
    
    //Turns on specific page display
    removePage();
    if (page == "home") {
      homePage.style.display = "flex"; 
      portfolioSubPage.style.display = "flex";
    }
    
    else if (page == "about") {
      aboutPage.style.display = "flex"; 
    }
    
    else if (page == "contact") {
      contactPage.style.display = "flex"; 
    }
  
    //waits some time after page is fully loaded to make page visible again
    setTimeout(() => {
      for (let i = 0; i < allPages.length; i++) {
        allPages[i].style.opacity = "1"; 
      }
      
      //moves page content to right after the page is visible 
      for (let i = 0; i < pageContent.length; i++) {
        pageContent[i].style.transform = "translateX(0%)"; 
        pageContent[i].style.opacity = "1"; 
      }
      
    }, timeDelay);
  
  }, timeDelay);
}

//functions for removing page displays and navbar colors
function removePage() {
    homePage.style.display = "none"; 
    aboutPage.style.display = "none"; 
    contactPage.style.display = "none"; 
    
    portfolioSubPage.style.display = "none";
}
function removeNav() {
    homeLink.style.color = "grey";
    aboutLink.style.color = "grey";
    contactLink.style.color = "grey";
}