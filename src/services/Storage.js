
// Service module to use local storage

import VueLocalStorage from 'vue-localstorage';
import Vue from 'vue';
Vue.use(VueLocalStorage);

function saveDocument (codeMirror) {

    var doc = codeMirror.getDoc();
    Vue.localStorage.set('nandDoc', doc);
}

function restoreDocument(codeMirror) {

    var doc = Vue.localStorage.get('nandDoc');
    if (doc) {
        codeMirror.swapDoc(doc);
        return doc;

    } else {
        return null;
    }
}

export default {
    loadDocument: loadDocument,
    restoreDocument: restoreDocument
};
