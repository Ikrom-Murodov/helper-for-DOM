# This library makes working with the DOM easy.


##### This library uses webpack. I added my webpack config to the project. You can learn more [here](https://github.com/Ikrom-Murodov/Webpack-4).

This library only provides one function named $, this function has a method named create, this method creates an html element and wraps it in an object, which has many helper methods to help you work declaratively with the html element.
If you already have an html element and want to wrap that element in a DomHelper object, you can pass the html element as a parameter to the $ function.
If you want to get an html element from the DOM and wrap that html element in a DomHelper object, you can pass
html element selector as a parameter to the $ function.

### Installation.
```
npm install helper-for-dom
```

### Create a new html element and wrap it in a DomHelper object.
```ts
import {$, IDomHelper} from "helper-for-dom";

const $element:IDomHelper = $.create('div', 'test-class');
```
The create method of the $ function created an html element and wrapped it in a DomHelper object.



### Wrapping an existing html element in a DomHelper object.
```ts
import {$, IDomHelper} from "helper-for-dom";

const card: HTMLDivElement = document.createElement('div');

const $element: IDomHelper = $(card)
```
Since you already have an html element, we do not call the create method on the $ function, but instead we directly call the $ function and pass the html element as a parameter, and on output, the function will return a DomHelper object.


### Get html element from DOM and wrap it in DomHelper object
```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $('selector')
```
Since you want to get the html element from the DOM, we will not call the create method of the $ function, but instead we directly call the $ function and pass the selector as a parameter, with which it will search for your HTML element in the DOM, and in the output the function will return a DomHelper object.

# DOM Helpers (API)

#### addAttr - Adds an attribute to the html element.
   * @param { string } name - Attribute name.
   * @param {string} value - Attribute value.
   * @returns { IDomHelper } - Returns an instance of the DomHelper class.
```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.addAttr('name', 'value')
```


#### getAttr - Get attribute from html element.
   * @param { string } name - Attribute name.
   * @returns { string } - Returns attribute from HTML element or null

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.getAttr('attribute name')
```


#### html - Overwrites the content of the HTML element.
   * @param { string | HTMLElement } html - content for HTMl element
   * @returns { IDomHelper } - Returns an instance of the DomHelper class.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');
const simpleElement: HTMLElement = document.createElement('div')

$element.html('textContent') || $element.html(simpleElement)
```


#### clear - Clears the content of an HTML element.
   * @returns { IDomHelper } - Returns an instance of the DomHelper class.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.clear();
```

#### append - Adds a string or html element to the end of the html element.
   * @param { string | DomHelper | HTMLElement } node - the node to add.
   * @returns { IDomHelper } - Returns an instance of the DomHelper class.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');
const $cards: IDomHelper = $.create('h1', 'class-name');
const htmlElement: HTMLElement = document.createElement('div');

$element.append('textContent') || $element.append($cards) || $element.append(htmlElement);
```

#### on - Adds an event handler to an element.
   * @param { keyof GlobalEventHandlersEventMap } eventName.
   * @param { ICallBack } cb - handler.
   * @returns { IDomHelper } - Returns an instance of the DomHelper class.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');
const handler = (event: Event) => {}

$element.on('click', handler)
```


#### of -  Remove event handler from element.

   * @param { keyof GlobalEventHandlersEventMap } eventName - Event name.
   * @param { ICallBack } cb - handler.
   * @returns { IDomHelper } - Returns an instance of the DomHelper class.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');
const handler = (event: Event) => {}

$element.of('click', handler)
```


#### css - Add styles to HTML element.

   * @param {TDomHelperCssParams} params - object keys must be names css styles
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.


```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.css({
    color: 'red',
    fontSize: '20px',
});
```

#### closest - Finds the closest parent HTML element and places it in the instance DomHelper class. Then it returns the given instance. if element is not found it will return null

   * @param { string } selector - Css selector
   * @returns { IDomHelper | null } Returns an instance of the DomHelper class or null

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.closest('selector');
```

#### findAll - Finds all html elements that have the given selector. And for each of them, an instance of the DomHelper class is created, and adds each instance to an array and then returns that array.

   * @param { string } selector - Css selector
   * @returns { IDomHelper[] | null } - Returns instances of the DomHelper class as an array or null.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.findAll('selector');
```



#### find - Finds the html element with the given selector. And creates an instance of the DomHelper class for it and then returns that instance.

   * @param {string} selector - Css selector
   * @returns {IDomHelper | null} - Returns instances of the DomHelper class or null.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.find('selector');
```




#### addClass - Add class to html element.

   * @param { string } className - Class name for html element
   * @returns { IDomHelper } - Returns an instance of the DomHelper class.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.addClass('className');
```

#### removeClass -  Remove class from html element
  
   * @param { string } className -  Class name for html element
   * @returns { IDomHelper } - Returns an instance of the DomHelper class.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.removeClass('className');
```

#### focus - Add focus to html element.

   * @returns { IDomHelper } - Returns an instance of the DomHelper class.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.focus();
```



#### getText -  Returns the content of the html element as a string.

   * @returns { string } - string
 
```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.getText();
```



#### updateText - Add text for HTML element.

   * @param { string } text - text for html element
   * @returns { IDomHelper } - Returns an instance of the DomHelper class.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.updateText('new text');
```



#### getCords - Get the coordinates of the html element.

   * @returns { DOMRect } - Coordinates of the html element.

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.getCords();
```

#### dataset - Get all data 'data-*' attributes.

   * @returns { DOMStringMap } -> returns all 'data-*' attributes

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.dataset();
```


#### getStyles - Finds styles by parameters and returns them as an object.

   * @param { Array<CSSStyleDeclaration> }styleNames - array elements must be css style names.
   * @returns { Object } -> Returns styles of elements as an object

```ts
import {$, IDomHelper} from "helper-for-dom";

const $element: IDomHelper = $.create('div', 'class-name');

$element.getStyles(['color', 'textContent', 'fontSize']);
```
