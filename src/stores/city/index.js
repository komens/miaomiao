const state = {
    nm: window.localStorage.getItem('nowNm') || '成都',
    id: parseInt(window.localStorage.getItem('nowId')) || 59
};

const actions = {

};

const mutations = {
    CITY_INFO(state,payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}