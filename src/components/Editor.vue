<template>
<div class='editor'>
    <codemirror v-model="code"
        :options="editorOptions"
        @ready="onEditorReady"
        @change="onEditorCodeChange">
    </codemirror>
</div>
</template>

<script>

// SEE https://github.com/surmon-china/vue-codemirror

import Vue from 'vue';
import VueCodeMirror from 'vue-codemirror';
import { codemirror, CodeMirror } from 'vue-codemirror';
import Storage from 'services/Storage.js';

Vue.use(VueCodeMirror);

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

require('codemirror/keymap/sublime.js');
import debounce from 'debounce';

export default {
    components: {
        codemirror
    },
    data: function() {
        return {
            code: '',

            // Options for codemirror
            editorOptions: {
                tabSize: 4,
                mode: 'nand',
                lineNumbers: true,
                line: false,
                keyMap: 'sublime'
            },

            codeMirror: null,
            codeMode: '',
            codeModePrev: ''
        };
    },
    methods: {
        'getCode': function() {
            return this.code;
        },
        'onEditorReady': function(codeMirror) {

            // Load document
            this.codeMirror = codeMirror;
            var restored = Storage.restoreDocument(codeMirror);
            if (!restored) {
                // Add a default line of NAND
                this.code = 'y_0 := x_0 NAND x_1';
            }
        },
        'onEditorCodeChange': debounce(function(code) {
            Storage.saveDocument(this.codeMirror);

            // Check first lines of code for language type
            this.codeModePrev = this.codeMode;
            var firstLine = code.substr(0, code.indexOf('\n'));
            firstLine = firstLine.replace(/\s/g, '').toLowerCase();
            if (firstLine.startsWith('//nand++')) {
                this.codeMode = 'nandpp';
            } else if (firstLine.startsWith('//nand<<')) {
                this.codeMode = 'nandgg';
            } else if (firstLine.startsWith('//nand')) {
                this.codeMode = 'nand';
            }

            // Broadcast changes to code mode
            if (this.codeMode !== this.codeModePrev) {
                this.$emit('modechange', this.codeMode, this.codeModePrev);
            }
        }, 500)
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.editor {
    text-align: left;
    font-size: 16px;
    border-top: 1px solid #BBB;
    line-height: 21px;
}

</style>
