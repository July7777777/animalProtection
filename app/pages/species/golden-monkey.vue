<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-96 bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1062/1920/1080')"
    >
      <div class="absolute inset-0 bg-green-900 bg-opacity-70 flex items-center">
        <div class="container mx-auto px-4 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-2">金丝猴</h1>
          <p class="text-xl italic">Rhinopithecus roxellana</p>
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
                金丝猴是中国特有的珍稀灵长类动物，属于猴科疣猴亚科，因其金色的毛发和蓝色的面部而闻名。它们是世界上分布海拔最高的非人灵长类动物之一。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">外形特征</h3>
              <p class="mb-6">
                金丝猴体长约50-83厘米，尾长55-97厘米，体重15-40公斤。成年雄性体型明显大于雌性。它们最显著的特征是金色的长毛，面部呈淡蓝色，鼻孔上仰，无颊囊。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">栖息地与分布</h3>
              <p class="mb-6">
                金丝猴主要分布在中国四川、甘肃、陕西和湖北的高山森林中，栖息海拔1500-3400米。它们偏好温带和寒温带的针阔混交林，这些地区冬季寒冷，夏季凉爽。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">社会结构</h3>
              <p class="mb-6">
                金丝猴具有复杂的社会结构，通常由一雄多雌及其后代组成家庭群，多个家庭群组成大群。它们有严格的等级制度，通过梳理毛发、共同休息等方式维持社会关系。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">濒危原因</h3>
              <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>栖息地破坏：森林砍伐导致栖息地碎片化</li>
                <li>非法捕猎：历史上因皮毛和传统医药需求被猎杀</li>
                <li>气候变化：影响食物资源的季节性可获得性</li>
                <li>人类活动干扰：旅游和基础设施建设影响栖息地质量</li>
              </ul>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">保护措施</h3>
              <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>建立自然保护区：如四川九寨沟、湖北神农架等保护区</li>
                <li>生态廊道建设：连接碎片化的栖息地</li>
                <li>社区共管：鼓励当地居民参与保护</li>
                <li>科学研究：开展种群监测和生态学研究</li>
                <li>公众教育：提高保护意识，减少人为干扰</li>
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
                  <span class="font-medium">濒危 (EN)</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">野生数量</span>
                  <span class="font-medium">约15,000只</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">分布区域</span>
                  <span class="font-medium">中国四川、甘肃、陕西、湖北</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">栖息地</span>
                  <span class="font-medium">高山森林</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">食性</span>
                  <span class="font-medium">杂食性（树叶、果实、地衣等）</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">成年体重</span>
                  <span class="font-medium">15-40公斤</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">平均寿命</span>
                  <span class="font-medium">20-25年</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">保护状况趋势</span>
                  <span class="font-medium text-green-600">缓慢回升</span>
                </div>
              </div>
            </div>

            <!-- Gallery -->
            <div class="bg-gray-50 rounded-lg p-6 shadow-md mb-8">
              <h3 class="text-xl font-bold text-green-800 mb-4">物种图片</h3>
              <div class="grid grid-cols-2 gap-3">
                <img
                  src="https://picsum.photos/id/1062/300/300"
                  alt="金丝猴"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://picsum.photos/id/1063/300/300"
                  alt="金丝猴群体"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://picsum.photos/id/1066/300/300"
                  alt="金丝猴幼崽"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://picsum.photos/id/1065/300/300"
                  alt="金丝猴栖息地"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
              </div>
            </div>

            <!-- Conservation Project -->
            <div class="bg-green-50 rounded-lg p-6 shadow-md mb-8">
              <h3 class="text-xl font-bold text-green-800 mb-4">相关保护项目</h3>
              <div class="bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src="https://picsum.photos/id/1062/600/300"
                  alt="金丝猴保护项目"
                  class="w-full h-40 object-cover"
                >
                <div class="p-4">
                  <h4 class="font-bold text-green-700 mb-2">金丝猴栖息地保护与生态廊道建设项目</h4>
                  <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                    该项目旨在保护金丝猴栖息地，建设生态廊道连接碎片化的栖息地，促进不同种群间的基因交流。
                  </p>
                  <NuxtLink
                    to="/projects/golden-monkey"
                    class="text-green-600 hover:text-green-800 text-sm font-medium"
                  >查看项目详情</NuxtLink>
                </div>
              </div>
            </div>

            <!-- Donation Button -->
            <div class="bg-green-600 text-white rounded-lg p-6 shadow-md text-center">
              <h3 class="text-xl font-bold mb-2">支持金丝猴保护</h3>
              <p class="mb-4 opacity-90">您的捐赠将直接用于金丝猴及其栖息地的保护工作</p>
              <NuxtLink
                to="/involve"
                class="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-md hover:bg-green-50 transition-colors mb-4"
              >
                立即捐赠
              </NuxtLink>
              <p class="text-sm opacity-80">成为"金丝猴守护者"，每月定期捐赠支持</p>
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
              src="https://picsum.photos/id/1066/400/300"
              alt="雪豹"
              class="w-full h-40 object-cover"
            >
            <div class="p-4">
              <h3 class="font-bold text-green-800 mb-1">雪豹</h3>
              <p class="text-gray-500 text-sm mb-2">Panthera uncia</p>
              <NuxtLink
                to="/species/snow-leopard"
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
              <!-- to="/species/crested-ibis" -->
              <div class="text-green-600 hover:text-green-800 text-sm font-medium">了解更多 不了一点</div>
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