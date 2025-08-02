<template>
  <header class="bg-green-800 text-white shadow-md transition-all duration-300">
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
          <h1 class="text-xl font-bold">野生动物保护协会</h1>
        </NuxtLink>

        <!-- 桌面导航 - 添加搜索框和高亮状态 -->
        <div class="hidden md:flex items-center space-x-6">
          <nav class="flex space-x-6">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              :class="[isActive(link.path) ? 'text-green-300 border-b-2 border-green-400' : 'hover:text-green-200', 'transition-colors py-2 font-medium']"
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
                class="pl-10 pr-4 py-2 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 w-48 lg:w-64 transition-all"
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
              :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'"
            />
          </svg>
        </button>
      </div>

      <!-- 移动端导航菜单 - 添加过渡动画 -->
      <Transition name="menu">
        <div
          v-if="menuOpen"
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

  /* 移动端菜单过渡动画 */
  .menu-enter-active,
  .menu-leave-active {
    transition: all 0.3s ease;
  }

  .menu-enter-from,
  .menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  /* 导航栏滚动效果 */
  header {
    position: sticky;
    top: 0;
    z-index: 50;
  }

  header.scrolled {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
</style>