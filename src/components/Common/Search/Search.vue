<template>
  <div class="relative flex items-center">
    <input 
      type="text"
      class="w-full h-10 pl-10 pr-3 text-sm text-white rounded-md border-none font-Inter bg-[#ffffff33] focus:outline-none placeholder:text-gray-300"
      v-on:input="emit('onInput', input)"
      v-model="input"
      :placeholder="props.placeholder"
    />
    <i class="bx bx-search left-4 absolute text-white"></i>
  </div>
</template>

<script setup lang="ts"> 
import { ref } from 'vue';
import type { Ref } from 'vue';

const props = defineProps({
  placeholder: { type: String, required: true },
})

const emit = defineEmits<{
  (e: 'onInput', value: string ): void
}>();

const input: Ref<string> = ref('');
  
</script>