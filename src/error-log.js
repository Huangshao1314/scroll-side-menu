import Vue from 'vue';

if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = (err, vm, info, a) => {
    Vue.nextTick(() => {
      vm
      a
      console.log(err, info);
    });
  };
}
