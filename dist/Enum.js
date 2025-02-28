"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ROUTES = void 0;
var API_ROUTES;
(function (API_ROUTES) {
    API_ROUTES["PING"] = "/ping";
    API_ROUTES["SEARCH_TRENDING"] = "/search/trending";
    API_ROUTES["COIN"] = "/coins/{id}";
    API_ROUTES["COIN_LIST"] = "/coins/list";
    API_ROUTES["COIN_MARKET"] = "/coins/markets";
    API_ROUTES["COIN_TICKERS"] = "/coins/{id}/tickers";
    API_ROUTES["COIN_HISTORY"] = "/coins/{id}/history";
    API_ROUTES["COIN_MARKET_CHART"] = "/coins/{id}/market_chart";
    API_ROUTES["COIN_MARKET_CHART_RANGE"] = "/coins/{id}/market_chart/range";
    // COIN_STATUS_UPDATES = '/coins/{id}/status_updates', NO LONGER EXISTS IN API
    API_ROUTES["COIN_OHLC"] = "/coins/{id}/ohlc";
    API_ROUTES["SIMPLE_PRICE"] = "/simple/price";
    API_ROUTES["SIMPLE_SUPPORTED_CURRENCIES"] = "/simple/supported_vs_currencies";
    API_ROUTES["SIMPLE_TOKEN_PRICE"] = "/simple/token_price/{id}";
    API_ROUTES["CONTRACT"] = "/coins/{id}/contract/{contract_address}";
    API_ROUTES["CONTRACT_MARKET_CHART"] = "/coins/{id}/contract/{contract_address}/market_chart";
    API_ROUTES["CONTRACT_MARKET_CHART_RANGE"] = "/coins/{id}/contract/{contract_address}/market_chart/range";
    API_ROUTES["EXCHANGES"] = "/exchanges";
    API_ROUTES["EXCHANGE_LIST"] = "/exchanges/list";
    API_ROUTES["EXCHANGE_ID"] = "/exchanges/{id}";
    API_ROUTES["EXCHANGE_ID_TICKER"] = "/exchanges/{id}/tickers";
    // EXCHANGE_ID_STATUS_UPDATES = '/exchanges/{id}/status_updates', NO LONGER EXISTS IN API
    API_ROUTES["EXCHANGE_ID_VOL_CHART"] = "/exchanges/{id}/volume_chart";
    API_ROUTES["FINANCE_PLATFORM"] = "/asset_platforms";
    // FINANCE_PRODUCT = '/finance_products', NO LONGER EXISTS IN API
    API_ROUTES["INDEXES"] = "/indexes";
    API_ROUTES["INDEXES_LIST"] = "/indexes/list";
    API_ROUTES["INDEXES_MARKET_ID"] = "/indexes/{market_id}/{id}";
    API_ROUTES["INDEXES_LIST_MARKET_AND_ID"] = "/indexes/list_by_market_and_id/{market_id}/{id}";
    API_ROUTES["DERIVATIVES"] = "/derivatives";
    API_ROUTES["DERIVATIVES_EXCHANGES"] = "/derivatives/exchanges";
    API_ROUTES["DERIVATIVES_EXCHANGES_ID"] = "/derivatives/exchanges/{id}";
    API_ROUTES["DERIVATIVES_EXCHANGES_LIST"] = "/derivatives/exchanges/list";
    // STATUS_UPDATES = '/status_updates', NO LONGER EXISTS IN API
    // EVENTS = '/events', NO LONGER EXISTS IN API
    // EVENTS_COUNTRIES = '/events/countries', NO LONGER EXISTS IN API
    // EVENTS_TYPES = '/events/types', NO LONGER EXISTS IN API
    API_ROUTES["EXCHANGE_RATES"] = "/exchange_rates";
    API_ROUTES["GLOBAL"] = "/global";
    API_ROUTES["GLOBAL_DEFI"] = "/global/decentralized_finance_defi";
})(API_ROUTES = exports.API_ROUTES || (exports.API_ROUTES = {}));
