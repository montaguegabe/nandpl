<template>
<div class="ide">
    <div class="fixed-height">
        <v-dialog :adaptive="true" width="100%" height="100%" />
        <h3>NAND Editor</h3>
        <p>Implementation of the NAND, NAND++ and NAND&lt;&lt; languages.
            <span style='display: inline-block'>
                <a href="http://www.introtcs.org/public/index.html" target="_blank">introtcs.org</a> | <a href="http://www.introtcs.org/public/lec_A_NAND_prog_lang.html" target="_blank">specification</a> | <a href="https://github.com/juan-esteller/NAND" target="_blank">repository</a> | <a href="#" onclick="return false;" @click="help">help</a>
            </span>
        </p>

        <editor ref="editor" v-on:modechange="codeModeChanged"></editor>

        <input type="radio" id="nand" value="nand" v-model="language">
        <label for="one">NAND</label>
        <input type="radio" id="nandpp" value="nandpp" v-model="language">
        <label for="two">NAND++</label>
        <input type="radio" id="nandgg" value="nandgg" v-model="language">
        <label for="two">NAND&lt;&lt;</label>
        <input type="checkbox" id="ss-checkbox" v-model="ss">
        <label for="checkbox">Syntactic Sugar</label>
        <button class="interpret" v-if="ss" @click="unsweeten">Unsweeten</button>
        <input class="input-box" v-model="input" title="For example: 01, d4" placeholder="Input">
        <button class="interpret" @click="interpret">Interpret</button>
        <hr>
    </div>
    <console ref="console" class="expand-height"></console>
</div>
</template>

<script>
import Editor from 'components/Editor.vue';
import Console from 'components/Console.vue';
import Connector from 'services/Connector';

function languageToComment(mode) {
    switch (mode) {
    case 'nand':
        return '// NAND';
    case 'nandpp':
        return '// NAND++';
    case 'nandgg':
        return '// NAND<<';
    }
}

function reverse(s) {
    return s.split("").reverse().join("");
}

function passMessageToConsole(output) {
    this.$refs.console.pushMessage(output, 'message');
}

function aggregateMessage(output)  {
    this.transformed += output + '\n';
}

function passError(error) {
    this.$refs.console.pushMessage(error.toString(), 'error');
}

export default {
    name: 'ide',
    data: function () {
        return {
            input: '01',
            dry: false,
            silent: false,
            ss: false,
            language: 'nand',
            transformed: ''
        };
    },
    components: {
        Editor,
        Console
    },
    methods: {
        'unsweeten': function() {
            this.dry = true;
            this.interpret();
            this.dry = false;
        },
        'interpret': function() {

            if (!this.dry) {
                this.$refs.console.clear();
            }
            this.transformed = '';

            var code = this.$refs.editor.getCode();
            var messageHandler = this.dry ? aggregateMessage.bind(this) : passMessageToConsole.bind(this);
            var result = Connector.interpret(code, this.input, messageHandler, passError.bind(this), {
                dry: this.dry,
                silent: this.silent,
                ss: this.ss,
                language: this.language
            });
            if (result.length) {
                var resultClean = reverse(result);
                var num = parseInt(resultClean, 2);
                this.$refs.console.pushMessage('Result: ' + result.toString() + ' (' + num.toString() + ')', 'result');

                console.log(result);
            }

            // Scroll to bottom of console
            setTimeout(() => {
                this.$refs.console.scrollBottom();
            }, 5);

            // Editor gets generated code for dry mode
            if (this.dry) {
                var header = languageToComment(this.language);
                this.$refs.editor.setCode(header + '\n' + this.transformed);
                this.transformed = '';
            }
        },
        'codeModeChanged': function(mode) {
            if (mode) {
                this.language = mode;
            }
        },
        'help': function() {
            this.$modal.show('dialog', {
                title: 'The NAND Programming Language Editor',
                text: '<p>This website provides an easy, client-side interface to the NAND, NAND++ and NAND&lt;&lt; programming languages from <a href="http://www.introtcs.org">introtcs.org</a>. See in particular the following <a href="http://www.introtcs.org/public/lec_A_NAND_prog_lang.html">appendix</a> for the languages\' specifications.</p>' +
                    '<p>Built by Gabe Montague, based on Juan Esteller\'s <a href="https://github.com/juan-esteller/NAND">standalone interpreter</a> written in OCaml. You will need to use this version to run massive programs that do not fit in browser memory.</p>' +
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

.ide {
    height: 100%;
    display: flex;
    flex-flow: column;
}

.fixed-height {
    flex: 0 0 auto;
}

.expand-height {
    flex: 1 1 400px;
}

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
    color: #708;
}
</style>
