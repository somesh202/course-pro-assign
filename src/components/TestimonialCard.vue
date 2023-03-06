<template>
    <div class="lg:w-auto w-full lg:h-64 p-10 rounded-lg shadow-2xl">
        <span class="text-left text-lg italic">{{ review }}</span>
        <div class="flex float-left mt-14">
                <img :src=profileImg class="w-14 h-14 p-1 -mt-1 rounded-full flex justify-center items-center" />
                <h3 class="font-bold text-gray-600 text-md">{{ userName }}</h3>
                
                </div>
                <span class="text-sm text-left flex float-left text-gray-600 mt-20 italic -ml-20">{{ day }}</span>
            
            <div class="flex float-right mt-14">
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