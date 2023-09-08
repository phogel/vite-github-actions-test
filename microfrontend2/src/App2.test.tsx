import React from 'react';
import { expect, describe, it } from 'vitest';

import App2 from './App2';

describe('App', () => {
  it('should render without crashing', () => {
    expect(<App2 />).toBeDefined();
  });
});
