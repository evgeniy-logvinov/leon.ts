import { BaseApiService } from "@/api/BaseApiService";
import { QuoteEntity } from "@/entities/QuoteEntity";

class QuoteService extends BaseApiService {
  public get(): Promise<QuoteEntity> {
    return this.http.get<QuoteEntity>("/").then((x) => x.data);
  }
}

export default new QuoteService();
