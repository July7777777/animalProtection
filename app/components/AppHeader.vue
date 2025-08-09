<template>
  <header class="bg-gradient-to-r from-green-800 to-green-700 text-white shadow-lg transition-all duration-300">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo区域 - 添加首页链接 -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <h1 class="text-xl font-bold">野生动物保护test</h1>
        </NuxtLink>

        <!-- 桌面导航 - 添加搜索框和高亮状态 -->
        <div class="hidden md:flex items-center space-x-6">
          <nav class="flex space-x-6">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              :class="[isActive(link.path) ? 'text-green-300 border-b-2 border-green-400' : 'hover:text-green-200', 'transition-colors py-2 font-medium nav-link']"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>

          <!-- 搜索框 -->
          <div class="ml-8">
            <form class="relative">
              <input
                type="text"
                placeholder="搜索保护项目..."
                class="pl-10 pr-4 py-2 rounded-full text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-48 lg:w-64 transition-all placeholder:text-gray-400"
              >
              <svg
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </form>
          </div>
        </div>

        <!-- 移动端菜单按钮 -->
        <button
          class="md:hidden text-white focus:outline-none"
          @click="toggleMenu"
          aria-label="切换菜单"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="menuOpen ? 'M6 18L18 6' : 'M4 6h16'"
              style="transition: all 0.3s ease-in-out;"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="menuOpen ? 'M6 6L18 18' : 'M4 12h16'"
              :style="{ opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="menuOpen ? 'M6 6L18 18' : 'M4 18h16'"
              style="transition: all 0.3s ease-in-out;"
            />
          </svg>
        </button>
      </div>

      <!-- 移动端导航菜单 - 添加过渡动画 -->
      <Transition name="menu">
        <div
          v-show="menuOpen"
          class="md:hidden mt-4 pb-2 space-y-3"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="block hover:text-green-200 transition-colors py-2 px-3 rounded-md"
            :class="isActive(link.path) ? 'bg-green-700 text-green-300' : ''"
            @click="toggleMenu"
          >
            {{ link.name }}
          </NuxtLink>
          <NuxtLink
            to="/involve"
            class="block bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md text-center transition-colors mt-2"
            @click="toggleMenu"
          >
            立即参与
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const menuOpen = ref(false);

  // 导航链接数据化 - 便于维护
  const navLinks = [
    { path: '/', name: '首页' },
    { path: '/about', name: '关于我们' },
    { path: '/species', name: '保护物种' },
    { path: '/projects', name: '保护项目' },
    { path: '/news', name: '新闻动态' }
  ];

  // 判断当前路由是否激活
  const isActive = (path) => {
    return route.path === path;
  };

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
    // 移动端菜单打开时禁止页面滚动
    document.body.style.overflow = menuOpen.value ? 'hidden' : '';
  };
</script>

<style scoped>

  /* 导航栏滚动效果 */
  header {
    position: fixed;
    /* 改为 fixed 定位 */
    /* 之前的粘性定位会把下边正文挤压下去 */
    top: 0;
    z-index: 50;
    width: 100%;
    /* 确保宽度占满 */
  }

  header.scrolled {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  /* 优化移动端菜单过渡动画 */
  .menu-enter-active {
    transition: all .4s ease-in-out;
    /* transition: all .4s cubic-bezier(0.22, 1, 0.36, 1); */
    overflow: hidden;
    will-change: max-height, opacity, transform, margin, padding;
    /* 告知浏览器即将发生的变化 */
  }

  .menu-leave-active {
    transition: all .3s ease-in-out;
    overflow: hidden;
    will-change: max-height, opacity, transform, margin, padding;
    /* 告知浏览器即将发生的变化 */
  }

  .menu-enter-from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px) scaleY(1);
    box-shadow: none;
  }

  .menu-leave-to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px) scaleY(1);
    box-shadow: none;
    /*展开时有个mt-4,pb-2 关闭时要去掉这个margin-top. 不加这个会导致菜单关闭时，内容区域会有一个margin-top 从而看起来会卡顿一下再消失 */
    padding: 0;
    margin: 0;
  }

  .menu-enter-to,
  .menu-leave-from {
    /* mt-4 */
    margin-top: 1rem;
    /* pb-2 */
    padding-bottom: 0.5rem;
    opacity: 1;
    max-height: 500px;
    /* 根据实际菜单内容调整最大高度 */
    transform: translateY(0) scaleY(1);
  }
</style>