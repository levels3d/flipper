/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

import type {FlipperDevicePlugin} from '../plugin.js';

import {GK} from 'flipper';
import logs from './logs/index.js';
import cpu from './cpu/index.js';

const plugins: Array<Class<FlipperDevicePlugin<any>>> = [logs];

if (GK.get('sonar_uiperf')) {
  plugins.push(cpu);
}

export const devicePlugins = plugins;

export function registerDevicePlugin(plugin: Class<SonarDevicePlugin<any>>) {
  plugins.push(plugin);
}
