<template>
   <section>
       <px-contacus></px-contacus>
       <px-map></px-map>
   </section>
</template>
<script>
import PxContacus from "@/components/PxContacus";
import PxMap from "@/components/PxMap";
export default {
    name: "transportation",
    components: {
        PxContacus,
        PxMap
    },
}
</script>