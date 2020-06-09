<template>
    <div class="index-wrap">
        <p>
            과제 2. 입력 폼 UI
        </p>
        <InputComponent/>
    </div>
</template>

<script>
    import InputComponent from "../components/input/InputComponent";
    export default {
        name: "Index",
        components: {InputComponent}
    }
</script>

<style lang="scss" scoped>

    .index-wrap {
        padding: 2px;
    }

</style>
