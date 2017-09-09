
// Service module to use local storage

import VueLocalStorage from 'vue-localstorage';
import Vue from 'vue';
Vue.use(VueLocalStorage);

function saveDocument(codeMirror) {

    var doc = codeMirror.getDoc();
    Vue.localStorage.set('docContents', doc.getValue());
    Vue.localStorage.set('docHistory', JSON.stringify(doc.getHistory()));
    Vue.localStorage.set('docName', window.GLOBAL_NAND_FILENAME);
}

function restoreDocument(codeMirror) {

    var doc = codeMirror.getDoc();
    var docContents = Vue.localStorage.get('docContents');
    var docHistory = JSON.parse(Vue.localStorage.get('docHistory'));
    var docName = Vue.localStorage.get('docName');
    if (docHistory && docContents && docName) {
        doc.setValue(docContents);
        doc.setHistory(docHistory);
        window.GLOBAL_NAND_FILENAME = docName;
        return docContents;
    }
    return null;
}

export default {
    saveDocument: saveDocument,
    restoreDocument: restoreDocument
};
