export interface Quote {
    sequence: number;
    symbol: string;
    side: 'buy' | 'sell';
    size: number;
    price: string;
    bestBidSize: number;
    bestBidPrice: string;
    bestAskPrice: string;
    tradeId: string;
    bestAskSize: number;
    ts: number;
}

export interface QuotesResponse {
    code: string;
    msg: string;
    data: Quote[];
}
