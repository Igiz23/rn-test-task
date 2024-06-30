import { observable, action, makeObservable, runInAction } from 'mobx';
import { Quote, QuotesResponse } from '../types/types';

class QuotationStore {
    quotes: Quote[] = [];
    loading: boolean = true;
    error: string | null = null;

    constructor() {
        makeObservable(this, {
            quotes: observable,
            loading: observable,
            error: observable,
            fetchQuotes: action,
        });
    }

    fetchQuotes = async () => {
        try {
            const response = await fetch('https://futures-api.poloniex.com/api/v2/tickers');
            const data: QuotesResponse = await response.json();
            runInAction(() => {
                this.quotes = data.data;
                this.error = null;
            });
        } catch (err) {
            console.error('Ошибка при запросе данных:', err);
            runInAction(() => {
                this.loading = true;
                this.error = 'Ошибка при получении данных';
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}

export const quotationStore = new QuotationStore();
