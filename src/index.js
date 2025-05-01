import defu from '@dword-design/defu';
import {
  loadConfig as originalLoadConfig,
  watchConfig as originalWatchConfig,
} from 'c12';

export const loadConfig = options =>
  originalLoadConfig(defu({ merger: defu }, options));

export const watchConfig = options =>
  originalWatchConfig(defu({ merger: defu }, options));
