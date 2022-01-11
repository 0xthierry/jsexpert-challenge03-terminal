import ConversionRepository from "../repository/ConversionRepository.js";
import IncomeRepository from "../repository/IncomeRepository.js";
import Income from "./../entity/Income.js";

class IncomeService {
  constructor({ conversionRepository, incomeRepository } = {}) {
    this.conversionRepository =
      conversionRepository || new ConversionRepository();
    this.incomeRepository = incomeRepository || new IncomeRepository();
  }

  async generateIncomeFromString(incomeString, delimiter = ";") {
    const [position, expectation] = incomeString.split(delimiter);

    if (!position) {
      throw new Error(
        "Position is a required field. Please make sure you are providing a position."
      );
    }

    const expectationTrim = expectation.trim();
    const expectationNumber = Number(expectationTrim);

    if (Number.isNaN(expectationNumber) || !expectationTrim) {
      throw new Error(
        "A valid Expectation is required. Please note that only numbers are allowed."
      );
    }

    const conversions = await this.conversionRepository.getConversions();

    const brlConversion = {
      value: expectationNumber * conversions.BRL,
      currency: "BRL",
      language: "pt-BR",
    };
    const usdConversion = {
      value: expectationNumber * conversions.USD,
      currency: "USD",
      language: "en-US",
    };
    const eurConversion = {
      value: expectationNumber * conversions.EUR,
      currency: "EUR",
      language: "en-GB",
    };
    const rubConversion = {
      value: expectationNumber * conversions.RUB,
      currency: "RUB",
      language: "ru-RU",
    };

    const income = new Income({
      position,
      expectation: brlConversion,
      conversion01: usdConversion,
      conversion02: eurConversion,
      conversion03: rubConversion,
    });

    return income;
  }

  async getIncomes() {
    const items = await this.incomeRepository.getIncomes();
    return items;
  }

  async saveIncome(income) {
    await this.incomeRepository.saveIncome(income);
  }
}

export default IncomeService;
