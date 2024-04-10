const personOptions = {
  namespaced: true,
  actions: {
    addPerson(context, personObj) {
      if (personObj.name.trim() !== '') {
        context.commit('ADD_PERSON', personObj)
      } else {
        alert('名字不能为空');
      }
    },
    addPersonWang(context, personObj) {
      if (personObj.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', personObj);
      } else {
        alert('添加的人必须姓王');
      }
    }
  },
  mutations: {
    ADD_PERSON(state, personObj) {
      state.personList.unshift(personObj);
    }
  },
  state: {
    personList: [{id:'001', name:'Tom'}],
  },
  getters: {
    getFirstPersonName(state) {
      return state.personList[0].name;
    }
  },
}
export default personOptions;