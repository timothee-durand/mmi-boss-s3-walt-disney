<template>
  <div class="arrow-left rounded-lg border border-primary p-4 ml-4 mt-3">
    <h4>{{ event.date }} : {{ event.evenement }}</h4>
    <p>{{event.resume}}</p>
  </div>
</template>
<script>
export default {
  name: 'EventTimeline',
  props: {
    event: {
      type: Object
    },
  },
}
</script>
