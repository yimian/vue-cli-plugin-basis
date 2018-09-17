import Vue from 'vue';
import Vuetify from 'vuetify';
import enLang from 'vuetify/es5/locale/en';
import zhLang from 'vuetify/es5/locale/zh-Hans';
import 'vuetify/dist/vuetify.min.css';
<%_ if (opts.customTheme) { _%>
import '../stylus/main.styl';
<%_ } _%>
import i18n from '../i18n';

Vue.use(Vuetify, {
  <%_ if (opts.i18n !== 'none') { _%>
  lang: {
    locales: { enLang, zhLang },
    current: 'enLang',
  },
  <%_ } _%>
});

<%_ if (opts.i18n !== 'none') { _%>
const that = Vue.prototype;
that.$locale = {
  use(lang) {
    i18n.locale = lang;
    that.$vuetify.lang.current = lang === 'zh-CN' ? 'zhLang' : 'enLang';
  },
  current() {
    return i18n.locale;
  },
};
<%_ } _%>
