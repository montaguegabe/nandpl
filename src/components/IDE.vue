<template>
<div class="ide">
    <h3>NAND Editor</h3>
    <editor></editor>
</div>
</template>

<script>
import Editor from 'components/Editor.vue';

export default {
    name: 'ide',
    data: function () {
        // TODO: Remove
        /*return {
            msg: 'Welcome to the NAND editor'
        };*/
    },
    components: {
        Editor
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
