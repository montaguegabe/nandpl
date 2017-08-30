<template>
<div class="parse-demo">
    <div>Enter NAND code</div>
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
            this.result = 7;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
