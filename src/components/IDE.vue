<template>
<div class="ide">
    <h3>NAND Editor</h3>
    <editor ref="editor"></editor>
    <input class="input" v-model="input">
    <button @click="interpret">Interpret</button>
    <hr>
    <console ref="console"></console>
</div>
</template>

<script>
import Editor from 'components/Editor.vue';
import Console from 'components/Console.vue';
import Connector from 'services/Connector';

function passMessage(message) {
    this.$refs.console.pushMessage(message, 'message');
}

function passError(error) {
    this.$refs.console.pushMessage(error, 'error');
}

export default {
    name: 'ide',
    data: function () {
        return {
            input: '0,1'
        };
    },
    components: {
        Editor,
        Console
    },
    methods: {
        'interpret': function(input) {

            this.$refs.console.clear();
            var code = this.$refs.editor.getCode();
            var result = Connector.interpret(code, this.input, passMessage.bind(this), passError.bind(this));
            this.$refs.console.pushMessage(result, 'result');

            console.log(result);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../styles/grid.scss";
@import "neat";

// TODO: Real style
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
