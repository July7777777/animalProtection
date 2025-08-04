<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-96 bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1059/1920/1080')"
    >
      <div class="absolute inset-0 bg-green-900 bg-opacity-70 flex items-center">
        <div class="container mx-auto px-4 text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p class="text-xl max-w-2xl">致力于野生动物保护与生物多样性维护的非营利组织</p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-green-800 mb-6">我们的使命与愿景</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-semibold text-green-700 mb-3 flex items-center">
                  <svg
                    class="w-6 h-6 mr-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  使命
                </h3>
                <p class="text-gray-700">保护全球濒危野生动物及其栖息地，通过科学研究、公众教育和社区参与，促进人与自然的和谐共处。</p>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-green-700 mb-3 flex items-center">
                  <svg
                    class="w-6 h-6 mr-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  愿景
                </h3>
                <p class="text-gray-700">建立一个人与自然和谐共生的世界，让每一个物种都能在其自然栖息地中安全生存和繁衍。</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <img
              src="https://picsum.photos/id/1069/600/800"
              alt="野生动物保护工作"
              class="rounded-lg shadow-lg w-full h-auto"
            >
            <div class="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-lg shadow-md hidden md:block">
              <p class="text-xl font-bold">15+</p>
              <p>年保护经验</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800 mb-4">我们的故事</h2>
          <div class="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div class="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <p class="mb-6">野生动物保护协会成立于2008年，由一群热爱自然和野生动物的科学家、环保人士和志愿者共同发起。我们从一个小型地方性组织发展成为如今在全国范围内具有影响力的野生动物保护机构。</p>

          <p class="mb-6">成立之初，我们专注于本地濒危物种的保护工作。随着经验的积累和影响力的扩大，我们的项目逐渐扩展到全国乃至国际范围，涉及物种保护、栖息地恢复、公众教育等多个领域。</p>

          <p>多年来，我们始终坚持科学保护、社区参与的原则，与政府部门、科研机构、企业和当地社区建立了紧密的合作关系，共同推进野生动物保护事业的发展。</p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800 mb-4">我们的团队</h2>
          <div class="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Team Member 1 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1005/400/400"
              alt="张三 - 会长"
              class="w-full h-64 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-1">张三</h3>
              <p class="text-green-600 mb-3">会长</p>
              <p class="text-gray-600 text-sm">野生动物生态学博士，拥有20年野生动物保护经验，曾任国家林业局濒危物种保护中心研究员。</p>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1000/400/400"
              alt="李四 - 项目总监"
              class="w-full h-64 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-1">李四</h3>
              <p class="text-green-600 mb-3">项目总监</p>
              <p class="text-gray-600 text-sm">环境科学硕士，负责保护项目的规划与实施，曾参与多个国际野生动物保护项目。</p>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1011/400/400"
              alt="王五 - 科研主管"
              class="w-full h-64 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-1">王五</h3>
              <p class="text-green-600 mb-3">科研主管</p>
              <p class="text-gray-600 text-sm">动物学博士，负责保护生物学研究和数据分析，发表学术论文30余篇。</p>
            </div>
          </div>

          <!-- Team Member 4 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://picsum.photos/id/1027/400/400"
              alt="赵六 - 公众教育主任"
              class="w-full h-64 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-800 mb-1">赵六</h3>
              <p class="text-green-600 mb-3">公众教育主任</p>
              <p class="text-gray-600 text-sm">环境教育专家，负责开发教育项目和公众宣传活动，致力于提高公众环保意识。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements -->
    <section class="py-16 bg-green-800 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">我们的成就</h2>
          <div class="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="p-6">
            <div class="text-4xl font-bold mb-2">200+</div>
            <div class="text-green-300">保护项目</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold mb-2">50+</div>
            <div class="text-green-300">合作国家</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold mb-2">100万+</div>
            <div class="text-green-300">志愿者</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold mb-2">500+</div>
            <div class="text-green-300">受保护物种</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800 mb-4">我们的合作伙伴</h2>
          <div class="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          <div class="h-12">
            <img
              src="https://picsum.photos/id/1/120/40"
              alt="合作伙伴1"
              class="h-full grayscale hover:grayscale-0 transition-all"
            >
          </div>
          <div class="h-12">
            <img
              src="https://picsum.photos/id/2/120/40"
              alt="合作伙伴2"
              class="h-full grayscale hover:grayscale-0 transition-all"
            >
          </div>
          <div class="h-12">
            <img
              src="https://picsum.photos/id/3/120/40"
              alt="合作伙伴3"
              class="h-full grayscale hover:grayscale-0 transition-all"
            >
          </div>
          <div class="h-12">
            <img
              src="https://picsum.photos/id/4/120/40"
              alt="合作伙伴4"
              class="h-full grayscale hover:grayscale-0 transition-all"
            >
          </div>
          <div class="h-12">
            <img
              src="https://picsum.photos/id/5/120/40"
              alt="合作伙伴5"
              class="h-full grayscale hover:grayscale-0 transition-all"
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>