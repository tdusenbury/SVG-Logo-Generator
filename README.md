# .svg Logo Generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Technology Used 

| [![My Skills](https://skillicons.dev/icons?i=js,nodejs,vscode,svg,github,jest&theme=light)](https://skillicons.dev) 

## Table of Contents

  - [**Description**](#description)
  - [**Installation**](#installation)
  - [**Usage**](#usage)
  - [**Contribution**](#contributing)
  - [**Testing**](#tests)
  - [**Author Info**](#author-info)
  - [**License**](#license)


## Description 

Welcome to my .svg Logo Generator! By entering 'node index.js' into the terminal command-line, you can create a basic logo that saves as a .svg file.

This generator allows a developer to create a basic logo in the shape of a circle, square, or triangle. The user can choose up to three letters for their logo as well as font and background colors. If you know the hexadecimal color code, that can be entered also. The logo is set to default as a 300 x 200 pixel image, but this can be adjusted as required.

A developer could use this basic logo as a placeholder for project proposals or use it as a base and add additional shapes and allow more lettering. 

Additionally, testing using jest is included showing the application does what it claims to do! 

If you have found this generator outside of github and wish to view the original, [visit my Repository link here.](https://github.com/tdusenbury/SVG-Logo-Generator)


## Installation

The .svg Logo Generator requires npm Inquirer to render the logo. If you would like to run the tests, Jest is also needed.

Both can be added by running `init i` in the terminal. This will install the correct version of the dependencies which are listed in the package.json file.


```html
<div class="header">
        <h1>Hori<span class="seo">seo</span>n</h1>
        <div>
            <ul>
                <li>
                    <a href="#search-engine-optimization">Search Engine Optimization</a>
                </li>
                <li>
                    <a href="#online-reputation-management">Online Reputation Management</a>
                </li>
                <li>
                    <a href="#social-media-marketing">Social Media Marketing</a>
                </li>
            </ul>
        </div>
    </div>
```

Converting the above non-semantic div with the class of 'header' to an appropriate [<header> semantic element](https://www.w3schools.com/html/html5_semantic_elements.asp). 

```html
<header>
        <h1>Hori<span class="seo">seo</span>n</h1>
        <nav>
            <ul>
                <li>
                    <a href="#search-engine-optimization">Search Engine Optimization</a>
                </li>
                <li>
                    <a href="#online-reputation-management">Online Reputation Management</a>
                </li>
                <li>
                    <a href="#social-media-marketing">Social Media Marketing</a>
                </li>
            </ul>
        </nav>
    </header>

```

This change require some additional modification to the CSS selector: 

```css
.header {
    padding: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #2a607c;
    color: #ffffff;
}
```

No longer targeting the element on the page with the class of 'header' but instead the css selector targeting the 'header' element 

```css
header {
    padding: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #2a607c;
    color: #ffffff;
}

```

## Usage 

Provide instructions and examples for use. Include screenshots as needed. 

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

```md
![alt text](assets/images/screenshot.png)
```


## Learning Points 

I chose to define a class called 'Shapes' using the class constructor method. This method takes in four arguments that refer to the initials chosen, the color of the initials, the type of shape, and the color of the shape. Using these arguments I used `this` to create instance variables with the same name.

The class then has a `render` method that takes in the arguments to create an instance of the 'Shapes' class 



## Author Info
My name is Tamara "T" Dusenbury.
If you have any questions about me or this project, please contact me:
  
- [**Github**](https://github.com/tdusenbury)

- [**LinkedIn**](https://linkedin.com/in/tamara-dusenbury-02ab8591)

- [**Email**](mailto:tamara.dusenbury@gmail.com)


## Credits

Shout outs to my whole cohort for great classes, but especially Laurie, Austin, Cassie, Afi, Liubov, Kakazi, Bahareh, Victoria, David, my tutor Katie, the Cohort TA's, and Jerome.

## Contributing

If you would like to contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.

## License

This projects holds an MIT License.