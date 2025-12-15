import defu from '@dword-design/defu';
import {
  type ConfigLayerMeta,
  loadConfig as originalLoadConfig,
  type LoadConfigOptions,
  type UserInputConfig,
  watchConfig as originalWatchConfig,
  type WatchConfigOptions,
} from 'c12';

export const loadConfig = <
  T extends UserInputConfig = UserInputConfig,
  MT extends ConfigLayerMeta = ConfigLayerMeta,
>(
  options: LoadConfigOptions<T, MT>,
) => originalLoadConfig(defu(options, { merger: defu }));

export const watchConfig = <
  T extends UserInputConfig = UserInputConfig,
  MT extends ConfigLayerMeta = ConfigLayerMeta,
>(
  options: WatchConfigOptions<T, MT>,
) => originalWatchConfig(defu(options, { merger: defu }));
