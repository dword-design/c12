import pathLib from 'node:path';

import { expect, test } from '@playwright/test';
import fs from 'fs-extra';

import { loadConfig } from '.';

test('array', async ({}, testInfo) => {
  const cwd = testInfo.outputPath();

  await fs.outputFile(
    pathLib.join(cwd, 'config.json'),
    JSON.stringify({ plugins: ['local'] }),
  );

  const { config } = await loadConfig({
    defaultConfig: { plugins: ['inherited'] },
  });

  expect(config).toEqual({ plugins: ['inherited', 'local'] });
});
