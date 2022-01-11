import CustomTerminal from "./terminal.js";
import IncomeService from "./service/IncomeService.js";

const VOCABULARY = {
  STOP: ":q",
};

const terminal = new CustomTerminal();
const service = new IncomeService();
const incomes = await service.getIncomes();

terminal.initialize(incomes);

async function mainLoop() {
  console.info("🚀 Running...\n");
  try {
    const answer = await terminal.question();

    if (answer === VOCABULARY.STOP) {
      terminal.closeTerminal();
      return;
    }

    const result = await service.generateIncomeFromString(answer);
    terminal.updateTable(result.format());
    await service.saveIncome(result);

    return mainLoop();
  } catch (error) {
    console.error("deu ruim", error);
  }
  return mainLoop();
}

await mainLoop();
