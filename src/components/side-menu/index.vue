<template>
  <div class="side-menu">
    <div class="sidebar">
      <ul class="main-root">
        <li>
          <a href="#安装">安装</a>
        </li>
        <ul class="menu-sub">
          <li><a class="section-link" href="#Vue-Devtools">Vue Devtools</a></li>
          <li>
            <a class="section-link active" href="#直接用-lt-script-gt-引入">直接用 &lt;script&gt; 引入</a>
          </li>
        </ul>
        <li>
          <a class="section-link active" href="#介绍">介绍</a>
        </li>
        <ul class="menu-sub">
          <li><a class="section-link" href="#vue-js-是什么">vue.js是什么</a></li>
          <li><a class="section-link" href="#起步">起步</a></li>
        </ul>
      </ul>
    </div>
    <div class="content">
      <h2 id="Vue-Devtools">
        <a href="#Vue-Devtools" class="headerlink" title="Vue Devtools">Vue Devtools</a>
      </h2>
      <p>Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
        在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。
      </p>
      <h2 id="直接用-lt-script-gt-引入">
        <a href="#直接用-lt-script-gt-引入" class="headerlink" title="直接用 <script> 引入">直接用 &lt;script&gt; 引入</a>
      </h2>
      <p>
        直接下载并用 &lt;script&gt;标签引入，Vue 会被注册为一个全局变量
在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!

开发版本包含完整的警告和调试模式

生产版本删除了警告，33.30KB min+gzip
CDN
对于制作原型或学习，你可以这样使用最新版本：
你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。

Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。

请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。
      </p>
      <h2 id="介绍">
        <a href="#介绍" class="headerlink" title="介绍">介绍</a>
      </h2>
      <p>在使用 Vue 时，我们推荐在你的浏览器上安装它允许你在一个更友好的界面中审查和调试 Vue 应用。</p>
      <h2 id="vue-js-是什么">
        <a href="#vue-js-是什么" class="headerlink" title="vue.js是什么">vue.js是什么</a>
      </h2>
      <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。

如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。</p>
      <h2 id="起步">
        <a href="#起步" class="headerlink" title="起步">起步</a>
      </h2>
      <p>官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。
安装
尝试 Vue.js 最简单的方法是使用 JSFiddle 上的 Hello World 例子。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。或者你也可以创建一个 .html 文件，然后通过如下方式引入 Vue：
安装教程给出了更多安装 Vue 的方式。请注意我们不推荐新手直接使用 vue-cli，尤其是在你还不熟悉基于 Node.js 的构建工具时。

如果你喜欢交互式的东西，你也可以查阅这个 Scrimba 上的系列教程，它揉合了录屏和代码试验田，并允许你随时暂停和播放。

声明式渲染</p>
    </div>
  </div>
</template>

<script>
export default {
  'name': 'sideMenu',
  'methods': {
    test () {
      console.log(554, '675');
    }
  }
};
</script>
<style lang="postcss" scoped>
.side-menu {
  ul {
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  a {
    text-decoration: none;
    font-weight: 600;
    pointer-events: auto;
    color: #2c3e50;
  }
  .sidebar {
    position: fixed;
    z-index: 10;
    top: 61px;
    left: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .sidebar .menu-sub {
    font-size: 0.85em;
  }
  .content{
    position: relative;
    max-width: 786px;
    margin: 0 auto;
    padding-left: 50px;
    margin-left: 358px;
  }
}
</style>
