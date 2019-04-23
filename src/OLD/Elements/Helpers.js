import Draw from '../Draw';

/**
 * @class Helpers
 * @classdesc all the helpers we need to draw the elements
 */
export default class Helpers {

  /**
   * sets the box size of an DrawJS element
   * @memberOf Helpers
   * @method setBoxSize
   * @static
   * @param {Object|Container|Element} element can be an Object, an DrawJS instance, a CreateJS Core Elements instance
   * @param {Number} width the width
   * @param {Number} height the height
   * @param {Boolean} css specity if you want to override also the css box size properties
   * @return {Object|Container|Element}
   */
  static setBoxSize(element, width = 0, height = 0, css = false) {
    if(!!css) {
      element.style.width = width + 'px';
      element.style.height = height + 'px';
    }

    return element.inherit({
      width,
      height,
    });
  }

  /**
   * sets the scale factor of an DrawJS element
   * @memberOf Helpers
   * @method scale
   * @static
   * @param {Object|Container|Element} element can be an Object, an DrawJS instance, a CreateJS Core Elements instance
   * @param {Number|Object} scale the scale factor to be used for both scaleX and scaleY
   * @return {Object|Container|Element}
   */
  static scale(element, scale) {
    return element.inherit({
      scaleX: scale,
      scaleY: scale,
    });
  }

  /**
   * aligns the reg point or an element
   * @memberOf Helpers
   * @method alignRegPoint
   * @static
   * @param {Object|Container|Element} element can be an Object, an DrawJS instance, a CreateJS Core Elements instance
   * @param {String} mode can be a couple of word for horizontal or vertical align, in any order<br>
   *   accepts the following modes<br>
   *   <ul>
   *     <li><b>Horizontal Modes</b>: left, center, right</li>
   *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
   *   </ul>
   * @return {Object|Container|Element}
   */
  static alignRegPoint(element, mode = 'left top') {
    const bounds = element.getBounds();
    const modes = mode.toArray(' ');
    const horizontalModes = ['left', 'center', 'right'];
    const verticalModes = ['top', 'middle', 'bottom'];

    return element.inherit({
      regX: (horizontalModes.contains(modes)) ? bounds.width * 0.5 : 0,
      regY: (verticalModes.contains(modes)) ? bounds.height * 0.5 : 0,
    });
  }

  /**
   * Aligns an element (horizontally, vertically or both) based on it's parent bounds.
   * @memberOf Helpers
   * @method align
   * @static
   * @param {Object|Container|Element} element can be an Object, an DrawJS instance, a CreateJS Core Elements instance
   * @param {null|Object|Container|Element} parent can be an Object, an DrawJS instance, a CreateJS Core Elements instance<br>
   *   if null, it takes automatically the parent property of element parameter
   * @param {String} mode can be a couple of word for horizontal or vertical align, in any order<br>
   *   accepts the following modes<br>
   *   <ul>
   *     <li><b>Horizontal Modes</b>: left, center, right</li>
   *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
   *   </ul>
   * @param {Boolean} regPoint enabled alignment also on registration point
   * @param {null|String} regPointMode can be a couple of word for horizontal or vertical align, in any order<br>
   *   accepts the following modes<br>
   *   <ul>
   *     <li><b>Horizontal Modes</b>: left, center, right</li>
   *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
   *   </ul><br>
   *   if null it considers mode parameter as fallback
   * @return {Object|Container|Element}
   */
  static align(element, parent = null, mode = 'left top', regPoint = false, regPointMode = null) {
    if(!parent) {
      parent = element.parent;
    }

    const parentBounds = parent.getBounds();
    const elementBounds = element.getBounds();
    const modes = mode.toArray(' ');
    const horizontalModes = ['left', 'center', 'right'];
    const verticalModes = ['top', 'middle', 'bottom'];

    if(!!regPoint) {
      this.alignRegPoint(element, regPointMode || mode);
    }

    const position = {
      x: 0,
      y: 0,
    };

    if(horizontalModes.contains(modes)) {
      if(modes.contains('center')) {
        position.inherit({
          x: parentBounds.width * 0.5 + (!!regPoint && !(element instanceof Draw.Bitmap || element instanceof Draw.Sprite) ? elementBounds.width * 0.5 : 0),
        });
      } else if(modes.contains('left')) {
        position.inherit({
          x: (!!regPoint ? elementBounds.width * 0.5 : 0),
        });
      } else if(modes.contains('right')) {
        position.inherit({
          x: parentBounds.width - elementBounds.width + (!!regPoint ? elementBounds.width * 0.5 : 0),
        });
      }
    }

    if(verticalModes.contains(modes)) {
      if(modes.contains('middle')) {
        position.inherit({
          y: parentBounds.height * 0.5 + (!!regPoint && !(element instanceof Draw.Bitmap || element instanceof Draw.Sprite) ? elementBounds.width * 0.5 : 0),
        });
      } else if(modes.contains('top')) {
        position.inherit({
          y: (!!regPoint ? elementBounds.height * 0.5 : 0),
        });
      } else if(modes.contains('bottom')) {
        position.inherit({
          y: parentBounds.height - elementBounds.height,
        });
      }
    }

    return element.inherit(position);
  }

  /**
   * creates an DrawJS Container instance based on bounds parameters
   * @memberOf Helpers
   * @method createContainer
   * @statuc
   * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of DrawJS Container class<br>
   *   so it has to be an array with this sequence<br>
   *   <ul>
   *     <li>{Number} x</li>
   *     <li>{Number} y</li>
   *     <li>{Number} width</li>
   *     <li>{Number} height</li>
   *   </ul>
   * @return {Container}
   */
  static createContainer(...bounds) {
    const container = (new Draw.Container()).inherit({
      x: bounds[0],
      y: bounds[1],
    });

    container.setBounds(...bounds);

    return container;
  }

  /**
   * creates an DrawJS Graphics instance
   * @memberOf Helpers
   * @method createGraphics
   * @static
   * @param {Object} options the options can contain
   * @param {String|Object} options.fill color for filling graphics<br>
   * @param {Array} options.fill.colors colors to create a linear gradient fill
   * @param {Array} options.fill.ratios color ratios to create a linear gradient fill
   * @param {Array} options.fill.points start & stop points to create a linear gradient fill
   * @param {String|Object} options.stroke stroke options, if string it creates a stroke with size 1
   * @param {Number} options.stroke.size the size
   * @param {String} options.stroke.color the color
   * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of DrawJS Container class<br>
   *   so it has to be an array with this sequence<br>
   *   <ul>
   *     <li>{Number} x</li>
   *     <li>{Number} y</li>
   *     <li>{Number} width</li>
   *     <li>{Number} height</li>
   *   </ul>
   * @return {Graphics}
   */
  static createGraphics(options = {}, ...bounds) {
    const defaults = {
      fill: false,
      stroke: false,
    };

    const settings = defaults.inherit(true, options);

    const graphics = new Draw.Graphics();

    if(!!settings.fill) {
      if(Object.isObject(settings.fill)) {
        if(!!settings.fill.colors && !!settings.fill.ratios && !!settings.fill.points) {
          graphics.beginLinearGradientFill(...[[...settings.fill.colors], [...settings.fill.ratios], ...settings.fill.points]);
        }
      } else {
        graphics.beginFill(settings.fill);
      }
    }

    if(!!settings.stroke) {
      if(String.isString(settings.stroke)) {
        settings.inherit({
          stroke: {
            size: 1,
            color: settings.stroke,
          },
        });
      }

      graphics.setStrokeStyle(settings.stroke.size);
      graphics.beginStroke(settings.stroke.color);
    }

    return graphics;
  }

  /**
   * creates an DrawJS Rect Shape instance
   * @memberOf Helpers
   * @method createRect
   * @static
   * @param {Object} options the options can contain
   * @param {String|Object} options.fill color for filling graphics<br>
   * @param {Array} options.fill.colors colors to create a linear gradient fill
   * @param {Array} options.fill.ratios color ratios to create a linear gradient fill
   * @param {Array} options.fill.points start & stop points to create a linear gradient fill
   * @param {String|Object} options.stroke stroke options, if string it creates a stroke with size 1
   * @param {Number} options.stroke.size the size
   * @param {String} options.stroke.color the color
   * @param {Boolean|Number|Array} options.stroke.radius
   *   <br>if false it draws a rect
   *   <br>if Number it draws a round rect
   *   <br>if Array it draws a round rect complex (array has to respect the arguments sequence of drawRoundRectComplex method of DrawJS Graphics class
   * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of DrawJS Container class<br>
   *   so it has to be an array with this sequence<br>
   *   <ul>
   *     <li>{Number} x</li>
   *     <li>{Number} y</li>
   *     <li>{Number} width</li>
   *     <li>{Number} height</li>
   *   </ul>
   * @return {Shape}
   */
  static createRect(options = {}, ...bounds) {
    const graphics = this.createGraphics(options, ...bounds);

    if(!!options.stroke.radius) {
      if(Array.isArray(options.stroke.radius)) {
        graphics.drawRoundRectComplex(...bounds, ...options.stroke.radius);
      } else if(Number.isNumber(options.stroke.radius)) {
        graphics.drawRoundRect(...bounds, options.stroke.radius);
      }
    } else {
      graphics.drawRect(...bounds);
    }

    graphics.endFill();
    graphics.endStroke();

    const rect = new Draw.Shape(graphics);
    rect.setBounds(...bounds);

    return rect;
  }

  /**
   * creates an DrawJS Circle Shape instance
   * @memberOf Helpers
   * @method createCircle
   * @static
   * @param {Object} options the options can contain
   * @param {String|Object} options.fill color for filling graphics
   * @param {Array} options.fill.colors colors to create a linear gradient fill
   * @param {Array} options.fill.ratios color ratios to create a linear gradient fill
   * @param {Array} options.fill.points start & stop points to create a linear gradient fill
   * @param {String|Object} options.stroke stroke options, if string it creates a stroke with size 1
   * @param {Number} options.stroke.size the size
   * @param {String} options.stroke.color the color
   * @param {Number} options.radius the radius of the circle
   * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of DrawJS Container class<br>
   *   so it has to be an array with this sequence<br>
   *   <ul>
   *     <li>{Number} x</li>
   *     <li>{Number} y</li>
   *     <li>{Number} width</li>
   *     <li>{Number} height</li>
   *   </ul>
   * @return {Shape}
   */
  static createCircle(options = {}, ...bounds) {
    const defaults = {
      radius: 1,
    };

    const settings = defaults.inherit(true, options);

    const graphics = this.createGraphics(settings, ...bounds);
    graphics.drawCircle(0, 0, settings.radius);

    const circle = new Draw.Shape(graphics);
    circle.setBounds(...bounds);

    return circle;
  }

  /**
   * creates an DrawJS Text instance
   * @memberOf Helpers
   * @method createText
   * @static
   * @param {String} text the text to be rendered
   * @param {String} font font options as expected by the DrawJS Text class
   * @param {String} color the color of the text
   * @return {Text}
   */
  static createText(text, font, color) {
    return new Draw.Text(text, font, color);
  }

  /**
   * creates an DrawJS Bitmap instance
   * @memberOf Helpers
   * @method createImage
   * @static
   * @param {HTMLElement} image the preloaded DOM element representing the image
   * @return {Bitmap}
   */
  static createImage(image) {
    return new Draw.Bitmap(image);
  }

  /**
   * creates an DrawJS Sprite instance
   * @memberOf Helpers
   * @method createSprite
   * @static
   * @param {HTMLElement} spritesheet the preloaded DOM element representing the sprite
   * @return {Sprite}
   */
  static createSprite(spritesheet) {
    return new Draw.Sprite(spritesheet);
  }
}
