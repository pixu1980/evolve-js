import {Element} from '../Elements';
import Anim from '../Anim';
import Component from './Component';

export default class ProgressBar extends Component {
  setProgress(percentage) {
    return new Promise((resolve) => {
      Anim.Tween.get(this.progress).to({
        x: this.progressStartX + (this.progressBounds.width * percentage),
      }, 250).call(() => {
        resolve();
      });
    });
  }

  initDefaults(defaults) {
    super.initDefaults({
      fill: '#fff',
      padding: [10, 10],
      stroke: {
        size: 4,
        color: '#000',
        radius: 50,
      },
      size: {
        width: 150,
        height: 50,
      },
    }.inherit(defaults));
  }

  initSettings(options) {
    const parsedOptions = options;

    if (Number.isNumber(parsedOptions.padding)) {
      parsedOptions.padding = [parsedOptions.padding, parsedOptions.padding];
    }

    super.initSettings(parsedOptions);
  }

  drawElements() {
    super.drawElements();

    this.progressBounds = {
      width: this.getComputedBounds().width - this.settings.padding[0],
      height: this.getComputedBounds().height - this.settings.padding[1],
    };

    this.progressMask = new Element({
      fill: '#000',
      stroke: {
        size: 0,
        radius: this.settings.stroke.radius,
      },
      size: this.progressBounds,
    }).children.first().inherit({
      x: this.progressMask.x + this.settings.padding[0] / 2,
      y: this.progressMask.y + this.settings.padding[1] / 2,
    });

    this.progress = new Element({
      parent: this,
      fill: {
        colors: ['rgb(254, 127, 200)', 'rgb(171, 27, 190)'],
        ratios: [0, 1],
        points: [0, 15, 0, 45],
      },
      stroke: {
        size: 0,
        radius: this.settings.stroke.radius,
      },
      mask: this.progressMask,
      size: this.progressBounds,
      align: 'center middle',
    }).setPosition({
      x: -this.progressBounds.width,
    });

    this.progressStartX = this.progress.getComputedBounds().x;

    this.progress.cache(...this.progress.bounds);
  }
}
