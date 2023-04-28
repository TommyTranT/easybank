https://www.youtube.com/watch?v=aoQ6S1a32j8

4:47:16

* If you need to add flex to everything, just make it a class

* Begin by creating the mobile design first

* To calculate rem size, take px number and divide by 16.

* For media queries, use 'em' because they are more consistent between browsers

* Finding out em size for media queries.
for screen size 1024 pixels / 16 = 64em
 - med = 640 pixels = 40em
 - lrg = 1024 pixels = 64em
 - xlrg = 1400 pixels = 87.5em

* Dont have your breakpoints up and down the same number. 

* use class for css class and use id for javascript scripts

* animations.scss is where all the animations happen

* visibility is useful for making things disappear and animate

* Hero Section

* Use absolute position when it may appear on top of something else. 

* when a child is position absolute, make sure the parent is position relative.

* Browsers will default h1 font to bold but wont show it in the dev tools

* for header fronts you want to add line-height to 1 and for other longer text you want it to be bigger like 1.3 depending on the design

* before and after. what ever image is in after will appear ontop of before

* When to decide if you want to use img tag or background for the image?
  - If the image will have a different crop for mobile and desktop than use background image

* Grid columns
To create columns in grid we have to use the style

display: grid;
grid-template-columns: 1fr // This creates 1 column
grid-template-columns: repeat(2, 1fr) // This creates 2 column
grid-template-columns: repeat( 4, 1fr) // This creates 4 column with the same width spaced evenly

* Rem is more accessible to peoples browser where as pixels just remain the same. (change browser font size, zoom in, etc)

