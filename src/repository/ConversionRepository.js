import Request from "../lib/request.js";

const API_BASE_URL = "http://localhost:3000";

class ConversionRepository {
  constructor() {
    this.conversionClient = new Request();
  }
  async makeRequest(url) {
    const { data } = await this.conversionClient.get(url);
    return data;
  }

  async getConversions() {
    const { results } = await this.makeRequest(`${API_BASE_URL}/convert`);
    return results;
  }
}

export default ConversionRepository;
