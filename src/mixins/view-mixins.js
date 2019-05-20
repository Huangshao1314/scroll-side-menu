export default function() {
  // @/views/components
  return {
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      deepClone(obj) {
        let json = JSON.stringify(obj);
        console.log(54, "567");
        return JSON.parse(json);
      }
    }
  };
}
