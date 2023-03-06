<template>
    <div class="w-72 h-90 rounded-lg lg:mt-0 mt-12">
        <img :src=imgPath class="h-3/4">
        <section class="p-4 text-left">
           <div class="w-2 h-12 bg-green-500 flex float-left -ml-4"></div>
           <span class="text-xl text-gray-600 font-bold flex float-left mt-2">₹ {{ amount }}</span>
        </section>
    </div>
</template>

<script>
export default {
  props: {
    imgPath: String,
    amount: String
  }
}

</script>