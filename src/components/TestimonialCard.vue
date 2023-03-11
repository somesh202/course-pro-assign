<template>
    <div class="lg:w-auto w-full lg:h-72 p-10 rounded-lg shadow-2xl">
        <p class="text-left text-lg italic">{{ review }}</p>
        <div class="flex float-left mt-14">
                <img :src=profileImg class="w-14 h-14 p-1 -mt-5 rounded-full flex justify-center items-center" />
                <h3 class="font-bold text-gray-600 text-md -mt-5">{{ userName }}</h3>
                
                </div>
                <p class="text-sm text-left flex float-left text-gray-600 mt-14 italic -ml-20">{{ day }}</p>
            
            <div class="flex float-right mt-10">
                <img src="@/assets/right-quotation-sign.svg" />
            </div>
    </div>
</template>

<script>
export default {
  props: {
    review: String,
    profileImg: String,
    userName: String,
    day: String,
    amount: String
  }
}

</script>