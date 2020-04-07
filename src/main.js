import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
export const eventBus = new Vue({
    methods: {
        changeRelYear(relYear) {
            this.$emit('relDateGotEdited', relYear);
        }
    }
});

Vue.directive('highlight', {
    bind(el, binding /*, vnode*/) {
        var delay = 0;
        if ( binding.modifiers['delayed']) {
            delay = 3000;
        }
        setTimeout(() => {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
            }
            else {
                el.style.color = binding.value;
            }
        }, delay);
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
