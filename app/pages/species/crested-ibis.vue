<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-96 bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1025/1920/1080')"
    >
      <div class="absolute inset-0 bg-green-900 bg-opacity-70 flex items-center">
        <div class="container mx-auto px-4 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-2">大熊猫</h1>
          <p class="text-xl italic">Ailuropoda melanoleuca</p>
          <div class="mt-4 inline-block bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
            极度濒危物种
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
                大熊猫是中国特有的珍稀哺乳动物，属于熊科，是世界生物多样性保护的旗舰物种。它们以黑白相间的皮毛、圆胖的体型和标志性的黑眼圈而闻名于世，深受全球人民的喜爱。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">外形特征</h3>
              <p class="mb-6">
                大熊猫体型肥硕似熊，头圆尾短，头部和身体毛色黑白相间分明，但黑非纯黑，白也不是纯白，而是黑中透褐，白中带黄。成年熊猫体长约120-190厘米，体重85-125公斤。它们的爪子锋利，前后肢都有五趾，此外还有一个由腕骨特化而成的"伪拇指"，可以帮助它们抓握竹子。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">栖息地与分布</h3>
              <p class="mb-6">
                野生大熊猫主要栖息在中国四川、陕西和甘肃省的高山竹林中，海拔高度在1200-3500米之间。这些地区气候凉爽湿润，竹林茂密，为大熊猫提供了丰富的食物来源和隐蔽的栖息环境。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">饮食习惯</h3>
              <p class="mb-6">
                尽管大熊猫属于食肉目动物，但它们的食性高度特化，99%的食物是竹子。一只成年大熊猫每天需要消耗约12-38公斤的竹子，花费10-16小时进食。它们主要食用竹叶、竹笋和竹茎，偶尔也会吃少量的其他植物或小型啮齿动物。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">繁殖与生命周期</h3>
              <p class="mb-6">
                大熊猫繁殖率较低，雌性每年只有一次发情期，持续2-3天。妊娠期约为95-160天，通常每胎产1-2只幼崽。新生幼崽体重仅约100克，全身粉红色，几乎无毛，眼睛紧闭，完全依赖母亲照顾。幼崽在18-24个月大时开始独立生活，寿命约为20-30年。
              </p>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">濒危原因</h3>
              <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>栖息地破坏和碎片化：人类活动导致大熊猫栖息地不断缩小和分割</li>
                <li>食物资源单一：高度依赖竹子，一旦竹林开花枯死，将面临食物危机</li>
                <li>繁殖能力低：发情期短，繁殖率低，幼崽存活率不高</li>
                <li>历史上的非法捕猎：为获取皮毛而进行的偷猎活动</li>
              </ul>

              <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">保护措施</h3>
              <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>建立自然保护区：目前已建立67个大熊猫自然保护区</li>
                <li>实施圈养繁育计划：通过人工繁殖增加个体数量</li>
                <li>开展野化放归：将圈养个体逐步放归自然，扩大野生种群</li>
                <li>建设生态廊道：连接碎片化的栖息地，促进个体交流</li>
                <li>公众教育与意识提升：提高公众对大熊猫保护的认识和支持</li>
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
                  <span class="font-medium">极度濒危 (CR)</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">野生数量</span>
                  <span class="font-medium">约1,864只</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">分布区域</span>
                  <span class="font-medium">中国四川、陕西、甘肃</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">栖息地</span>
                  <span class="font-medium">高山竹林</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">食性</span>
                  <span class="font-medium">植食性（主要吃竹子）</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">成年体重</span>
                  <span class="font-medium">85-125公斤</span>
                </div>
                <div class="flex justify-between pb-3 border-b border-gray-200">
                  <span class="text-gray-600">平均寿命</span>
                  <span class="font-medium">20-30年</span>
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
                  src="https://picsum.photos/id/1025/300/300"
                  alt="大熊猫"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://picsum.photos/id/1069/300/300"
                  alt="大熊猫进食"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://picsum.photos/id/1074/300/300"
                  alt="大熊猫幼崽"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://picsum.photos/id/1080/300/300"
                  alt="大熊猫栖息地"
                  class="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                >
              </div>
            </div>

            <!-- Conservation Project -->
            <div class="bg-green-50 rounded-lg p-6 shadow-md mb-8">
              <h3 class="text-xl font-bold text-green-800 mb-4">相关保护项目</h3>
              <div class="bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src="https://picsum.photos/id/1059/600/300"
                  alt="大熊猫保护项目"
                  class="w-full h-40 object-cover"
                >
                <div class="p-4">
                  <h4 class="font-bold text-green-700 mb-2">大熊猫栖息地保护与恢复项目</h4>
                  <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                    该项目旨在保护和恢复大熊猫的自然栖息地，改善栖息地质量，促进野生种群增长。
                  </p>
                  <NuxtLink
                    to="/projects/panda"
                    class="text-green-600 hover:text-green-800 text-sm font-medium"
                  >查看项目详情</NuxtLink>
                </div>
              </div>
            </div>

            <!-- Donation Button -->
            <div class="bg-green-600 text-white rounded-lg p-6 shadow-md text-center">
              <h3 class="text-xl font-bold mb-2">支持大熊猫保护</h3>
              <p class="mb-4 opacity-90">您的捐赠将直接用于大熊猫及其栖息地的保护工作</p>
              <NuxtLink
                to="/involve"
                class="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-md hover:bg-green-50 transition-colors mb-4"
              >
                立即捐赠
              </NuxtLink>
              <p class="text-sm opacity-80">成为"熊猫守护者"，每月定期捐赠支持</p>
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