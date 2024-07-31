<script setup lang="ts">
import mcAfeeUrl from '~/assets/images/form-security-logos/mcafee.png';
import trustEUrl from '~/assets/images/form-security-logos/truste.png';
import sslEncryptionUrl from '~/assets/images/form-security-logos/ssl_encryption.png';
import electronicsUrl from '~/assets/images/carousel/electronics.png';
import gamingStuffUrl from '~/assets/images/carousel/gaming_stuff.jpg';
import peripheralsUrl from '~/assets/images/carousel/peripherals.jpg';
import stockXBoxUrl from '~/assets/images/carousel/stockx_box.png';

interface ICarouselImage {
	src: string;
	width: number;
	height: number;
	alt: string;
}

const carouselImages: ICarouselImage[] = [
	{
		src: electronicsUrl,
		width: 890,
		height: 909,
		alt: 'various electronics like phones, tvs, VR headsets, smartwatches surrounding a box with text "Mystery box" on it',
	},
	{
		src: peripheralsUrl,
		width: 300,
		height: 300,
		alt: 'an open cardboard box with "mystery box" text on it with light shining out of it highlighting computed peripherals above and around it',
	},
	{
		src: gamingStuffUrl,
		width: 993,
		height: 978,
		alt: 'a blue box with question marks filled and surrounded with gaming peripherals, consoles and telephones',
	},
];

const currentCarouselImage = ref<ICarouselImage>({
	src: stockXBoxUrl,
	width: 1126,
	height: 1126,
	alt: 'electronics like telephones, drones, headphones or cameras surrounding a cardboard box with "StockX" text on it',
});

function setCarouselImage(index: number) {
	const [newImage] = carouselImages.splice(index, 1, currentCarouselImage.value);
	currentCarouselImage.value = newImage;
}
</script>

<template>
	<section class="grid auto-rows-min grid-cols-1 items-center gap-x-4 px-[--container-px] md:grid-cols-[41fr_59fr]">
		<div class="relative grid row-span-3 row-start-4 grid-cols-3 mt-6 h-fit gap-4 pl-[0.6875rem] md:row-start-auto">
			<div class="absolute size-[--size-100-160] flex flex-col select-none items-center justify-center gap-[--size-4-8] rounded-[50%] bg-[#006340] text-center text-[length:--size-24-38] text-white font-700 leading-[1.17] -right-[0.3125rem] -top-4" style="box-shadow: 0 0 30px 0 hsl(0 0% 0% / 0.15">
				$1.99 <br>
				<span class="text-[length:--size-10-14] font-400">Original value $500</span>
			</div>
			<img
				:src="currentCarouselImage.src"
				:width="currentCarouselImage.width"
				:height="currentCarouselImage.height"
				:alt="currentCarouselImage.alt"
				class="col-span-full h-120 w-full object-cover"
			>
			<button
				v-for="(image, index) in carouselImages"
				:key="image.src"
				class="aspect-1 max-w-33 justify-self-center overflow-hidden b b-[#006340] rounded-[0.875rem]"
				:class="index === 0 ? 'md:justify-self-start' : index === carouselImages.length - 1 ? 'md:justify-self-end' : 'justify-self-center'"
				@click="setCarouselImage(index)"
			>
				<img class="h-full w-full object-cover" :src="image.src" :width="image.width" :height="image.height">
			</button>
		</div>

		<h1 class="mb-2 text-center text-8 text-[#293632] font-800 leading-[1.058] md:text-start md:text-13">
			Chance to win a StockX <br>
			Mystery Box today!
		</h1>
		<p class="mb-[1.4375rem] text-center text-5 text-[#293632] leading-[1.17] md:text-start md:text-[1.375rem]">
			Unleash the Excitement of Mystery Electronics
		</p>
		<form class="grid grid-cols-2 gap-4 gap-y-2 b b-#dbdbdb rounded-[1.25rem] px-3 py-4 md:gap-y-4 md:p-6" @submit.prevent="">
			<h3 class="col-span-full mb-1 text-center text-6 text-[#2d473e] font-500 leading-[1.17] md:mb-2 md:text-8">
				Enter details
			</h3>
			<VInput id="firstName" label="First name" />
			<VInput id="lastName" label="Last name" />
			<VInput id="street" label="Street" class="col-span-full" />
			<VInput id="postalCode" label="Postal code" />
			<VInput id="city" label="City" />
			<VInput id="phoneNumber" label="Phone number" class="col-span-full" />
			<VInput id="email" label="E-mail" class="col-span-full" />
			<button type="submit" class="col-span-full mt-2 w-full rounded-[0.625rem] bg-[#006340] px-4 py-3 text-white font-600 uppercase hoverable:bg-[#005737]">
				Proceed to payment
			</button>
			<div class="col-span-full flex flex-wrap justify-center justify-self-center gap-4">
				<img class="max-h-10 w-auto object-contain" :src="mcAfeeUrl" width="140" height="60">
				<img class="max-h-10 w-auto object-contain" :src="trustEUrl" width="140" height="60">
				<img class="max-h-10 w-auto object-contain" :src="sslEncryptionUrl" width="145" height="60">
			</div>
		</form>
	</section>
</template>
