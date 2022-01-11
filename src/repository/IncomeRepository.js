import Request from "../lib/request.js";

const API_BASE_URL = "http://localhost:3000";

class IncomeRepository {
  constructor() {
    this.incomeClient = new Request();
  }

  async getIncomes() {
    const { data } = await this.incomeClient.get(`${API_BASE_URL}/incomes`);
    return data;
  }

  async saveIncome(income) {
    await this.incomeClient.post(`${API_BASE_URL}/incomes`, income);
  }
}

export default IncomeRepository;
