import fs from 'fs-extra';
import withLocalTmpDir from 'with-local-tmp-dir';

import { loadConfig } from './index.js';

export default {
  async afterEach() {
    await this.resetTmpDir();
  },
  array: async () => {
    await fs.outputFile('config.json', JSON.stringify({ plugins: ['local'] }));

    const { config } = await loadConfig({
      defaultConfig: { plugins: ['inherited'] },
    });

    expect(config).toEqual({ plugins: ['inherited', 'local'] });
  },
  async beforeEach() {
    this.resetTmpDir = await withLocalTmpDir();
  },
};
