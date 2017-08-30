<template>
<div class="ide">
    <h3>NAND Editor</h3>
    <editor ref="editor"></editor>
    <!--<input type="checkbox" id="silent-checkbox" v-model="silent">
    <label for="checkbox">Silent</label> -->
    <input type="radio" id="nand" value="nand" v-model="language">
    <label for="one">NAND</label>
    <input type="radio" id="nandpp" value="nandpp" v-model="language">
    <label for="two">NAND++</label>
    <input type="radio" id="nandgg" value="nandgg" v-model="language">
    <label for="two">NAND<<</label>
    <input type="checkbox" id="ss-checkbox" v-model="ss">
    <label for="checkbox">Syntactic Sugar</label>
    <input type="checkbox" id="dry-checkbox" v-model="dry">
    <label for="checkbox">Dry</label>
    <input class="input-box" v-model="input">
    <button class="interpret" @click="interpret">Interpret</button>
    <hr>
    <console ref="console"></console>
</div>
</template>

<script>
import Editor from 'components/Editor.vue';
import Console from 'components/Console.vue';
import Connector from 'services/Connector';

function reverse(s) {
    return s.split("").reverse().join("");
}

function passMessage(message) {
    this.$refs.console.pushMessage(message, 'message');
}

function passError(error) {
    this.$refs.console.pushMessage(error.toString(), 'error');
}

export default {
    name: 'ide',
    data: function () {
        return {
            input: '0,1',
            dry: false,
            silent: false,
            ss: false,
            language: 'nand'
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
            var result = Connector.interpret(code, this.input, passMessage.bind(this), passError.bind(this), {
                dry: this.dry,
                silent: this.silent,
                ss: this.ss,
                language: this.language
            });
            if (result.length) {
                var resultClean = reverse(result);
                var num = parseInt(resultClean, 2);
                this.$refs.console.pushMessage('Result: ' + result.toString() + ' (' + num.toString() + ')', 'result');
            }

            console.log(result);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../styles/grid.scss";
@import "neat";

.input-box {
    font-size: 14px;
}

.interpret {
    font-size: 14px;
}

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
