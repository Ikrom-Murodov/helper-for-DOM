import {
  IDomHelper,
  IDomHelperParams,
  ICallBack,
  TDomHelperCssParams,
} from '@/interface';

/**
 * Create a new instances DomHelper.
 * @class
 * @param {IDomHelperParams}
 * @implements {IDomHelper}
 */
class DomHelper implements IDomHelper {
  /**
   * $el - HTMLElement.
   * @readonly - This field is read-only.
   */
  readonly $el: HTMLElement;

  constructor(params: IDomHelperParams) {
    this.$el = params.el;
  }

  /**
   * Add attribute to HTML element.
   * @param {string} name - Attribute name.
   * @param {string} value - Attribute value.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public addAttr(name: string, value: string): IDomHelper {
    this.$el.setAttribute(name, value);
    return this;
  }

  /**
   * Get attribute from html element.
   * @param {string} name - Attribute name.
   * @returns {string} - Returns attribute from HTML element or null
   * @public - This method is available to all instances of the DomHelper class.
   */
  getAttr(name: string): string | null {
    const attribute = this.$el.getAttribute(name);

    if (attribute) return attribute;
    return null;
  }

  /**
   * Overwrites the content of the HTML element.
   * @param {string | HTMLElement} html - content for HTMl element
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
   * @param {keyof GlobalEventHandlersEventMap } eventName.
   * @param {ICallBack} cb - handler.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public on(
    eventName: keyof GlobalEventHandlersEventMap,
    cb: ICallBack,
  ): IDomHelper {
    this.$el.addEventListener(eventName, cb);
    return this;
  }

  /**
   * Adds a string or html element to the end of the html element.
   * @param {string | DomHelper | HTMLElement} node - the node to add
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
   * @param {keyof GlobalEventHandlersEventMap} eventName - Event name.
   * @param {ICallBack} cb - handler.
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public off(
    eventName: keyof GlobalEventHandlersEventMap,
    cb: ICallBack,
  ): IDomHelper {
    this.$el.removeEventListener(eventName, cb);
    return this;
  }

  /**
   * Add styles to HTML element
   * @param {TDomHelperCssParams} params - object keys must be names css styles
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public css(params: TDomHelperCssParams): IDomHelper {
    const keys = Object.keys(params) as Array<keyof TDomHelperCssParams>;

    keys.forEach((styleName) => {
      if (styleName !== 'length' && styleName !== 'parentRule') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.$el.style[styleName] = `${params[styleName]}`;
      }
    });

    return this;
  }

  /**
   * Finds the closest parent HTML element and places it in the instance
   * DomHelper class. Then it returns the given instance. if element is not
   * found it will return null
   * @param {string} selector - Css selector
   * @returns {IDomHelper | null} Returns an instance of the DomHelper class or null
   * @public - This method is available to all instances of the DomHelper class.
   */
  public closest(selector: string): IDomHelper | null {
    const element: HTMLElement | null = document.querySelector(selector);
    if (!element) return null;

    return new DomHelper({
      el: element,
    });
  }

  /**
   * Finds all html elements that have the given selector. And for each of them,
   * an instance of the DomHelper class is created,
   * and adds each instance to an array and then returns that array.
   * @param {string} selector - Css selector
   * @returns {IDomHelper[] | null} - Returns instances of the DomHelper class as an array or null.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public findAll(selector: string): IDomHelper[] | null {
    const result = document.querySelectorAll(selector);
    if (result) {
      const $elements: IDomHelper[] = [];

      result.forEach((element) => {
        if (element instanceof HTMLElement) {
          $elements.push(new DomHelper({ el: element }));
        }
      });

      if ($elements.length) return $elements;
    }

    return null;
  }

  /**
   * Finds the html element with the given selector.
   * And creates an instance of the DomHelper class for
   * it and then returns that instance.
   * @param {string} selector - Css selector
   * @returns {IDomHelper | null} - Returns instances of the DomHelper class or null.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public find(selector: string): IDomHelper | null {
    const element = document.querySelector(selector);

    if (element instanceof HTMLElement) {
      return new DomHelper({ el: element });
    }

    return null;
  }

  /**
   * Add class to html element.
   * @param {string} className - Class name for html element
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public addClass(className: string): IDomHelper {
    this.$el.classList.add(className);
    return this;
  }

  /**
   * Remove class from html element
   * @param {string} className -  Class name for html element
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public removeClass(className: string): IDomHelper {
    this.$el.classList.remove(className);
    return this;
  }

  /**
   * Add focus to html element
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public focus(): IDomHelper {
    this.$el.focus();
    return this;
  }

  /**
   * Returns the content of the html element as a string.
   * @returns {string} - string
   * @public - This method is available to all instances of the DomHelper class.
   */
  public getText(): string {
    if (this.$el instanceof HTMLInputElement) {
      return this.$el.value;
    }

    return this.$el.textContent || '';
  }

  /**
   * Add text for HTML element
   * @param {string} text - text for html element
   * @returns {IDomHelper} - Returns an instance of the DomHelper class.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public updateText(text: string): IDomHelper {
    if (this.$el instanceof HTMLInputElement) {
      this.$el.value = text;
      return this;
    }

    this.$el.textContent = text;

    return this;
  }

  /**
   * Get the coordinates of the html element.
   * @returns {DOMRect} - Coordinates of the html element.
   * @public - This method is available to all instances of the DomHelper class.
   */
  public getCords(): DOMRect {
    return this.$el.getBoundingClientRect();
  }

  /**
   * Get all data 'data-*' attributes
   * @returns {DOMStringMap} -> returns all 'data-*' attributes
   * @public - This method is available to all instances of the DomHelper class.
   */
  public dataset(): DOMStringMap {
    return this.$el.dataset;
  }

  /**
   * Finds styles by parameters and returns them as an object
   * @param {Array<CSSStyleDeclaration>}styleNames - array elements must be css style names.
   * @returns {Object} -> Returns styles of elements as an object
   * @public - This method is available to all instances of the DomHelper class.
   */
  public getStyles(
    styleNames: Array<keyof TDomHelperCssParams>,
  ): { [key: string]: unknown } {
    const styles: { [key: string]: unknown } = {};

    styleNames.forEach((name) => {
      styles[name] = this.$el.style[name];
    });

    return styles;
  }
}

/**
 * Finds an HTML element and puts it into an instance
 * the DomHelper class. Then it returns the given instance.
 * @param {HTMLElement | string} selector - css selector
 * @returns {IDomHelper} - Returns an instance of the DomHelper class.
 */
function $(selector: HTMLElement | string): IDomHelper {
  let el: HTMLElement;

  if (typeof selector === 'string') {
    const element = document.querySelector(selector) as null | HTMLElement;

    if (!element) throw new Error(`no such selector: '${selector}' exists`);
    el = element;
  } else {
    el = selector;
  }

  return new DomHelper({
    el,
  });
}

/**
 * Creates an HTML element and places it in an instance
 * of the DomHelper class. Then it returns the given instance.
 * @param {string} tagName - Html tag name
 * @param {string | undefined} className - class name for HTML element
 * @returns {IDomHelper} - Returns an instance of the DomHelper class.
 */
$.create = (tagName: string, className?: string): IDomHelper => {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  return $(el);
};

export { $, DomHelper };
