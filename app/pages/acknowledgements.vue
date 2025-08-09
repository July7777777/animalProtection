<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-64 bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1063/1920/1080')"
    >
      <div class="absolute inset-0 bg-green-900 bg-opacity-70 flex items-center">
        <div class="container mx-auto px-4 text-white">
          <h1 class="text-3xl md:text-4xl font-bold mb-2">致谢与资源许可</h1>
          <p class="text-lg">感谢所有为野生动物保护事业提供支持的资源与贡献者</p>
        </div>
      </div>
    </section>

    <!-- Acknowledgements Content -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-bold text-green-800 mb-8 text-center">图片资源</h2>
          <div class="space-y-8">
            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-bold text-green-700 mb-3">Picsum Photos</h3>
              <p class="text-gray-600 mb-4">本网站使用的示例图片来自Picsum Photos，这是一个提供免费高质量随机图片的服务。</p>
              <div class="bg-white p-4 rounded border border-gray-200">
                <p class="text-sm text-gray-700 font-medium mb-2">许可证信息:</p>
                <p class="text-sm text-gray-600">Picsum Photos提供的图片可用于个人和商业用途，无需署名，但我们仍然感谢其提供的优质资源。</p>
                <a href="https://picsum.photos/" class="text-green-600 hover:text-green-800 text-sm font-medium mt-2 inline-block" target="_blank" rel="noopener noreferrer">访问Picsum Photos</a>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-green-800 mb-8 mt-16 text-center">开源库与框架</h2>
          <div class="space-y-8">
            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-bold text-green-700 mb-3">Vue.js</h3>
              <p class="text-gray-600 mb-4">Vue.js是一个用于构建用户界面的渐进式框架。</p>
              <div class="bg-white p-4 rounded border border-gray-200">
                <p class="text-sm text-gray-700 font-medium mb-2">许可证信息:</p>
                <p class="text-sm text-gray-600">MIT License</p>
                <a href="https://vuejs.org/" class="text-green-600 hover:text-green-800 text-sm font-medium mt-2 inline-block" target="_blank" rel="noopener noreferrer">访问Vue.js官网</a>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-bold text-green-700 mb-3">Nuxt.js</h3>
              <p class="text-gray-600 mb-4">Nuxt.js是一个基于Vue.js的服务端渲染应用框架。</p>
              <div class="bg-white p-4 rounded border border-gray-200">
                <p class="text-sm text-gray-700 font-medium mb-2">许可证信息:</p>
                <p class="text-sm text-gray-600">MIT License</p>
                <a href="https://nuxtjs.org/" class="text-green-600 hover:text-green-800 text-sm font-medium mt-2 inline-block" target="_blank" rel="noopener noreferrer">访问Nuxt.js官网</a>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-bold text-green-700 mb-3">Tailwind CSS</h3>
              <p class="text-gray-600 mb-4">Tailwind CSS是一个功能类优先的CSS框架，用于快速构建自定义界面。</p>
              <div class="bg-white p-4 rounded border border-gray-200">
                <p class="text-sm text-gray-700 font-medium mb-2">许可证信息:</p>
                <p class="text-sm text-gray-600">MIT License</p>
                <a href="https://tailwindcss.com/" class="text-green-600 hover:text-green-800 text-sm font-medium mt-2 inline-block" target="_blank" rel="noopener noreferrer">访问Tailwind CSS官网</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  /* 响应式样式调整 */
  @media (max-width: 768px) {
    section {
      padding: 2rem 1rem;
    }

    h1 {
      font-size: 2.5rem !important;
    }

    h2 {
      font-size: 1.8rem !important;
    }

    h3 {
      font-size: 1.5rem !important;
    }
  }
</style>