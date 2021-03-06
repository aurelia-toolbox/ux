import {FrameworkConfiguration} from 'aurelia-framework';
import {AureliaUX} from './aurelia-ux';

export {swatches} from './colors/swatches';
export {shadows} from './colors/shadows';
export {UxButtonTheme} from './button/ux-button-theme';
export * from './styles/decorators';
export {AureliaUX} from './aurelia-ux';
export {UXConfiguration} from './ux-configuration';

export function configure(config: FrameworkConfiguration, callback?: (config: AureliaUX) => Promise<any>) {
  config.globalResources([
    './button/ux-button'
  ]);

  let ux = <AureliaUX>config.container.get(AureliaUX);

  if (typeof callback === 'function') {
    return Promise.resolve(callback(ux))
      .then(() => ux.start(config));
  } else {
    ux.use.defaultConfiguration();
    return ux.start(config);
  }
}
