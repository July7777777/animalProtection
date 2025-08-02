<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-96 bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1059/1920/1080')"
    >
      <div class="absolute inset-0 bg-green-900 bg-opacity-70 flex items-center">
        <div class="container mx-auto px-4 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">保护项目</h1>
          <p class="text-xl max-w-2xl">我们正在进行的野生动物保护工作</p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800 mb-4">我们的保护工作</h2>
          <div class="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p class="text-gray-700 leading-relaxed">
            我们开展多种类型的保护项目，从物种保护到栖息地恢复，从社区参与到政策倡导。每个项目都基于科学研究和实地调查，旨在提供有效的保护解决方案。
          </p>
        </div>
      </div>
    </section>

    <!-- Project Categories -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <button class="bg-green-600 text-white py-3 px-4 rounded-md">全部项目</button>
          <button class="bg-white text-green-800 py-3 px-4 rounded-md hover:bg-green-50 transition-colors">物种保护</button>
          <button
            class="bg-white text-green-800 py-3 px-4 rounded-md hover:bg-green-50 transition-colors">栖息地恢复</button>
          <button class="bg-white text-green-800 py-3 px-4 rounded-md hover:bg-green-50 transition-colors">社区参与</button>
          <button class="bg-white text-green-800 py-3 px-4 rounded-md hover:bg-green-50 transition-colors">反盗猎</button>
          <button class="bg-white text-green-800 py-3 px-4 rounded-md hover:bg-green-50 transition-colors">科学研究</button>
          <button class="bg-white text-green-800 py-3 px-4 rounded-md hover:bg-green-50 transition-colors">公众教育</button>
          <button class="bg-white text-green-800 py-3 px-4 rounded-md hover:bg-green-50 transition-colors">政策倡导</button>
        </div>
      </div>
    </section>

    <!-- Featured Project -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="bg-green-50 rounded-lg overflow-hidden shadow-lg">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative h-80 lg:h-auto">
              <img
                src="https://picsum.photos/id/1059/800/600"
                alt="大熊猫保护项目"
                class="absolute inset-0 w-full h-full object-cover"
              >
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <div class="inline-block bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full mb-4">
                旗舰项目
              </div>
              <h2 class="text-3xl font-bold text-green-800 mb-4">大熊猫栖息地保护与恢复项目</h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                该项目旨在保护和恢复大熊猫的自然栖息地，改善栖息地质量，促进野生种群增长。通过建立生态廊道连接碎片化的栖息地，减少人为干扰，恢复竹林生态系统，为大熊猫提供更广阔的生存空间。
              </p>
              <div class="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p class="text-sm text-gray-500 mb-1">项目地点</p>
                  <p class="font-medium">四川卧龙、唐家河自然保护区</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">实施时间</p>
                  <p class="font-medium">2018-2025年</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">项目预算</p>
                  <p class="font-medium">1200万元</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">完成进度</p>
                  <p class="font-medium">65%</p>
                </div>
              </div>
              <div class="flex flex-wrap gap-4">
                <NuxtLink
                  to="/projects/panda"
                  class="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  了解项目详情
                </NuxtLink>
                <NuxtLink
                  to="/involve"
                  class="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-md transition-colors"
                >
                  支持该项目
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project List -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-green-800 mb-8">其他保护项目</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
            <div class="relative h-56 overflow-hidden">
              <img
                src="https://picsum.photos/id/1015/600/400"
                alt="海洋生物保护项目"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                栖息地恢复
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">海洋生物多样性保护与珊瑚礁恢复项目</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                该项目致力于保护海洋生态系统，恢复受损珊瑚礁，建立海洋保护区，打击非法捕捞，保护濒危海洋生物。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">珊瑚礁恢复</span>
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">海洋保护区</span>
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">可持续渔业</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">
                  <span class="mr-4">南海海域</span>
                  <span>2020-2026</span>
                </div>
                <NuxtLink
                  to="/projects/marine"
                  class="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  查看详情 <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
            <div class="relative h-56 overflow-hidden">
              <img
                src="https://picsum.photos/id/1058/600/400"
                alt="森林保护计划"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                栖息地恢复
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">热带雨林生物多样性保护与恢复计划</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                保护生物多样性热点地区森林，恢复退化生态系统，建立森林走廊，促进物种迁移，提高森林生态系统的连通性和稳定性。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">森林恢复</span>
                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">廊道建设</span>
                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">社区林业</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">
                  <span class="mr-4">云南西双版纳</span>
                  <span>2019-2025</span>
                </div>
                <NuxtLink
                  to="/projects/forest"
                  class="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  查看详情 <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Project Card 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
            <div class="relative h-56 overflow-hidden">
              <img
                src="https://picsum.photos/id/1074/600/400"
                alt="朱鹮保护项目"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                物种保护
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">朱鹮野化放归与种群恢复项目</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                通过人工繁育、野化训练和放归自然，扩大朱鹮的分布范围和种群数量，建立稳定的野生种群，确保该物种的长期生存。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">人工繁育</span>
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">野化放归</span>
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">种群监测</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">
                  <span class="mr-4">陕西洋县</span>
                  <span>2017-2024</span>
                </div>
                <NuxtLink
                  to="/projects/crested-ibis"
                  class="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  查看详情 <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Project Card 4 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
            <div class="relative h-56 overflow-hidden">
              <img
                src="https://picsum.photos/id/1062/600/400"
                alt="金丝猴保护项目"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                物种保护
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">金丝猴保护与生态廊道建设项目</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                保护金丝猴栖息地，建设生态廊道连接碎片化的栖息地，促进不同种群间的基因交流，提高金丝猴的生存能力。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">栖息地保护</span>
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">廊道建设</span>
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">种群监测</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">
                  <span class="mr-4">四川、湖北、陕西</span>
                  <span>2019-2025</span>
                </div>
                <NuxtLink
                  to="/projects/golden-monkey"
                  class="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  查看详情 <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Project Card 5 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
            <div class="relative h-56 overflow-hidden">
              <img
                src="https://picsum.photos/id/1066/600/400"
                alt="雪豹保护项目"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                物种保护
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-2">雪豹保护与反盗猎项目</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                该项目旨在保护雪豹及其猎物，加强反盗猎执法能力，改善栖息地质量，促进人与雪豹的共存，确保这一珍稀物种的生存安全。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">反盗猎</span>
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">物种监测</span>
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">社区共管</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-sm text-gray-500">
                  <span class="mr-4">青藏高原</span>
                  <span>2020-2026</span>
                </div>
                <NuxtLink
                  to="/projects/snow-leopard"
                  class="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  查看详情 <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button
            class="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-md transition-colors"
          >
            加载更多项目
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
