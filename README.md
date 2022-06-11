

# _Mr.Roboger's Neighborhood (Code-Challenge)_

#### By _**Derrak Richard**_

#### _Mr.Roboger's Neighborhood takes a number from the user and returns a range of numbers from 0 to the user inputted number with substitutions made within the returned range_
_Check out the working example [here](https://derrak.github.io/-Mr.-Roboger-s-Neighborhood-Code-Challenge-/)_

## Technologies Used

* JavaScript
* jQuery
* HTML
* CSS


## Description

_Mr.Roboger's Neighborhood takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:_

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
            
  * For example, all digits of the number 109 would be replaced with "Beep!"

* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
  
  * For example, all digits of the number 2099 would be replaced with "Boop!"

* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
  * For example, all digits of the number 32 would be replaced with "Won't you be my neighbor?"


## Specifications
### Describe: beepBoop()

---

Test: "It should return an array of numbers from 0 to the user's inputted number"

Code: beepBoop(5);

Expected Output: [0, 1, 2, 3, 4, 5]

---

Test: "It should return an array with any number that contained a 3 replaced with "Won't you be my neighbor?"

Code: beepBoop(5);

Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

---

Test: "It should also return an array with any number that contained a 2 replaced with "Boop!?"

Code: beepBoop(5);

Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5]

---


## Setup/Installation Requirements

* _Clone the repository to your desktop_
* _Navigate to the top level of the directory_
* _open index.html in your browser_
* _enter a numeric value into the box provided_


## Known Bugs

* _Currently does not check or inform the user if enterd value is not a number_

## License
MIT License

_Copyright (c) 2022 Derrak Richard_

