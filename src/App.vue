<script setup>

import background1 from '@/assets/lubotu/background1.jpg'
import background2 from '@/assets/lubotu/background2.jpg'
import background3 from '@/assets/lubotu/background3.jpg'
import background4 from '@/assets/lubotu/background4.jpg'
import background5 from '@/assets/lubotu/background5.jpg'
import background6 from '@/assets/lubotu/background6.jpg'
import background7 from '@/assets/lubotu/background7.jpg'
import background8 from '@/assets/lubotu/background8.jpg'
</script>

<script>
export default {
  name: 'Main',
  data() {
    return {
      backgroundList: [background1, background2, background3, background4, background5, background6, background7, background8]
    }
  }
}
</script>

<template>
  <div><img :src="background1"></div>
  <!-- <div>
    <div class="block text-center">
      <el-carousel height="100%">
        <el-carousel-item v-for="item in 4" :key="backgroundList">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div> -->
</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel-item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
