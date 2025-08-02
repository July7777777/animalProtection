<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-96 bg-cover bg-center"
      style="background-image: url('https://picsum.photos/id/1060/1920/1080')"
    >
      <div class="absolute inset-0 bg-green-900 bg-opacity-70 flex items-center">
        <div class="container mx-auto px-4 text-white text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">参与保护行动</h1>
          <p class="text-xl max-w-2xl mx-auto">您的每一个行动都能为野生动物保护贡献力量</p>
        </div>
      </div>
    </section>

    <!-- Donation Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800 mb-4">捐赠支持</h2>
          <div class="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Donation Option 1 -->
          <div class="bg-gray-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-green-800 mb-4">一次性捐赠</h3>
            <p class="text-gray-600 mb-6">支持我们的保护项目，帮助野生动物获得更好的生存环境</p>
            <button
              @click="handleClick"
              class="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-md transition-colors w-full"
            >
              立即捐赠
            </button>
          </div>

          <!-- Donation Option 2 -->
          <div class="bg-gray-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-green-800 mb-4">月度捐赠</h3>
            <p class="text-gray-600 mb-6">成为长期支持者，每月定期为野生动物保护贡献力量</p>
            <button
              @click="handleClick"
              class="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-md transition-colors w-full"
            >
              每月捐赠
            </button>
          </div>

          <!-- Donation Option 3 -->
          <div class="bg-gray-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-green-800 mb-4">指定项目捐赠</h3>
            <p class="text-gray-600 mb-6">选择您关心的特定保护项目进行定向支持</p>
            <button
              @click="handleClick"
              class="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-md transition-colors w-full"
            >
              选择项目
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteer Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800 mb-4">志愿者报名</h2>
          <div class="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-gray-700 font-medium mb-2"
                >姓名</label>
                <input
                  id="name"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                >
              </div>
              <div>
                <label
                  for="email"
                  class="block text-gray-700 font-medium mb-2"
                >电子邮箱</label>
                <input
                  id="email"
                  type="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                >
              </div>
            </div>

            <div>
              <label
                for="phone"
                class="block text-gray-700 font-medium mb-2"
              >联系电话</label>
              <input
                id="phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
            </div>

            <div>
              <label
                for="location"
                class="block text-gray-700 font-medium mb-2"
              >所在城市</label>
              <input
                id="location"
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
            </div>

            <div>
              <label
                for="interest"
                class="block text-gray-700 font-medium mb-2"
              >感兴趣的志愿者活动</label>
              <select
                id="interest"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">请选择</option>
                <option value="education">公众教育活动</option>
                <option value="field">野外保护工作</option>
                <option value="research">科研协助</option>
                <option value="event">活动组织</option>
                <option value="other">其他</option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-gray-700 font-medium mb-2"
              >个人简介</label>
              <textarea
                id="message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>

            <button
              @click="handleClick"
              type="submit"
              class="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              提交申请
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-green-800 text-white">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="text-3xl font-bold mb-4">订阅我们的电子通讯</h2>
        <p class="text-xl mb-8">获取最新的野生动物保护资讯和活动信息</p>

        <form class="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="您的邮箱地址"
            class="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
            required
          >
          <button
            @click="handleClick"
            type="submit"
            class="bg-white hover:bg-green-50 text-green-600 font-bold py-3 px-6 rounded-md transition-colors whitespace-nowrap"
          >
            立即订阅
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
  const handleClick = () => {
    alert('功德+1')
  }
</script>
<style scoped>

  /* 响应式样式 */
  @media (max-width: 768px) {
    section {
      padding: 3rem 1rem;
    }
  }
</style>