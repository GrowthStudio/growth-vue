<template>
  <div id="home-tab-a-view">
    <p>
      <img src="../../assets/logo.png" alt="vue logo">
    </p>
    <p>Hello from vue & vux</p>
    <div class="timeline-demo">
      <timeline>
        <timeline-item>
          <h4 class="recent">Timeline Node 1</h4>
          <p class="recent">2017-05-22 23:23:00</p>
        </timeline-item>
        <timeline-item>
          <h4>Timeline Node 2</h4>
          <p>2017-05-22 10:23:00</p>
        </timeline-item>
        <timeline-item>
          <h4>Timeline Node 3</h4>
          <p>2017-05-22 01:23:00</p>
        </timeline-item>
      </timeline>
    </div>
  </div>
</template>

<style lang="less">
#home-tab-a-view {
  text-align: center
}
</style>

<script>
import { Timeline, TimelineItem } from 'vux'
export default {
  data() {
    return {}
  },
  components: {
    Timeline,
    TimelineItem
  }
}
</script>
