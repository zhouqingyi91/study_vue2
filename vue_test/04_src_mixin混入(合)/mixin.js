export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        }
    },
    mounted() {
        console.log('mounted');
    },
};

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}

export const mixin3 = {
    mounted() {
        console.log('全局混合');
    }
}