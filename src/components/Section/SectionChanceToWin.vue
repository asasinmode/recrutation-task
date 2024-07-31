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
	<section class="grid auto-rows-min grid-cols-[41fr_59fr] gap-x-4 px-[--container-px]">
		<div class="relative grid row-span-3 grid-cols-3 my-auto h-fit gap-4 pl-[0.6875rem]">
			<div class="absolute size-40 flex flex-col items-center justify-center gap-2 rounded-[50%] bg-[#006340] text-center text-[2.375rem] text-white font-700 leading-[1.17] -right-[0.3125rem] -top-4" style="box-shadow: 0 0 30px 0 hsl(0 0% 0% / 0.15">
				$1.99 <br>
				<span class="text-[0.875rem] font-400">Original value $500</span>
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
				class="aspect-1 max-w-33 overflow-hidden b b-[#006340] rounded-[0.875rem]"
				:class="index === 0 ? 'justify-self-start' : index === carouselImages.length - 1 ? 'justify-self-end' : 'justify-self-center'"
				@click="setCarouselImage(index)"
			>
				<img class="h-full w-full object-cover" :src="image.src" :width="image.width" :height="image.height">
			</button>
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
			<VInput id="firstName" label="First name" />
			<VInput id="lastName" label="Last name" />
			<VInput id="street" label="Street" class="col-span-full" />
			<VInput id="postalCode" label="Postal code" />
			<VInput id="city" label="City" />
			<VInput id="phoneNumber" label="Phone number" class="col-span-full" />
			<VInput id="email" label="E-mail" class="col-span-full" />
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
