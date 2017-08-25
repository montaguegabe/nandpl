<template>
<div class="parse-demo">
    <div>Enter the expression to parse:</div>
    <div>
        <textarea v-model="source"></textarea>
    </div>
    <button @click="parse">Parse</button>
    <div v-if="!!result">Result:</div>
    <div class="result">
        {{ result }}
    </div>
</div>
</template>

<script>

import fib from 'backend/fib';

export default {
    name: 'parse-demo',

    data: function () {
        return {
            source: '3 * 2 + 1',
            result: ''
        };
    },
    methods: {
        'parse': function(source) {
            console.log(fib);
            this.result = fib.fib(7);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
