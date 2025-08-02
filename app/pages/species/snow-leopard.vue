<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-96 bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1066/1920/1080')"
    >
      <div class="absolute inset-0 bg-green-900 bg-opacity-70 flex items-center">
        <div class="container mx-auto px-4 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-2">雪豹</h1>
          <p class="text-xl italic">Panthera uncia</p>
          <div class="mt-4 inline-block bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
            濒危物种
          </div>
        </div>
      </div>
    </section>

    <!-- Species Details -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <h2 class="text-3xl font-bold text-green-800 mb-6">物种概述</h2>
            <div class="prose prose-lg text-gray-700 max-w-none">
              <p class="mb-6">
                雪豹是高山生态系统的顶级捕食者，主要分布在中亚和南亚的高山地区，被称为"高山幽灵"。它们对维持高山生态系统的平衡起着关键作用。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">外形特征</h3>
              <p class="mb-6">
                雪豹体长约75-150厘米，尾长80-105厘米，体重25-55公斤。它们拥有厚实的灰白色皮毛，上面有黑色斑点，长而蓬松的尾巴有助于保持平衡和在寒冷环境中保暖。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">栖息地与分布</h3>
              <p class="mb-6">
                雪豹栖息在海拔3000-4500米的高山裸岩和草甸地带，分布范围包括中国西部、蒙古、俄罗斯、印度、尼泊尔等12个国家。中国拥有全球60%以上的雪豹栖息地。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">行为特征</h3>
              <p class="mb-6">
                雪豹是独居动物，领地范围可达1000平方公里。它们主要在晨昏活动，以岩羊、北山羊等有蹄类动物为食。雪豹不会咆哮，但会发出嘶嘶声、呼噜声等声音交流。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">濒危原因</h3>
              <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>栖息地丧失：气候变化和人类活动导致栖息地减少</li>
                <li>猎物减少：过度放牧和狩猎导致食物资源减少</li>
                <li>非法贸易：皮毛和骨骼在黑市上的高价值</li>
                <li>人兽冲突：报复性猎杀</li>
              </ul>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">保护措施</h3>
              <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>跨国保护：全球雪豹及生态系统保护计划</li>
                <li>社区参与：发展可持续生计减少人兽冲突</li>
                <li>科学研究：红外相机监测和卫星追踪</li>
                <li>反盗猎行动：加强执法和边境管控</li>
                <li>公众教育：提高保护意识</li>
              </ul>
            </div>
          </div>

          <div class="lg:col-span-1">
            <!-- Species Facts -->
            <div class="bg-gray-50 rounded-lg p-6 shadow-md mb-8">
              <h3 class="text-xl font-bold text-green-800 mb-4">物种档案</h3>
              <div class="space-y-4">
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">保护级别</span>
                  <span class="font-medium">易危 (VU)</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">野生数量</span>
                  <span class="font-medium">约4,000-6,500只</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">分布区域</span>
                  <span class="font-medium">中亚12个国家</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">栖息地</span>
                  <span class="font-medium">高山裸岩和草甸</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">食性</span>
                  <span class="font-medium">肉食性（岩羊、北山羊等）</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">成年体重</span>
                  <span class="font-medium">25-55公斤</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">平均寿命</span>
                  <span class="font-medium">15-18年</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">保护状况趋势</span>
                  <span class="font-medium text-green-600">稳定</span>
                </div>
              </div>
            </div>

            <!-- Gallery -->
            <div class="bg-gray-50 rounded-lg p-6 shadow-md mb-8">
              <h3 class="text-xl font-bold text-green-800 mb-4">物种图片</h3>
              <div class="grid grid-cols-2 gap-3">
                <img
                  src="https://picsum.photos/id/1066/300/300"
                  alt="雪豹"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://picsum.photos/id/1067/300/300"
                  alt="雪豹栖息地"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://picsum.photos/id/1068/300/300"
                  alt="雪豹幼崽"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://picsum.photos/id/1069/300/300"
                  alt="雪豹捕食"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
              </div>
            </div>

            <!-- Conservation Project -->
            <div class="bg-green-50 rounded-lg p-6 shadow-md mb-8">
              <h3 class="text-xl font-bold text-green-800 mb-4">相关保护项目</h3>
              <div class="bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src="https://picsum.photos/id/1066/600/300"
                  alt="雪豹保护项目"
                  class="w-full h-40 object-cover"
                >
                <div class="p-4">
                  <h4 class="font-bold text-green-700 mb-2">雪豹栖息地保护与社区发展项目</h4>
                  <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                    该项目通过红外相机监测雪豹种群，同时帮助当地社区发展可持续生计，减少人兽冲突。
                  </p>
                  <NuxtLink
                    to="/projects/snow-leopard"
                    class="text-green-600 hover:text-green-800 text-sm font-medium"
                  >查看项目详情</NuxtLink>
                </div>
              </div>
            </div>

            <!-- Donation Button -->
            <div class="bg-green-600 text-white rounded-lg p-6 shadow-md text-center">
              <h3 class="text-xl font-bold mb-2">支持雪豹保护</h3>
              <p class="mb-4 opacity-90">您的捐赠将直接用于雪豹及其栖息地的保护工作</p>
              <NuxtLink
                to="/involve"
                class="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-md hover:bg-green-50 transition-colors mb-4"
              >
                立即捐赠
              </NuxtLink>
              <p class="text-sm opacity-80">成为"雪豹守护者"，每月定期捐赠支持</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Species -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-green-800 mb-8">相关物种</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1025/400/300"
              alt="大熊猫"
              class="w-full h-40 object-cover"
            >
            <div class="p-4">
              <h3 class="font-bold text-green-800 mb-1">大熊猫</h3>
              <p class="text-gray-500 text-sm mb-2">Ailuropoda melanoleuca</p>
              <NuxtLink
                to="/species/panda"
                class="text-green-600 hover:text-green-800 text-sm font-medium"
              >了解更多</NuxtLink>
            </div>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1062/400/300"
              alt="金丝猴"
              class="w-full h-40 object-cover"
            >
            <div class="p-4">
              <h3 class="font-bold text-green-800 mb-1">金丝猴</h3>
              <p class="text-gray-500 text-sm mb-2">Rhinopithecus roxellana</p>
              <NuxtLink
                to="/species/golden-monkey"
                class="text-green-600 hover:text-green-800 text-sm font-medium"
              >了解更多</NuxtLink>
            </div>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1074/400/300"
              alt="朱鹮"
              class="w-full h-40 object-cover"
            >
            <div class="p-4">
              <h3 class="font-bold text-green-800 mb-1">朱鹮</h3>
              <p class="text-gray-500 text-sm mb-2">Nipponia nippon</p>
              <NuxtLink
                to="/species/crested-ibis"
                class="text-green-600 hover:text-green-800 text-sm font-medium"
              >了解更多</NuxtLink>
            </div>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1080/400/300"
              alt="藏羚羊"
              class="w-full h-40 object-cover"
            >
            <div class="p-4">
              <h3 class="font-bold text-green-800 mb-1">藏羚羊</h3>
              <p class="text-gray-500 text-sm mb-2">Pantholops hodgsonii</p>
              <!-- to="/species/tibetan-antelope" -->
              <div class="text-green-600 hover:text-green-800 text-sm font-medium">了解更多 不了一点</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>