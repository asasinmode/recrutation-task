<script setup lang="ts">
defineProps<{
	id: string;
	label: string;
}>();
</script>

<template>
	<div>
		<label class="sr-only" :for="id">{{ label }}</label>
		<input :id="id" :placeholder="label" class="w-full b b-[#adadad] rounded-[0.625rem] px-3 py-2 text-[#2d473e] hoverable:b-[#2d473e] md:px-4 md:py-3 placeholder:text-[#808080]">
	</div>
</template>
