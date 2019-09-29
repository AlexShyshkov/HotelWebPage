# HotelWebPage
---------------------------------
## Example of the hotel web site
---------------------------------
### Project contains
 File name         |   File content
-------------------|------------------
index.html         |File with HTML markup
css                |Folder with CSS styles
   header.css      |Page's header CSS styles
   main.css        |CSS styles for the content on the page
   footer.css      |Page's footer CSS styles
   scroll-up.css   |CSS styles for the scroll-up element
js                 |Folder with page scripts
   scroll          |Folder with scrolling scripts
   scroll-to-block.js|Scrooling to the page's block 
   scroll-up.js|Scrolling to the top of the page
   tab.js|Script for the page tabs
   slider.js|Script for the gallery with hotel photos
   price-counter.js|Script for the price counter
source             |Folder with project images and screenshots

----------------------------------------
Built with
----------------------------------------

- Sublime text - text editor for code, markup; 
- Running in the MS Windows enviroment.

----------------------------------------

### Functionality
----------------------------------------
#### Interface
Interface contains:
- header with four links to the main blocks on the page - "About us", "Gallery", "Price", "Contacts";

![alt header](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/header.png)

- block with the greeting and short URL of the page;

![alt greeting](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/greeting.png)

- block with tabs, what describes main information about services and activities in the hotel;

![alt tabs](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/tab-1.png)

- slider with the photos of the hotel's landscapes;

![alt slider](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/gallery.png)

- hotel cost calculator;

![alt calculator](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/calculatop.png)

- contact form;

![alt contact](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/contact-form.png)

- footer with logo of the four popular social networks;

![alt footer](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/footer.png)

- scroll up button, what appears when user scrolls down the page;

![alt scroll-up](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/scroll-unhovered.png)

All elements intended for user interaction have hover effects.

#### User interaction
Header contains four sections - "About us", "Gallery", "Price", "Contacts". Each section contains link on the same name block of page's content. If a user clicks on one of them, will happen scroll down to the content, what was selected in header. For example, after click on section "Contacts", page will scroll down to the contact form.
The process of the scrolling down to the content, provides script "scroll-to-block.js". Each oh four header's section contains EventListener, what reacts on user's event "click". After click, the `element.scrollIntoView()` method scrolls the element's parent container such thst the element on which `scrollIntoView()` is called is visible to the user. `scrollIntoView()` has two properties: `behaviour: "smooth"` - defines the transition animation, `block: "center"` - defines vertical aligment.
