import { customLib } from './custom-lib';

describe('customLib', () => {
  it('should work', () => {
    expect(customLib()).toEqual('custom-lib');
  });
});
