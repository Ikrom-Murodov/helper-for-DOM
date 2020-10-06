/* eslint-disable import/prefer-default-export */
import { IDomHelper, IDomHelperParams, ICallBack } from '@/interface';

/**
 * Create a new instances DomHelper.
 * @class
 * @param {IDomHelperParams}
 * @implements {IDomHelper}
 */
class DomHelper implements IDomHelper {
  /**
   * $el - HTMLElement.
   * @private - This field is private.
   */
  private $el: HTMLElement;

  constructor(params: IDomHelperParams) {
    this.$el = params.selector;
  }

  /**
   * Add attribute to HTML element.
   * @param {string} name - Attribute name.
   * @param {string} value - Attribute value.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public addAttribute(name: string, value: string): IDomHelper {
    this.$el.setAttribute(name, value);
    return this;
  }

  /**
   * Clears the content of an HTML element.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public clear(): IDomHelper {
    this.html('');
    return this;
  }

  /**
   * Adds an event handler to an element.
   * @param {string} - Event name.
   * @param {ICallBack} - handler.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public on(eventName: string, cb: ICallBack): IDomHelper {
    this.$el.addEventListener(eventName, cb);
    return this;
  }

  /**
   * Overwrites the content of the HTML element.
   * @param {string | HTMLElement}
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public html(html: string | HTMLElement): IDomHelper {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }

    this.$el.innerHTML = html.outerHTML;
    return this;
  }

  /**
   * Adds a string or html element to the end of the html element.
   * @param {string | DomHelper | HTMLElement}
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public append(node: string | DomHelper | HTMLElement): IDomHelper {
    if (node instanceof DomHelper) {
      this.$el.append(node.$el);
      return this;
    }

    this.$el.append(node);

    return this;
  }

  /**
   * Remove event handler from element.
   * @param {string} - Event name.
   * @param {ICallBack} - handler.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public off(eventName: string, cb: ICallBack): IDomHelper {
    this.$el.removeEventListener(eventName, cb);
    return this;
  }
}

/**
 * Finds an HTML element and puts it into an instance
 * the DomHelper class. Then it returns the given instance.
 * @param {HTMLElement | string}
 * @returns {IDomHelper} - Returns an instance of the DomHelper class.
 */
export function $(selector: HTMLElement | string): IDomHelper {
  let el: HTMLElement;

  if (typeof selector === 'string') {
    const element = document.querySelector(selector) as null | HTMLElement;

    if (!element) throw new Error(`no such selector: '${selector}' exists`);
    el = element;
  } else {
    el = selector;
  }

  return new DomHelper({
    selector: el,
  });
}

/**
 * Creates an HTML element and places it in an instance
 * of the DomHelper class. Then it returns the given instance.
 * @param {string} - Html tag name
 * @param {string | undefined} - class name for HTML element
 * @returns {IDomHelper} - Returns an instance of the DomHelper class.
 */
$.create = (tagName: string, className?: string): IDomHelper => {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  return $(el);
};
