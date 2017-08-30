<template>
<div class='editor'>
    <div>Editor</div>
    <codemirror v-model="code" :options="editorOptions"></codemirror>
</div>
</template>

<script>

// SEE https://github.com/surmon-china/vue-codemirror
// VENDOR BUG: https://github.com/JedWatson/react-codemirror/issues/34
//       ALSO: https://www.google.com/search?safe=active&q=codemirror+doesn%27t+highlight&oq=codemirror+select+doesn%27t+&gs_l=psy-ab.3.0.0i22i30k1.7058.7841.0.8745.8.7.0.0.0.0.292.928.0j2j2.4.0....0...1.1.64.psy-ab..4.4.927.PWbKBi8_Cr4

// FUTURE: Require resource packs here
// require('codemirror/some-resource')

import Vue from 'vue';
import VueCodeMirror from 'vue-codemirror';
Vue.use(VueCodeMirror);
import { codemirror, CodeMirror } from 'vue-codemirror';

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
                mode: 'text/javascript',
                //theme: 'base16-dark',
                lineNumbers: true,
                line: false
            }
        };
    }
    /*computed: {
        editor: function() {
            return this.$refs.myEditor.editor;
        }
    }*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.editor {
    text-align: left;
    font-size: 16px;
}

</style>
