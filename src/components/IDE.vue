<template>
<div class="ide">
    <h3>NAND Editor</h3>
    <p>Implementation of the NAND, NAND++ and NAND&lt;&lt; languages.
        <span style='display: inline-block'>
            <a href="http://www.introtcs.org/public/index.html" target="_blank">introtcs.org</a> | <a href="http://www.introtcs.org/public/lec_A_NAND_prog_lang.html" target="_blank">specification</a> | <a href="https://github.com/juan-esteller/NAND" target="_blank">repository</a> | <a href="#" onclick="return false;" @click="help">help</a>
        </span>
    </p>

    <editor ref="editor"></editor>

    <input type="radio" id="nand" value="nand" v-model="language">
    <label for="one">NAND</label>
    <input type="radio" id="nandpp" value="nandpp" v-model="language">
    <label for="two">NAND++</label>
    <input type="radio" id="nandgg" value="nandgg" v-model="language">
    <label for="two">NAND&lt;&lt;</label>
    <input type="checkbox" id="ss-checkbox" v-model="ss">
    <label for="checkbox">Syntactic Sugar</label>
    <input type="checkbox" id="dry-checkbox" v-model="dry">
    <label for="checkbox">Dry</label>
    <input class="input-box" v-model="input">
    <button class="interpret" @click="interpret">Interpret</button>
    <hr>
    <console ref="console"></console>

    <v-dialog :adaptive="true" width="100%" height="100%" />
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
        },
        'help': function() {
            this.$modal.show('dialog', {
                title: 'The NAND Programming Language Editor',
                text: '<p>This website provides an easy, client-side interface to the NAND, NAND++ and NAND&lt;&lt; programming languages from <a href="http://www.introtcs.org">introtcs.org</a>. See in particular the following <a href="http://www.introtcs.org/public/lec_A_NAND_prog_lang.html">appendix</a> for the languages\' specifications.</p>' +
                    '<p>The site is built upon Juan Esteller\'s <a href="https://github.com/juan-esteller/NAND">standalone interpreter</a> written in OCaml. You will need to use this version to run massive programs that do not fit in browser memory.</p>' +
                    '<p>The source of this web application can be found <a href="https://github.com/montaguegabe/nandpl">here</a>. If you find a bug please report it in the issues section, or feel free to contribute yourself.</p>',
                buttons: [
                    { title: 'Close' }
                ]
            });
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
