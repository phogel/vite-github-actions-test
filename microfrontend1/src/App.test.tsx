import { expect, describe, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    expect(<App />).toBeDefined();
  });
});