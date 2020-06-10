<template>
    <div class="card-wrap">
        <article class="card-body">
            <section class="card-image-section">
                <img :src="imageUrl" alt="product" title="produce image">
            </section>
            <section class="card-contents-wrap">
                <section class="card-contents-section">
                <span class="card-label">
                    {{cardLabel}}
                </span>
                    <h3 class="card-title">
                        {{cardTitle}}
                    </h3>
                    <p class="card-information">
                        {{cardContent}}
                    </p>
                </section>
                <section class="card-score-section">
                    <div class="score-icon">
                        <template v-for="(scoreNumber, index) in Array(5)">
                            <template v-if="index + 1 <= score">
                                <span :key="index" class="score-on"></span>
                            </template>
                            <template v-else>
                                <span :key="index" class="score-off"></span>
                            </template>
                        </template>
                    </div>
                    <p class="score-label">
                        별점이랍니다..별점이랍니다..별점이랍니다..별점이랍니다..
                    </p>
                </section>
            </section>
        </article>
    </div>
</template>

<script>
    export default {
        name: "CardComponent",
        props: {
            imageUrl: {type: String, default: ''},
            cardLabel: {Type: String, default: ''},
            cardTitle: {Type: String, default: ''},
            cardContent: {Type: String, default: ''},
            score: {type: Number, default: 3}
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/mixins";

    .card-wrap {

        padding: 4px;
        width: 100%;

        .card-body {

            border-radius: 4px;
            border: 1px solid #e4e7ed;

            .card-image-section {
                img {
                    width: 100%;
                    object-fit: contain;
                }
            }

            .card-contents-wrap {
                .card-contents-section {

                    padding: 4px;

                    .card-label {
                        font-size: 13px;
                        color: #b8b8b8;
                    }

                    .card-title {
                        font-size: 18px;
                        margin-bottom: 2px;
                        color: #2b2b2b;
                    }

                    .card-information {
                        @include textOverflow();
                    }

                }

                .card-score-section {
                    border-top: 1px solid #e4e7ed;
                    padding: 4px;

                    .score-icon {
                        span {
                            height: 14px;
                            width: 14px;
                            background-color: #bbb;
                            border-radius: 50%;
                            display: inline-block;
                            margin: 0 1px;
                        }

                        span:first-child {
                            margin: 0;
                        }

                        .score-on {
                            background-color: yellowgreen;
                        }
                    }

                    .score-label {
                        margin-top: 4px;
                        font-size: 14px;
                        color: #999;
                        @include textOverflow();
                    }

                }
            }

        }


    }

</style>
