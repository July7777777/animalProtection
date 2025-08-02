<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-64 bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1024/1920/1080')"
    >
      <div class="absolute inset-0 bg-green-900 bg-opacity-70 flex items-center">
        <div class="container mx-auto px-4 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-2">保护物种</h1>
          <p class="text-xl">探索我们致力于保护的濒危野生动物</p>
        </div>
      </div>
    </section>

    <!-- Species List -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            to="/species/panda"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <img
              src="https://picsum.photos/id/1025/600/400"
              alt="大熊猫"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">大熊猫</h3>
              <p class="text-gray-600 mb-4">Ailuropoda melanoleuca</p>
              <div class="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">极度濒危</div>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/species/golden-monkey"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <img
              src="https://picsum.photos/id/1080/600/400"
              alt="金丝猴"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">金丝猴</h3>
              <p class="text-gray-600 mb-4">Rhinopithecus roxellana</p>
              <div class="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">濒危</div>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/species/snow-leopard"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <img
              src="https://picsum.photos/id/1074/600/400"
              alt="雪豹"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">雪豹</h3>
              <p class="text-gray-600 mb-4">Panthera uncia</p>
              <div class="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">濒危</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  // 这里可以添加页面逻辑
</script>

<style scoped>
  /* 这里可以添加样式 */
</style>