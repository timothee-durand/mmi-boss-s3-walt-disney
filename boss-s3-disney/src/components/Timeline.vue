<template>
  <div class="timeline d-flex ">
    <div class="timeline-line">
    </div>
    <div class="d-flex flex-column">
      <EventTimeline v-for="event in events" :key="event.date" :event="event"/>
    </div>
  </div>
</template>
<script>
import EventTimeline from "@/components/EventTimeline.vue";

export default {
  name: 'Timeline',
  components: {EventTimeline},
  props: {
    events: {
      type: Array
    },
  },
}
</script>
