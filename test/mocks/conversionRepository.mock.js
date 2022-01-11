import conversionRepository from '../../src/repository/ConversionRepository.js';
import sinon from 'sinon';
import convertResponseMock from './convert-response.js';
import validIncomeMock from './valid-income.js';

const urls = {
  convert: 'http://localhost:3000/convert',
};

const mocks = {
  convertResponse: convertResponseMock,
  validIncome: validIncomeMock,
};

const conversionRepositoryMock = new conversionRepository();

const stub = sinon.stub(
  conversionRepositoryMock,
  conversionRepositoryMock.makeRequest.name
);

stub.withArgs(urls.convert).resolves(mocks.convertResponse);

export { conversionRepositoryMock, urls, mocks };
