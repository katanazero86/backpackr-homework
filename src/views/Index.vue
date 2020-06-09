<template>
    <div class="index-wrap">
        <p>
            과제 1. 카드 UI
        </p>
        <div class="card-list-wrap">
            <div class="card-list-body">
                <template v-for="(test, index) in Array(5)">
                    <CardComponent class="card-item" :key="index"/>
                </template>
            </div>
        </div>

        <div class="horizontal-card-list-wrap">
            <div class="horizontal-card-list-body">
                <template v-for="(test, index) in Array(2)">
                    <CardComponent class="card-item" cardMode="horizontal" :key="index"/>
                </template>
            </div>
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

    export default {
        name: "Index",
        components: {CardComponent, InputComponent},

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
        @include dFlex();
        justify-content: center;
        padding: 6px;

        .card-list-body {
            @include dFlexWrap();
            align-items: center;
            .card-item {
                flex-basis: 25%;
                min-width: 0;
            }
        }

        @include mobile() {
            justify-content: flex-start;
            .card-list-body {
                @include dFlexWrap();
                justify-content: space-between;
                align-items: flex-start;
                .card-item {
                    flex-basis: 50%;
                }
            }

        }

    }

    .horizontal-card-list-wrap {

        @include dFlex();
        padding: 6px;

        .horizontal-card-list-body {
            @include dFlexWrap();
            width: 100%;

            .card-item {
                flex-grow: 1;
                flex-basis: 50%;
                min-width: 0;
            }
        }

        @include mobile() {
            .horizontal-card-list-body {
                .card-item {
                    flex-basis: 100%;
                }
            }

        }

    }

</style>
