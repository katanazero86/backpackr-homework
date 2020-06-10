<template>
    <div class="index-wrap">
        <p>
            과제 1. 카드 UI
        </p>
        <div class="card-list-wrap">
            <div class="card-list-body row-wrap align-items-center">
                <template v-for="(test, index) in Array(5)">
                    <CardComponent class="card-item col-3 col-sm-6" :key="index"
                                   imageUrl="https://image.idus.com/image/files/aed1aec94ac34f3a8c7339d4e6d73b24_512.jpg"
                                   cardLabel="난 카드라벨"
                                   cardTitle="난 카드제목"
                                   cardContent="카드 내용"
                                   :score="3"/>
                </template>
            </div>
        </div>

        <div class="horizontal-card-list-wrap">
<!--            <div class="horizontal-card-list-body row-wrap align-items-center">-->
<!--                <template v-for="(test, index) in Array(2)">-->
<!--                    <CardHorizontalComponent class="card-item col-6 col-sm-12" :key="index"-->
<!--                                             imageUrl="https://image.idus.com/image/files/102fa398ce50435cb0bf6581e7f58ec2_512.jpg"-->
<!--                                             cardLabel="난 카드라벨"-->
<!--                                             cardTitle="난 세로형 카드 제목"-->
<!--                                             cardContent="세로형 카드 내용"-->
<!--                                             :score="1"/>-->
<!--                </template>-->
<!--            </div>-->
        </div>

        <hr>
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
    import CardComponent from "../components/card/CardComponent";
    import CardHorizontalComponent from "../components/card/CardHorizontalComponent";

    export default {
        name: "Index",
        // eslint-disable-next-line vue/no-unused-components
        components: {CardHorizontalComponent, CardComponent, InputComponent},

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

    @import "src/assets/scss/mixins";

    .index-wrap {
        padding: 2px;
    }

    .card-list-wrap {

        padding: 6px;
        max-width: 1024px;
        margin: 0 auto;

        .card-list-body {

            .card-item {
                min-width: 0;
            }
        }

    }

    .horizontal-card-list-wrap {

        padding: 6px;

        .horizontal-card-list-body {

            width: 100%;

            .card-item {
                min-width: 0;
            }
        }

    }

</style>
