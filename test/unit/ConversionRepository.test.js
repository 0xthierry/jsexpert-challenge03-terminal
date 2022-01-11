import { describe, it, before } from 'mocha';
import { expect } from 'chai';
import { conversionRepositoryMock, mocks } from '../mocks/conversionRepository.mock.js';

describe('conversionRepository Suite Tests', () => {
  let repository = {};

  before(() => {
    repository = conversionRepositoryMock;
  });

  it('should return the correct list of conversions when getConversions is called', async () => {
    const expected = mocks.convertResponse.results;
    const result = await repository.getConversions();

    expect(result).to.be.equal(expected);
  });
});
