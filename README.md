# Hangman Game

## What is it?

Exactly what it sounds like - a website where you can play Hangman. Except, this hangman has a twist - it's Fooly Cooly (FLCL) themed. FLCL is a surrealist anime from the early 00's; I highly recommend it to anybody reading this page!

The site is currently deployed at https://zagara2.github.io/Hangman-Game/ .

## Technologies Used

* HTML5
* CSS3
* Javascript
* JQuery

## Browser and Screen Compatibility

### Browser Tests

The site has been tested on Chrome, Safari, Firefox, and Internet Explorer. 

It works perfectly on every browser listed except Safari. However, the Safari bug can be fixed by changing the variable declaration around line 104 to `var userGuess = String.fromCharCode(event.which)` - I just haven't gotten around to editing the code yet. 


### Screen Compatibility Tests

The site is best viewed on a large desktop (1680x1050 and up). However, it looks okay on smaller desktop and notebook screens, it's just that the right side of the background image gets cropped out somewhat. I have media queries in place which give the site a different format on smaller screens, which eliminates the issue of the background image on certain devices. 

A full list of devices that the site displays decently on includes a 10"-12" Netbook, a 13"-15" notebook, 19"-24" desktops, Kindle Fire, Asus Nexus 7, iPad and iPad Pro, Samsung Galaxy tab, Microsoft Surface Pro, iPhone 3 and up (including iPhone 6-7 plus), Galaxy S2 and up, LG G 3-5, and 480p, 720p and 1080p televisions.

Here is the desktop layout of the site, as it should look when loaded properly:

![Desktop Layout](/assets/images/screenshot.JPG)

Here is the mobile/tablet layout of the site, as it should look when loaded properly:

![Mobile/Tablet Layout](/assets/images/mobile.JPG)

## The Site in Action

The user presses any button to start the game. Music should start playing automatically (although the user has the option to pause or mute it). The user then presses letter keys corresponding to desired letter guesses. The user is allowed 10 guesses per round. If the user guesses a letter that is in the word, the number of guesses does not decrease, however, for an incorrect guess, the number of guesses decreases by 1. When the user either guesses all the letters in the word or runs out of guesses, the game ends, and a new round starts automatically. The outcome of the last round (win or loss) will be shown in the rightmost box, along with the secret word of the last round, and a picture corresponding to that secret word. 

The site is "fool proofed" to prevent users from double-guessing letters, or guessing things that are not letters. 

## Future Plans for Improvement
 * The game is not currently playable on a smartphone, since the keyboard does not automatically come up when the site opens, so users cannot type letters to make guesses. I plan to fix this issue by adding alphabet buttons to the mobile version of the site, so that users can press those to make guesses. 

 * Tweak the background image for the desktop/notebook layout so that its right side does not get cut off on certain screen sizes (I have tried messing around with this already, and it is a more complicated task than it would initially seem).

 * Fix the minor Safari bug.

