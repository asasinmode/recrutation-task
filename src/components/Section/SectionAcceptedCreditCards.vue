<script setup lang="ts">
import creditCardsUrl from '~/assets/images/credit_cards.png';
</script>

<template>
	<section>
		<h3 class="mb-1 text-center text-3 text-[#293632] leading-[1.25]">
			We accept the following credit cards
		</h3>
		<ul class="sr-only">
			<li>Visa</li>
			<li>Mastercard</li>
			<li>Disconver network</li>
			<li>American Express</li>
		</ul>
		<img :src="creditCardsUrl" width="688" height="64" alt="multiple images of credit card providers" class="mx-auto h-10 object-contain">
	</section>
</template>
