<template>
<div class="ide">
    <h3>NAND Editor</h3>
    <editor ref="editor"></editor>
    <input class="input" v-model="input"></input>
    <button @click="interpret">Interpret</button>
</div>
</template>

<script>
import Editor from 'components/Editor.vue';
import Connector from 'services/Connector';

function output(message) {
    window.result += "\n" + message;
}

export default {
    name: 'ide',
    data: function () {
        return {
            input: '0,1'
        };
    },
    components: {
        Editor
    },
    methods: {
        'interpret': function(input) {
            var code = this.$refs.editor.getCode();
            var result2 = Connector.interpret(code, this.input, output, output);
            console.log(window.result);
            console.log(result2);
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
