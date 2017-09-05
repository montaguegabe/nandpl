<template>
<div class='editor'>
    <codemirror v-model="code" :options="editorOptions"></codemirror>
</div>
</template>

<script>

// SEE https://github.com/surmon-china/vue-codemirror

import Vue from 'vue';
import VueCodeMirror from 'vue-codemirror';
Vue.use(VueCodeMirror);
import { codemirror, CodeMirror } from 'vue-codemirror';

// console.log("1");
// console.log(VueCodeMirror);
// console.log("2");
// console.log(codemirror);
// console.log("3");
// console.log(CodeMirror);
// var doc = CodeMirror.getDoc();
// console.log(doc);

// Define mode
VueCodeMirror.CodeMirror.defineMode('nand', () => {
    return {
        token(stream, state) {
            if (stream.match("NAND")) {
                return "keyword";
            } else if (stream.match("up")) {
                return "string";
            } else if (stream.match("loop")) {
                return "number";
            } else if (stream.match("validx_")) {
                return "number";
            } else if (stream.match("while")) {
                return "keyword";
            } else if (stream.match("if")) {
                return "keyword";
            } else if (stream.match("while")) {
                return "keyword";
            } else if (stream.match("def")) {
                return "keyword";
            } else if (stream.match("//")) {
                stream.skipToEnd();
                return "comment";
            } else {
                stream.next();
                return null;
            }
        }
    };
});

export default {
    components: {
        codemirror
    },
    data: function() {
        return {
            code: 'y_0 := x_0 NAND x_1',

            // Options for codemirror
            editorOptions: {
                tabSize: 4,
                mode: 'nand',
                lineNumbers: true,
                line: false
            }
        };
    },
    methods: {
        'getCode': function() {
            return this.code;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.editor {
    text-align: left;
    font-size: 16px;
    border-top: 1px solid #BBB;
}

</style>
