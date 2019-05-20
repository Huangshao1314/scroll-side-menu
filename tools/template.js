module.exports = {
  componentTemplate: componentName => {
    return `<template>
  <div class="${componentName}">
    ${componentName}组件
  </div>
</template>
<script>
export default {
  name: '${componentName}'
}
</script>
<style scoped>
.${componentName} {

}
</style>
`
  },
  viewTemplate: componentName => {
    return `<template>
  <div class="${componentName}">
    ${componentName}组件
  </div>
</template>
<script>
import ViewMixin from '@/mixins/view-mixin.js
export default {
  name: '${componentName}',
  mixins: [
    ViewMixin()
  ]
}
</script>
<style lang="postcss" scoped>
.${componentName} {

}
</style>
`
  }
}