<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- 错误内容区域 -->
    <div class="flex-grow flex flex-col items-center justify-center px-4 py-16 text-center">
      <div class="relative w-full max-w-3xl mx-auto">
        <!-- 野生动物插图 -->
        <div class="mb-8 relative">
          <img
            src="https://picsum.photos/id/1069/600/400"
            alt="迷路的小动物"
            class="rounded-lg shadow-lg mx-auto max-w-full h-auto"
          >
          <div
            class="absolute -top-4 -right-4 bg-green-600 text-white text-4xl font-bold rounded-full w-20 h-20 flex items-center justify-center shadow-lg transform rotate-12"
          >
            404
          </div>
        </div>

        <!-- 错误信息 -->
        <h1 class="text-4xl md:text-5xl font-bold text-green-800 mb-4">页面迷路了</h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          抱歉，您寻找的页面好像跑进了森林深处。不过别担心，我们可以一起把它找回来！
        </p>

        <!-- 操作按钮 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <NuxtLink
            to="/"
            class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors"
          >
            返回首页
          </NuxtLink>
          <NuxtLink
            to="/species"
            class="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-md text-lg transition-colors"
          >
            探索野生动物
          </NuxtLink>
        </div>

        <!-- 推荐内容 -->
        <div class="bg-white rounded-lg shadow-md p-6 mt-12">
          <h2 class="text-2xl font-bold text-green-800 mb-4">也许您想了解这些</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- <NuxtLink
              to="/projects"
              class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors"
            >
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <i class="fa fa-paw text-green-600 text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-green-800">保护项目</h3>
                <p class="text-gray-600 text-sm">探索我们正在进行的野生动物保护项目</p>
              </div>
            </NuxtLink> -->
            <NuxtLink
              to="/species"
              class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors"
            >
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 aspect-square">
                <i class="fa fa-paw text-green-600 text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-green-800">保护项目</h3>
                <p class="text-gray-600 text-sm">探索我们正在进行的野生动物保护项目</p>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/species"
              class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors"
            >
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 aspect-square">
                <i class="fa fa-paw text-green-600 text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-green-800">濒危物种</h3>
                <p class="text-gray-600 text-sm">了解需要我们保护的珍稀野生动物</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>