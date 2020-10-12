export interface ICallBack {
  (event: Event): void;
}

/**
 * the object keys name must be the same as in the
 * CSSStyleDeclaration and the value must be a string
 * @type {CSSStyleDeclaration=}
 */
export type TDomHelperCssParams = {
  [K in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[K];
};

/**
 * Interface for class DomHelper.
 * @interface
 */
export interface IDomHelper {
  /**
   *  @readonly - This field is read-only.
   */
  readonly $el: HTMLElement;

  /**
   * Add attribute to HTML element.
   * @param {string} name - Attribute name.
   * @param {string} value - Attribute value.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  addAttr(name: string, value: string): IDomHelper;

  /**
   * Get attribute from html element.
   * @param {string} name - Attribute name.
   * @returns {string} - Returns attribute from HTML element or null
   * @public - This method is available to all instances of the DomHelper class.
   */
  getAttr(name: string): string | null;

  /**
   * Overwrites the content of the HTML element.
   * @param {string | HTMLElement} html - content for HTMl element
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  html(html: string | HTMLElement): IDomHelper;

  /**
   * Clears the content of an HTML element.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  clear(): IDomHelper;

  /**
   * Adds a string or html element to the end of the html element.
   * @param {string | DomHelper | HTMLElement} node - the node to add.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  append(node: string | IDomHelper | HTMLElement): IDomHelper;

  /**
   * Adds an event handler to an element.
   * @param {keyof GlobalEventHandlersEventMap } eventName.
   * @param {ICallBack} cb - handler.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  on(eventName: keyof GlobalEventHandlersEventMap, cb: ICallBack): IDomHelper;

  /**
   * Remove event handler from element.
   * @param {keyof GlobalEventHandlersEventMap} eventName - Event name.
   * @param {ICallBack} cb - handler.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  off(eventName: keyof GlobalEventHandlersEventMap, cb: ICallBack): IDomHelper;

  /**
   * Add styles to HTML element
   * @param {TDomHelperCssParams} params - object keys must be names css styles
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  css(params: TDomHelperCssParams): IDomHelper;

  /**
   * Finds the closest parent HTML element and places it in the instance
   * DomHelper class. Then it returns the given instance. if element is not
   * found it will return null
   * @param {string} selector - Css selector
   * @returns {IDomHelper | null} Returns an instance of the DomHelper class or null
   * @public - This method is available to all instances of the DomHelper class.
   */
  closest(selector: string): IDomHelper | null;

  /**
   * Finds all html elements that have the given selector. And for each of them,
   * an instance of the DomHelper class is created,
   * and adds each instance to an array and then returns that array.
   * @param {string} selector - Css selector
   * @returns {IDomHelper[] | null} - Returns instances of the DomHelper class as an array or null.
   * @public - This method is available to all instances of the DomHelper class.
   */
  findAll(selector: string): IDomHelper[] | null;

  /**
   * Finds the html element with the given selector.
   * And creates an instance of the DomHelper class for
   * it and then returns that instance.
   * @param {string} selector - Css selector
   * @returns {IDomHelper | null} - Returns instances of the DomHelper class or null.
   * @public - This method is available to all instances of the DomHelper class.
   */
  find(selector: string): IDomHelper | null;

  /**
   * Add class to html element.
   * @param {string} className - Class name for html element
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  addClass(className: string): IDomHelper;

  /**
   * Remove class from html element
   * @param {string} className -  Class name for html element
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  removeClass(className: string): IDomHelper;

  /**
   * Add focus to html element
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  focus(): IDomHelper;

  /**
   * Returns the content of the html element as a string.
   * @returns {string} - string
   * @public - This method is available to all instances of the DomHelper class.
   */
  getText(): string;

  /**
   * Add text for HTML element
   * @param {string} text - text for html element
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  updateText(text: string): IDomHelper;

  /**
   * Get the coordinates of the html element.
   * @returns {DOMRect} - Coordinates of the html element.
   * @public - This method is available to all instances of the DomHelper class.
   */
  getCords(): DOMRect;

  /**
   * Get all data 'data-*' attributes
   * @returns {DOMStringMap} -> returns all 'data-*' attributes
   * @public - This method is available to all instances of the DomHelper class.
   */
  dataset(): DOMStringMap;

  /**
   * Finds styles by parameters and returns them as an object
   * @param {Array<CSSStyleDeclaration>}styleNames - array elements must be css style names.
   * @returns {Object} -> Returns styles of elements as an object
   * @public - This method is available to all instances of the DomHelper class.
   */
  getStyles(
    styleNames: Array<keyof CSSStyleDeclaration>,
  ): { [key: string]: unknown };
}

/**
 * Interface for DomHelper class parameters.
 * @interface
 * @param {HTMLElement} - the el must be HTMLElement
 */
export interface IDomHelperParams {
  el: HTMLElement;
}
