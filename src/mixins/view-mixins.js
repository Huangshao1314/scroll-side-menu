export default function() {
  // @/views/components
  return {
    mounted() {

    },
    beforeDestroy() {

    },
    'methods': {
      deepClone(obj) {
        let json = JSON.stringify(obj);
        return JSON.parse(json);
      }
    }
  };
}
