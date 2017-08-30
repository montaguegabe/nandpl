<template>
<div class='console'>
    <div v-for="message in messages" class="console-item" v-bind:class="{ 'console-error': message.type === 'error', 'console-result': message.type === 'result' }">
        {{ message.body }}
    </div>
</div>
</template>

<script>

export default {
    data: function() {
        return {
            messages: []
        };
    },
    methods: {
        'pushMessage': function(message, type) {
            this.messages.push({
                body: message,
                type: type
            });
        },
        'clear': function() {
            this.messages = [];
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.console {
    text-align: left;
    font-size: 16px;
    color: white;
    background-color: #130f1c;
    min-height: 300px;
    padding-left: 5px;
    overflow-y: scroll;
    overflow-x: visible;
    word-wrap: break-word;
}

.console-item {
    cursor: text;
}

.console-error {
    color: red;
}

.console-result {
    line-height: 200%;
    font-weight: bold;
}

</style>
