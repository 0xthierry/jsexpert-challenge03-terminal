import { describe, it, before } from "mocha";
import { expect } from "chai";
import { conversionRepositoryMock, mocks } from "../mocks/conversionRepository.mock.js";

import IncomeService from "../../src/service/IncomeService.js";

describe("IncomeService Suite Tests", () => {
  let service = {};
  let repository = {};

  before(() => {
    repository = conversionRepositoryMock;
    service = new IncomeService({ conversionRepository: repository });
  });

  it("should successfully return an income instance given a correct string", async () => {
    const expected = mocks.validIncome;

    const income = await service.generateIncomeFromString(
      "Senior Javascript Engineer; 15000"
    );

    expect(income).to.be.deep.equal(expected);
  });

  it("should return an error when generating an income instance from empty string", async () => {
    const expectedErrorMessage =
      "Position is a required field. Please make sure you are providing a position.";

    let errorMessage = null;

    try {
      await service.generateIncomeFromString("");
    } catch (error) {
      errorMessage = error.message;
    }
    expect(errorMessage).to.be.equal(expectedErrorMessage);
  });

  it('should return an error when generating an income instance from invalid string', async () => {
    const expectedErrorMessage =
      'A valid Expectation is required. Please note that only numbers are allowed.';

    let errorMessage = null;

    try {
      await service.generateIncomeFromString('a;12b');
    } catch (error) {
      errorMessage = error.message;
    }
    expect(errorMessage).to.be.equal(expectedErrorMessage);
  });
});
