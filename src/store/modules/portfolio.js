const state = {
    funds: 10000,
    stocks: [] // #1 
}

const mutations = {
    'BUY_STOCK'(state, { stockId, qty, stockPx }) {
        const rcd = state.stocks.find(elt => elt.id == stockId); // #2, #3
        if (rcd) {
            rcd.qty += qty;
        }
        else {
            state.stocks.push({
                id: stockId,
                qty: qty
            });
        }
        state.funds -= stockPx * qty;
    },
    'SELL_STOCK'(state, { stockId, qty, stockPx }) {
        const rcd = state.stocks.find(elt => elt.id == stockId);
        if (rcd.qty > qty) {
            rcd.qty -= qty;
        }
        else {
            state.stocks.splice(state.stocks.indexOf(rcd), 1);
        }
        state.funds += stockPx * qty;
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const rcd = getters.stocks.find(elt => elt.id == stock.id);
            return {
                id: stock.id,
                qty: stock.qty,
                nom: rcd.nom,
                px: rcd.px
            }
        });
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
/*
1. stocks in portfolio, not all the stocks available
2. rcd = record
3. same as: elt => return elt.id == stockId
 */