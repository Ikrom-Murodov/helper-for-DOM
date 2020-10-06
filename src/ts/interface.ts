export interface ICallBack {
  (event: Event): void;
}

/**
 * Interface for class DomHelper.
 * @interface
 */
export interface IDomHelper {
  /**
   * Add attribute to HTML element.
   * @param {string} name - Attribute name.
   * @param {string} value - Attribute value.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  addAttribute(name: string, value: string): IDomHelper;

  /**
   * Overwrites the content of the HTML element.
   * @param {string | HTMLElement}
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
   * @param {string | DomHelper | HTMLElement}
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  append(node: string | IDomHelper | HTMLElement): IDomHelper;

  /**
   * Adds an event handler to an element.
   * @param {string} - Event name.
   * @param {ICallBack} - handler.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  on(eventName: string, cb: ICallBack): IDomHelper;

  /**
   * Remove event handler from element.
   * @param {string} - Event name.
   * @param {ICallBack} - handler.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  off(eventName: string, cb: ICallBack): IDomHelper;
}

/**
 * Interface for DomHelper class parameters.
 * @interface
 * @param {HTMLElement} - the selector must be HTMLElement
 */
export interface IDomHelperParams {
  selector: HTMLElement;
}
