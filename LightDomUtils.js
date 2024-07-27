/* 軽量DOMユーティリティクラス */

class LightDomUtils {
    /**
     * IDから単一要素を取得
     * @param {string} id - 取得する要素のID
     * @returns {HTMLElement|null} 要素、または存在しない場合はnull
     */
    static getById(id) {
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`[DomUtils] ID "${id}" に一致する要素が見つかりません。`);
      }
      return element;
    }
  
    /**
     * クラス名から要素リストを取得
     * @param {string} className - 取得する要素のクラス名
     * @returns {HTMLElement[]} 要素の配列
     */
    static getByClass(className) {
      return Array.from(document.getElementsByClassName(className));
    }
  
    /**
     * タグ名から要素リストを取得
     * @param {string} tagName - 取得する要素のタグ名
     * @returns {HTMLElement[]} 要素の配列
     */
    static getByTag(tagName) {
      return Array.from(document.getElementsByTagName(tagName));
    }
  
    /**
     * CSSセレクタに一致する最初の要素を取得
     * @param {string} selector - CSSセレクタ
     * @param {HTMLElement|Document} [context = document] - 検索範囲とする要素（デフォルトはdocument）
     * @returns {HTMLElement|null} 要素、または存在しない場合はnull
     */
    static query(selector, context = document) {
      const element = context.querySelector(selector);
      if (!element) {
        console.warn(`[DomUtils] セレクタ "${selector}" に一致する要素が見つかりません。`);
      }
      return element;
    }
  
    /**
     * CSSセレクタに一致する全ての要素を取得
     * @param {string} selector - CSSセレクタ
     * @param {HTMLElement|Document} [context = document] - 検索範囲とする要素（デフォルトはdocument）
     * @returns {HTMLElement[]} 要素の配列
     */
    static queryAll(selector, context = document) {
      return Array.from(context.querySelectorAll(selector));
    }
  
    /**
     * 指定要素の子要素リストを取得
     * @param {HTMLElement} element - 親要素
     * @returns {HTMLElement[]} 子要素の配列
     */
    static getChildren(element) {
      return Array.from(element.children);
    }
  
    /**
     * 指定したタグ名とオプションで要素を作成します。
     * @param {string} tagName - 作成する要素のタグ名
     * @param {Object} [options] - 要素のオプション
     * @param {string} [options.className] - 要素に設定するクラス名
     * @param {string} [options.textContent] - 要素に設定するテキスト内容
     * @param {Object} [options.attributes] - 要素に設定する属性
     * @returns {HTMLElement} 作成された要素
     */
    static createElement(tagName, options = {}) {
      const element = document.createElement(tagName);
  
      if (options.className) {
        element.className = options.className; 
      }
  
      if (options.textContent) {
        element.textContent = options.textContent;
      }
  
      if (options.attributes) {
        for (const [key, value] of Object.entries(options.attributes)) {
          element.setAttribute(key, value);
        }
      }
  
      return element;
    }
  
    /**
     * 指定した親要素の子要素として要素を追加
     * @param {HTMLElement} parent - 親要素
     * @param {HTMLElement} child - 追加する子要素
     * @returns {HTMLElement} 追加された子要素
     */
    static appendChild(parent, child) {
      return parent.appendChild(child);
    }

    /**
     * 指定した親要素の子要素として、指定要素の前に新要素を挿入
     * @param {HTMLElement} parent - 親要素
     * @param {HTMLElement} newChild - 挿入する新要素
     * @param {HTMLElement} referenceChild - 参照となる子要素
     * @returns {HTMLElement} 挿入された要素
     */
    static insertChild(parent, newChild, referenceChild) {
        return parent.insertBefore(newChild, referenceChild);
    }

    /**
     * 指定した要素を、新しい要素に置換
     * @param {HTMLElement} oldChild - 置換元要素
     * @param {HTMLElement} newChild - 置換する新要素
     * @returns {HTMLElement} 置換された要素
     */
    static replaceChild(oldChild, newChild) {
        return oldChild.parentNode.replaceChild(newChild, oldChild);
    }
  
    /**
     * 指定した親要素から、指定した子要素を削除
     * @param {HTMLElement} parent - 親要素
     * @param {HTMLElement} child - 削除する子要素
     */
    static removeChild(parent, child) {
      parent.removeChild(child);
    }
  
    /**
     * 指定した要素のテキストを設定または取得
     * @param {HTMLElement} element - 対象の要素
     * @param {string} [text] - 設定するテキスト内容
     * @returns {string|undefined}  設定した場合はundefined、取得した場合はテキスト内容
     */
    static textContent(element, text) {
      if (text === undefined) {
        return element.textContent;
      } else {
        element.textContent = text;
      }
    }
  
    /**
     * 指定した要素のテキストを設定または取得
     * @param {HTMLElement} element - 対象の要素
     * @param {string} [text] - 設定するテキスト内容
     * @returns {string|undefined}  設定した場合はundefined、取得した場合はテキスト内容
     */
    static innerText(element, text) {
      if (text === undefined) {
        return element.innerText;
      } else {
        element.innerText = text;
      }
    }

    /**
     * 指定した要素にクラスを追加
     * @param {HTMLElement} element - 対象の要素
     * @param {string} className - 追加するクラス名
     */
    static addClass(element, className) {
        element.classList.add(className);
    }

    /**
     * 指定した要素からクラスを削除
     * @param {HTMLElement} element - 対象の要素
     * @param {string} className - 削除するクラス名
     */
    static removeClass(element, className) {
        element.classList.remove(className);
    }

    /**
     * 指定した要素にインラインスタイルを設定
     * @param {HTMLElement} element - 対象の要素
     * @param {string} property - スタイルプロパティ
     * @param {string} value - スタイル値
     */
    static setStyle(element, property, value) {
        element.style[property] = value;
    }

    /**
     * 指定した要素のインラインスタイルを取得
     * @param {HTMLElement} element - 対象の要素
     * @param {string} property - 取得するスタイルプロパティ
     * @returns {string} スタイル値
     */
    static getStyle(element, property) {
        return element.style[property];
    }

    /**
     * 指定した要素を表示
     * @param {HTMLElement} element - 対象の要素
     */
    static show(element) {
        element.style.display = 'block';
    }

    /**
     * 指定した要素を非表示
     * @param {HTMLElement} element - 対象の要素
     */
    static hide(element) {
        element.style.display = 'none';
    }

    /**
     * 指定した要素の幅、高さ、位置を取得
     * @param {HTMLElement} element - 対象の要素
     * @returns {{ width: number, height: number, top: number, left: number }} 幅、高さ、位置
     */
    static getRect(element) {
        const rect = element.getBoundingClientRect();
        return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        };
    }

    /**
     * 指定した要素にイベントリスナーを追加
     * @param {HTMLElement} element - 対象の要素
     * @param {string} eventType - イベントタイプ
     * @param {EventListenerOrEventListenerObject} listener - イベントリスナー
     * @param {boolean|AddEventListenerOptions} [options] - イベントリスナーのオプション
     */
    static addEvent(element, eventType, listener, options) {
        element.addEventListener(eventType, listener, options);
    }

    /**
     * 指定した要素からイベントリスナーを削除
     * @param {HTMLElement} element - 対象の要素
     * @param {string} eventType - イベントタイプ
     * @param {EventListenerOrEventListenerObject} listener - 削除するイベントリスナー
     * @param {boolean|AddEventListenerOptions} [options] - イベントリスナーのオプション
     */
    static removeEvent(element, eventType, listener, options) {
        element.removeEventListener(eventType, listener, options);
    }
  }