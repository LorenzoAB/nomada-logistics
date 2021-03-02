<template>
    <main>
        <px-carousel></px-carousel>
        <px-services></px-services>
        <px-contacts></px-contacts>
        <px-write></px-write>
    </main>
</template>
<script>
import PxCarousel from "@/components/PxCarousel";
import PxServices from "@/components/PxServices";
import PxContacts from "@/components/PxContacts";
import PxWrite from '@/components/PxWrite';

export default {
    name:'Home',
    components:{
        PxCarousel,
        PxServices,
        PxContacts,
        PxWrite
    }
}
</script>