
// Service module to use local storage

import VueLocalStorage from 'vue-localstorage';
import Vue from 'vue';
Vue.use(VueLocalStorage);

function saveDocument (codeMirror) {

    var doc = codeMirror.getDoc();
    Vue.localStorage.set('docContents', doc.getValue());
    Vue.localStorage.set('docHistory', JSON.stringify(doc.getHistory()));
}

function restoreDocument(codeMirror) {

    var doc = codeMirror.getDoc();
    var docContents = Vue.localStorage.get('docContents');
    var docHistory = JSON.parse(Vue.localStorage.get('docHistory'));
    if (docHistory && docContents) {
        doc.setValue(docContents);
        doc.setHistory(docHistory);
        return true;
    }
    return false;
}

export default {
    saveDocument: saveDocument,
    restoreDocument: restoreDocument
};
