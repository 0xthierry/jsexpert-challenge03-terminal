import DraftLog from "draftlog";
import chalkTable from "chalk-table";
import readline from "readline";
import terminalConfig from "./config/terminal.js";
import Income from "./entity/Income.js";

const TABLE_OPTIONS = terminalConfig.table;

class CustomTerminal {
  constructor() {
    this.print = {};
    this.data = [];
  }

  initialize(data) {
    DraftLog(console).addLineListener(process.stdin);
    this.terminal = readline.createInterface(process.stdin, process.stdout);

    this.initializeTable(data);
  }

  initializeTable(data) {
    const formattedItems = data.map((item) => new Income(item).format());
    const table = chalkTable(TABLE_OPTIONS, formattedItems);
    this.print = console.draft(table);
    this.data = formattedItems;
  }

  closeTerminal() {
    this.terminal.close();
  }

  question(msg = "") {
    return new Promise((resolve) => this.terminal.question(msg, resolve));
  }

  updateTable(item) {
    this.data.push(item);
    this.print(chalkTable(TABLE_OPTIONS, this.data));
  }
}

export default CustomTerminal;
