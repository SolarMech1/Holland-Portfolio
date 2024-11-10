//variables
const body = document.body;

const pageContainer = document.getElementsByClassName("pageContainer");
const pageContent = document.getElementsByClassName("pageContent");
const homePage = document.getElementsByClassName("homePage");
const aboutPage = document.getElementsByClassName("aboutPage");
const contactPage = document.getElementsByClassName("contactPage");

const navBarIndicator = document.getElementsByClassName("navBarIndicator");
const navBarItems = document.querySelectorAll('.navBar li');
const firstNavBarItem = navBarItems[0];
const secondNavBarItem = navBarItems[1];
const thirdNavBarItem = navBarItems[2];

//timeDelay variable must be the same value as the transition in the page container,
//For example: transition: opacity .5s ease-in-out; then time delay must equal 500. 
const timeDelay = 400;

//function for moving page container
function translatePageContainer(translateAmount, overflowValue) {
    for (let i = 0; i < pageContainer.length; i++) {
        pageContainer[i].style.opacity = "0";
    
        setTimeout(() => {
            window.scrollTo(0, 0);
            pageContainer[i].style.transform = translateAmount;
            pageContainer[i].style.opacity = "1";
            body.style.overflowY = overflowValue;
        }, timeDelay);
  } 
}

//function for moving navigation bar indicator and changing color of nav links
function translateNavBarIndicator(translateAmount, pageNumber) {
    for (let i = 0; i < navBarIndicator.length; i++) {
        navBarIndicator[i].style.transform = translateAmount;
    }
  
    if (pageNumber == 1) {
        firstNavBarItem.style.color = "white";
        secondNavBarItem.style.color = "grey";
        thirdNavBarItem.style.color = "grey";
    }
    if (pageNumber == 2) {
        firstNavBarItem.style.color = "grey";
        secondNavBarItem.style.color = "white";
        thirdNavBarItem.style.color = "grey";
    }
    if (pageNumber == 3) {
        firstNavBarItem.style.color = "grey";
        secondNavBarItem.style.color = "grey";
        thirdNavBarItem.style.color = "white";
    }
}

//function for content slide
function contentSlideFunc() {
    for (let i = 0; i < pageContent.length; i++) {
        pageContent[i].classList.remove("contentSlide"); 
        
        setTimeout(() => {
            pageContent[i].classList.add("contentSlide");
        }, timeDelay);
    }
}




//Initially calls home page
homeButton()

//home button clicked 
function homeButton() {
    translatePageContainer("translateX(0vw)", "auto");
    translateNavBarIndicator("translateX(-400px)", 1);
    contentSlideFunc();
}

//about button clicked
function aboutButton() {
    translatePageContainer("translateX(-100vw)", "hidden");
    translateNavBarIndicator("translateX(-200px)", 2);
    contentSlideFunc();
}

//contact button clicked
function contactButton() {
    translatePageContainer("translateX(-200vw)", "hidden");
    translateNavBarIndicator("translateX(0px)", 3);
    contentSlideFunc();
}