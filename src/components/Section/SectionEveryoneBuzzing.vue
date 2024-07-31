<script setup lang="ts">
import everyoneBuzzingStockXUrl from '~/assets/images/everyone_buzzing_stockx_box.png';
</script>

<template>
	<section class="grid items-center justify-items-center gap-x-8 px-[--container-px] md:grid-cols-2">
		<div class="flex flex-col">
			<h1 class="mb-2 text-center text-[length:--size-26-42] text-[#293632] font-700 leading-[1.24] md:mb-6 md:text-start">
				Why is everyone buzzing <br class="hidden sm:block">
				about these boxes?
			</h1>
			<p class="mb-1 text-[#293632] md:mb-2">
				StockX Mystery Boxes are not just about products; they’re about the experience. Imagine the excitement of unveiling top-tier electronics at a fraction of the cost.
			</p>
			<p class="text-[#293632]">
				Our boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone is raving about the unbeatable value and surprise factor of Stockx Mystery Boxes!
			</p>
		</div>
		<img
			:src="everyoneBuzzingStockXUrl"
			alt="a cardboard box in the bottom right corner with text 'StockX' on its sides and various electronics pouring out of it"
			width="1120"
			height="1120"
			class="row-start-1 mb-3 aspect-1 max-w-lg w-full object-cover md:row-start-auto md:mb-0 md:max-w-none"
		>
	</section>
</template>
