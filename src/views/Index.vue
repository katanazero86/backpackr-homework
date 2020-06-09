<template>
    <div class="index-wrap">
        <p>
            과제 2. 입력 폼 UI
        </p>
        <InputComponent @save="saveOrderRequestMessage" :initOrderRequestMessage="orderRequestMessage"/>
        <br>
        <InputComponent @save="saveOrderRequestMessage" initOrderRequestMessage="나는 읽기 전용 입니다!" readonly/>
        <br>
        <InputComponent @save="saveOrderRequestMessage" initOrderRequestMessage="나는 비활성화 입니다!" disabled/>

    </div>
</template>

<script>

    // vuex helper
    import {mapState, mapActions, mapGetters} from 'vuex';

    const NAME_SPACE = 'orderModule';

    import InputComponent from "../components/input/InputComponent";

    export default {
        name: "Index",
        components: {InputComponent},

        computed: {
            ...mapGetters({}),

            ...mapState(`${NAME_SPACE}`, ['orderRequestMessage']),
        },

        methods: {

            ...mapActions({
                dispatchOrderRequestMessage: `${NAME_SPACE}/orderRequestMessageAction`,
            }),

            // 주문요구사항을 저장
            saveOrderRequestMessage(targetOrderRequestMessage) {
                this.dispatchOrderRequestMessage({targetOrderRequestMessage});
            },
        }
    }
</script>

<style lang="scss" scoped>

    .index-wrap {
        padding: 2px;
    }

</style>
