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

- scroll up button, what appears when a user scrolls down the page;

![alt scroll-up](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/scroll-unhovered.png)

All elements intended for user interaction have hover effects.

#### User interaction
##### Header
Header contains four sections - "About us", "Gallery", "Price", "Contacts". Each section contains link on the same name block of page's content. If a user clicks on one of them, will happen scroll down to the content, what was selected in header. For example, after click on section "Contacts", page will scroll down to the contact form.
The process of the scrolling down to the content, provides script "scroll-to-block.js". Each oh four header's section contains EventListener, what reacts on user's event "click". After click, the `element.scrollIntoView()` method scrolls the element's parent container such that the element on which `scrollIntoView()` is called is visible to the user. `scrollIntoView()` has two properties: `behaviour: "smooth"` - defines the transition animation, `block: "center"` - defines vertical aligment.

##### Tabs
Block with tabs contains four sections - "Spa", "Ocean coast", "Nature", "Services". 
User can select necessary tab by click on header. 
Each section is a short description of the leisure activities, what hotel can propose to the clients.
Each tab has title, text with short description of the selected service, theme photo, "Read more" button, which potentially open the page with a full description of the selected service.
![alt tab-desc](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/tab-2.png)

##### Slider
Block with photos of hotel landscapes.
Consists of title, photos, two side navigation arrows, four navigation dots.
Images are changed when a user clicks on one of the side navigation arrows or on one of the navigation dots. After the next image appears, the navigation dot, which match with number of selected image, changes color style.
![alt change image](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/slider-hover.png)

##### Calculator
Hotel cost calculator consists of the title, two `<input type="number">` elements for entering the amoount of guests and days, `<select>` element with type of rooms as options, block for total sum.
User enters data about amount of guests and days in hotel, select the type of room. After that value of total sum block chages on total sum, which counting by algorithm in "price-counter.js" script. 

![alt calc](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/calculator-options.png)

Total sum block doesn't change value if a user didn't enter data in field for amount of guests or/and amount of days.

![alt empty input calc](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/calculator-with-input.png)

##### Footer
Footer contains four logo of popular social networks. If a user hovers over one of them, logo changes the color style.

![alt footer hover](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/social-hovered.png)

##### Scroll up
After start, scroll up button is absent on the screen.
Scroll up button appears when a user scrolls down the page more than one screen height.

![alt scroll visible](https://github.com/AlexShyshkov/HotelWebPage/blob/master/source/img/project-screenshots/scroll-up-visible.png)

The process of the scrolling to the top of page, provides script "scroll-up.js". Scroll up button contains EventListener, what reacts on user's event "click". After click, if the number of pixels the document is currently scrolled along the vertical axis (`window.pageYOffset` property) above 0, method `window.scrollBy(x, y)` will scroll the document in the window by the given amount.
This project uses `window.scrollBy(0, scrollSpeed)` method, which receives two parametres: 0 - is the horizontal pixel value that you want to scroll by; scrollSpeed - is the vertical pixel value that you want to scroll by and that was defined as variable `let scrollSpeed = -40;`. This method repeats by using recursive `setTimeout()`, which launch scroll every 10 milliseconds and provides smooth scroll to the top of the page.
