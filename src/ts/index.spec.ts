import { $, DomHelper } from '@/index';
import { IDomHelper, TDomHelperCssParams } from '@/interface';

describe('function checking "$"', () => {
  test("method checking 'create'", () => {
    const $element = $.create('div', 'user');

    expect($element).toBeInstanceOf(DomHelper);
    expect($element.$el).toBeInstanceOf(HTMLElement);
    expect($element.$el.className).toBe('user');
  });

  test('checking the function itself', () => {
    const cards = document.createElement('div');
    cards.classList.add('cards');

    const $element = $(cards);

    expect($element).toBeInstanceOf(DomHelper);
    expect($element.$el).toBeInstanceOf(HTMLElement);
    expect($element.$el.className).toBe('cards');
  });
});

describe('Checking the methods of the DomHelper class', () => {
  let $element: IDomHelper;

  beforeEach(() => {
    $element = $.create('div');
  });

  test("method checking 'addAttr'", () => {
    $element.addAttr('data-type', 'user');
    expect($element.$el.hasAttribute('data-type')).toBeDefined();
  });

  test("method checking 'getAttr'", () => {
    $element.addAttr('data-type', 'user');
    expect($element.getAttr('data-type')).toBe('user');
  });

  test("method checking 'html'", () => {
    $element.html('Hello world');
    expect($element.$el.innerHTML).toBe('Hello world');
  });

  test("method checking 'clear'", () => {
    $element.$el.innerHTML = 'some text';
    expect($element.clear().$el.innerHTML).toBe('');
  });

  test("method checking 'append'", () => {
    const element: HTMLElement = document.createElement('div');
    element.textContent = 'some content';
    $element.$el.innerHTML = '';
    $element.append(element);
    expect($element.$el.innerHTML).toBe(element.outerHTML);
  });

  test("method checking 'css'", () => {
    const styles: { [key: string]: string } = {
      fontSize: '20px',
      alignContent: 'center',
      textDecoration: 'underline',
    };

    $element.css(styles);

    (Object.keys(styles) as Array<keyof CSSStyleDeclaration>).forEach(
      (styleName) => {
        expect($element.$el.style[styleName]).toBe(styles[styleName]);
      },
    );
  });

  describe('method check "closest"', () => {
    test('should return null', () => {
      expect($element.closest('nonexistent selector')).toBeNull();
    });
  });

  test('method check "findAll"', () => {
    const firstTestElement: HTMLDivElement = document.createElement('div');
    const secondTestElement: HTMLDivElement = document.createElement('div');

    $element.$el.append(firstTestElement, secondTestElement);

    const elements: NodeListOf<HTMLDivElement> = $element.$el.querySelectorAll(
      'div',
    );

    expect(elements.length).toBe(2);

    elements.forEach((element: HTMLDivElement): void => {
      expect(element).toBeInstanceOf(HTMLDivElement);
    });
  });

  test('method check "find"', () => {
    const testElement: HTMLDivElement = document.createElement('div');

    $element.$el.append(testElement);

    const element = $element.$el.querySelector('div');

    expect(element).toBeDefined();

    expect(element).toBeInstanceOf(HTMLDivElement);
  });

  test('method check "addClass"', () => {
    const className = 'test-class-name';
    $element.addClass(className);

    expect($element.$el.className).toBe(className);
  });

  test('method check "removeClass"', () => {
    const className = 'test-class-name';
    $element.$el.classList.add(className);

    expect($element.$el.className).toBe(className);

    $element.removeClass(className);

    expect($element.$el.className).toBe('');
  });

  describe('method check "getText"', () => {
    test('get content simple element in text format', () => {
      const textContent = 'simple text';

      $element.$el.textContent = textContent;

      expect($element.getText()).toBe(textContent);
    });

    test('get the content of an input element', () => {
      const textContent = 'simple text';

      const $inputElement = $.create('input');

      ($inputElement.$el as HTMLInputElement).value = textContent;

      expect($inputElement.getText()).toBe(textContent);
    });
  });

  describe('method check "updateText"', () => {
    test('change content of simple html element', () => {
      const textContent = 'simple text';
      $element.updateText(textContent);

      expect($element.$el.textContent).toBe(textContent);
    });

    test('change the content of the input html element', () => {
      const textContent = 'simple text';
      const $inputElement = $.create('input');

      $inputElement.updateText(textContent);

      expect(($inputElement.$el as HTMLInputElement).value).toBe(textContent);
    });
  });

  test('method check "getCords"', () => {
    const cords = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    };

    expect($element.getCords()).toEqual(cords);
  });

  test('method check "dataset"', () => {
    $element.$el.setAttribute('data-type', 'user');
    $element.$el.setAttribute('data-name', 'test-name');

    expect({ ...$element.dataset() }).toEqual({
      type: 'user',
      name: 'test-name',
    });
  });

  test('method check "getStyles"', () => {
    const styles: TDomHelperCssParams = {
      color: 'red',
      alignContent: 'center',
      display: 'block',
    };

    const keys = Object.keys(styles) as Array<keyof TDomHelperCssParams>;

    keys.forEach((styleName) => {
      // eslint-disable-next-line
      // @ts-ignore
      $element.$el.style[styleName] = styles[styleName];
    });

    expect($element.getStyles(keys)).toEqual(styles);
  });
});
