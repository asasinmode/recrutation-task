<script setup lang="ts">
import mcAfeeUrl from '~/assets/images/form-security-logos/mcafee.png';
import trustEUrl from '~/assets/images/form-security-logos/truste.png';
import sslEncryptionUrl from '~/assets/images/form-security-logos/ssl_encryption.png';
</script>

<template>
	<section class="grid auto-rows-min grid-cols-[41fr_59fr] gap-x-4 px-[--container-px]">
		<div class="grid row-span-3 grid-cols-3 my-auto h-fit">
			img here
		</div>

		<h1 class="mb-2 text-[3.25rem] text-[#293632] font-800 leading-[3.4375rem]">
			Chance to win a StockX <br>
			Mystery Box today!
		</h1>
		<p class="mb-[1.4375rem] text-[1.375rem] text-[#293632] leading-[1.17]">
			Unleash the Excitement of Myster Electronics
		</p>
		<form class="grid grid-cols-2 gap-4 b b-#dbdbdb rounded-[1.25rem] p-6" @submit.prevent="">
			<h3 class="col-span-full mb-2 text-center text-[2rem] text-[#2d473e] font-500 leading-[1.17]">
				Enter details
			</h3>
			<VInput label="First name" />
			<VInput label="Last name" />
			<VInput label="Street" class="col-span-full" />
			<VInput label="Postal code" />
			<VInput label="City" />
			<VInput label="Phone number" class="col-span-full" />
			<VInput label="E-mail" class="col-span-full" />
			<button type="submit" class="col-span-full mt-2 w-full rounded-[0.625rem] bg-[#006340] px-4 py-3 text-white font-600 uppercase">
				Proceed to payment
			</button>
			<div class="col-span-full flex justify-self-center gap-4">
				<img class="h-10 w-auto object-contain" :src="mcAfeeUrl" width="140" height="60">
				<img class="h-10 w-auto object-contain" :src="trustEUrl" width="140" height="60">
				<img class="h-10 w-auto object-contain" :src="sslEncryptionUrl" width="145" height="60">
			</div>
		</form>
	</section>
</template>
