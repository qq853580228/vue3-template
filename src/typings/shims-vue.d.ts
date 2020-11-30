declare module '*.vue' {
  // import Vue from 'vue';
  import { Component, defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;

  // export default Vue;
  export default component;
}
