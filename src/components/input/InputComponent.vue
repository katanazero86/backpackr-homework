<template>
    <div class="input-wrap">
        <div class="input-body">
            <input type="text" placeholder="주문 요청사항을 입력해주세요.">
            <button type="button">Save</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputComponent"
    }
</script>

<style lang="scss" scoped>

    @import "src/assets/scss/mixins";

    .input-wrap {

        .input-body {

            input[type=text] {
                border: none;
            }

            button {
                color: #22a7af;
                background: none;
                border: 1px solid #707070 ;
            }

        }

    }

</style>
