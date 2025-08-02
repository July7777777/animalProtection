<script setup lang="ts">
  import { useToast } from '#imports'

  const toast = useToast()
  const handleClick = () => {
    alert('功德+1')
  }
</script>

<template>
  <div class="relative">
    <!-- 英雄区域 -->
    <section
      class="relative h-[80vh] bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1025/1920/1080')"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="text-center text-white px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">保护野生动物，守护自然家园</h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">每一个物种都有生存的权利，让我们共同努力，为野生动物创造一个安全的未来</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <div
              to="/involve"
              class="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors"
              @click="handleClick"
            >
              立即捐赠
            </div>
            <NuxtLink
              to="/species"
              class="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors"
            >
              了解濒危物种
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 使命宣言 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800 mb-4">我们的使命</h2>
          <div class="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div class="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p class="mb-6">我们致力于保护全球濒危野生动物及其栖息地，通过科学研究、公众教育和社区参与，促进人与自然的和谐共处。</p>
          <p>我们相信每一个生命都值得尊重和保护，通过联合政府、企业和公众的力量，我们可以为野生动物创造一个更安全的未来。</p>
        </div>
      </div>
    </section>

    <!-- 特色项目 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800 mb-4">我们的保护项目</h2>
          <div class="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 项目卡片 1 -->
          <div
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
          >
            <img
              src="https://picsum.photos/id/1024/600/400"
              alt="大熊猫保护项目"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">大熊猫保护项目</h3>
              <p class="text-gray-600 mb-4">致力于保护大熊猫及其栖息地，促进野生种群恢复。</p>
              <NuxtLink
                to="/species/panda"
                class="text-green-600 hover:text-green-800 font-medium"
              >了解更多 →</NuxtLink>
            </div>
          </div>

          <!-- 项目卡片 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1015/600/400"
              alt="海洋生物保护"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">海洋生物保护</h3>
              <p class="text-gray-600 mb-4">保护海洋生态系统，打击非法捕捞，拯救濒危海洋生物。</p>
              <NuxtLink
                to="/projects/golden-monkey"
                class="text-green-600 hover:text-green-800 font-medium"
              >了解更多 →</NuxtLink>
            </div>
          </div>

          <!-- 项目卡片 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1059/600/400"
              alt="森林保护计划"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">森林保护计划</h3>
              <p class="text-gray-600 mb-4">保护生物多样性热点地区森林，恢复退化生态系统。</p>
              <NuxtLink
                to="/projects/snow-leopard"
                class="text-green-600 hover:text-green-800 font-medium"
              >了解更多 →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据统计 -->
    <section class="py-12 bg-green-800 text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">200+</div>
            <div class="text-green-200">保护项目</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">50+</div>
            <div class="text-green-200">合作国家</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">100万+</div>
            <div class="text-green-200">志愿者</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">500+</div>
            <div class="text-green-200">受保护物种</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新资讯 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl font-bold text-green-800 mb-2">最新资讯</h2>
            <div class="w-24 h-1 bg-green-600"></div>
          </div>
          <NuxtLink
            to="/news"
            class="text-green-600 hover:text-green-800 font-medium hidden md:block"
          >查看全部资讯 →</NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 新闻卡片 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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

          <!-- 新闻卡片 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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

          <!-- 新闻卡片 3 -->
          <div class="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
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
        </div>

        <div class="text-center mt-8 md:hidden">
          <NuxtLink
            to="/news"
            class="text-green-600 hover:text-green-800 font-medium"
          >查看全部资讯 →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 订阅区域 -->
    <section class="py-16 bg-green-50">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-green-800 mb-4">订阅我们的电子通讯</h2>
        <p class="text-lg text-gray-600 mb-8">获取最新的野生动物保护资讯和活动信息</p>

        <form class="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="您的邮箱地址"
            class="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            required
          >
          <button
            type="submit"
            class="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-md transition-colors whitespace-nowrap"
          >
            立即订阅
          </button>
        </form>
      </div>
    </section>
  </div>
</template>