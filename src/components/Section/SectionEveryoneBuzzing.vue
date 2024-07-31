<script setup lang="ts">
import everyoneBuzzingStockXUrl from '~/assets/images/everyone_buzzing_stockx_box.png';
</script>

<template>
	<section class="grid grid-cols-2 items-center gap-x-8 px-[--container-px]">
		<div class="flex flex-col">
			<h1 class="mb-6 text-[2.625rem] text-[#293632] font-700 leading-[1.24]">
				Why is everyone buzzing <br>
				about these boxes?
			</h1>
			<p class="mb-2 text-[#293632]">
				StockX Mystery Boxes are not just about products; they’re about the experience. Imagine the excitement of unveiling top-tier electronics at a fraction of the cost.
			</p>
			<p class="text-[#293632]">
				Our boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone is raving about the unbeatable value and surprise factor of Stockx Mystery Boxes!
			</p>
		</div>
		<img :src="everyoneBuzzingStockXUrl" alt="a cardboard box in the bottom right corner with text 'StockX' on its sides and various electronics pouring out of it" width="1120" height="1120" class="aspect-1 w-full object-cover">
	</section>
</template>
