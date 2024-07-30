<script setup lang="ts">
defineProps<{
	id: string;
	label: string;
}>();
</script>

<template>
	<div>
		<label class="sr-only" :for="id">{{ label }}</label>
		<input :id="id" :placeholder="label" class="w-full b b-[#adadad] rounded-[0.625rem] px-4 py-3 text-[#2d473e] hoverable:b-[#2d473e] placeholder:text-[#808080]">
	</div>
</template>
