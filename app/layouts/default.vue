<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>

  /* 基础响应式样式 */
  @media (max-width: 768px) {
    main {
      padding: 0 1rem;
    }
  }
</style>