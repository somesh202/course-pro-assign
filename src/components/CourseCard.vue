<template>
    <div class="w-72 lg:h-96 rounded-lg shadow-md border-gray-600 lg:mt-0 mt-24">
        <img :src=imageSource class="lg:h-44 w-full">
        <section class="p-4 text-left">
            <h3 class="text-gray-700 text-lg text-left font-bold mb-4">{{ desc }}</h3>
            <span class="text-sm text-gray-700 text-left py-3 italic -ml-24"><b>{{ count }}</b> Student</span>
            <div class="text-gray-400 text-sm text-left flex float-left mt-8">
                <img src="@/assets/schedule-24px.svg" />
                <span>{{ time }}</span>
            </div>
            <div class="text-gray-400 text-sm text-left flex float-right mt-8">
                <img src="@/assets/date.svg" />
                <span>{{ lectures }}</span>
            </div>
            <hr class="mt-10 mb-2" />
            <div class="flex float-left">
                <img :src=profileImg class="rounded-full w-8 h-8" />
                <h3 class="font-bold text-gray-600 text-md">{{ userName }}</h3>
            </div>
            <div class="flex float-right">
                <h3 class="font-bold text-green-400 text-md">₹ {{ amount }}</h3>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  props: {
    imageSource: String,
    desc: String,
    count: String,
    time: String,
    lectures: String,
    profileImg: String,
    userName: String,
    amount: String
  }
}

</script>