<script setup lang="ts">
import curiousAboutStockXUrl from '~/assets/images/curious_about_stockx_box.png';
</script>

<template>
	<section class="grid grid-cols-2 items-center gap-x-8 px-[--container-px]">
		<img :src="curiousAboutStockXUrl" alt="a cardboard box with text 'StockX' on its sides and various electronics above it" width="1120" height="1120" class="aspect-1 w-full object-cover">
		<div class="flex flex-col">
			<h1 class="mb-6 text-[2.625rem] text-[#293632] font-700 leading-[1.24]">
				Curious about the <span class="text-[#006340]">StockX</span><br>
				Mystery box?
			</h1>
			<p class="mb-2 text-[#293632]">
				Experience the thrill of unboxing cutting-edge gadgets with Stockx Mystery Boxes. Each box is a treasure trove of high-quality electronics, handpicked to elevate your tech game.
			</p>
			<p class="text-[#293632]">
				Expect the unexpected! Our boxes are packed with the latest gadgets, from smartphones to gaming consoles, ensuring you get the best tech surprises every time.
			</p>
		</div>
	</section>
</template>
