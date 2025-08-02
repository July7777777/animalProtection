<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-96 bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1069/1920/1080')"
    >
      <div class="absolute inset-0 bg-green-900 bg-opacity-70 flex items-center">
        <div class="container mx-auto px-4 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">新闻动态</h1>
          <p class="text-xl">了解野生动物保护最新资讯</p>
        </div>
      </div>
    </section>

    <!-- News List -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- News Card 1 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1062/600/400"
              alt="野生动物保护新政策"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <div class="text-gray-500 text-sm mb-2">2023-11-15</div>
              <h3 class="text-xl font-bold text-green-800 mb-2">国家出台新政策加强野生动物保护</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">近日，国家林业和草原局发布新政策，进一步加强野生动物保护力度，扩大保护区域...</p>
              <NuxtLink
                to="/news/policy"
                class="text-green-600 hover:text-green-800 font-medium"
              >阅读全文 →</NuxtLink>
            </div>
          </div>

          <!-- News Card 2 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1058/600/400"
              alt="志愿者活动"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <div class="text-gray-500 text-sm mb-2">2023-11-10</div>
              <h3 class="text-xl font-bold text-green-800 mb-2">全国大学生野生动物保护志愿者招募</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">我们将在全国20个城市开展大学生野生动物保护志愿者活动，欢迎热爱自然的你加入...</p>
              <NuxtLink
                to="/news/volunteer"
                class="text-green-600 hover:text-green-800 font-medium"
              >阅读全文 →</NuxtLink>
            </div>
          </div>

          <!-- News Card 3 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1057/600/400"
              alt="科研成果"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <div class="text-gray-500 text-sm mb-2">2023-11-05</div>
              <h3 class="text-xl font-bold text-green-800 mb-2">珍稀物种保护科研取得重大突破</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">我国科学家在珍稀物种人工繁殖技术方面取得重大突破，为濒危物种保护带来新希望...</p>
              <NuxtLink
                to="/news/research"
                class="text-green-600 hover:text-green-800 font-medium"
              >阅读全文 →</NuxtLink>
            </div>
          </div>

          <!-- News Card 4 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1040/600/400"
              alt="栖息地恢复"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <div class="text-gray-500 text-sm mb-2">2023-10-28</div>
              <h3 class="text-xl font-bold text-green-800 mb-2">大熊猫栖息地恢复项目取得显著成效</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">经过5年的努力，四川大熊猫栖息地恢复项目已完成70%，野生种群数量稳步增长...</p>
              <NuxtLink
                to="/news/habitat"
                class="text-green-600 hover:text-green-800 font-medium"
              >阅读全文 →</NuxtLink>
            </div>
          </div>

          <!-- News Card 5 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1036/600/400"
              alt="国际会议"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <div class="text-gray-500 text-sm mb-2">2023-10-15</div>
              <h3 class="text-xl font-bold text-green-800 mb-2">国际野生动物保护大会在京召开</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">来自50多个国家的专家齐聚北京，共同探讨全球野生动物保护面临的挑战与解决方案...</p>
              <NuxtLink
                to="/news/conference"
                class="text-green-600 hover:text-green-800 font-medium"
              >阅读全文 →</NuxtLink>
            </div>
          </div>

          <!-- News Card 6 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1044/600/400"
              alt="社区参与"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <div class="text-gray-500 text-sm mb-2">2023-10-05</div>
              <h3 class="text-xl font-bold text-green-800 mb-2">社区参与野生动物保护成效显著</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">云南西双版纳地区通过社区共管模式，成功减少了人兽冲突，提高了当地居民保护意识...</p>
              <NuxtLink
                to="/news/community"
                class="text-green-600 hover:text-green-800 font-medium"
              >阅读全文 →</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-12 flex justify-center">
          <div class="flex space-x-2">
            <button class="bg-green-600 text-white px-4 py-2 rounded-md">1</button>
            <button class="bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">2</button>
            <button class="bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">3</button>
            <button class="bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">下一页 →</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>