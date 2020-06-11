<template>
    <div class="card-wrap row align-items-center">
        <article class="card-body row col-12">
            <section class="card-image-section">
                <img :src="imageUrl" alt="product" title="produce image">
            </section>
            <section class="card-contents-wrap column justify-content-between">
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
                    <ScoreComponent :score="score"/>
                    <p class="score-label">
                        별점이랍니다..별점이랍니다..별점이랍니다..별점이랍니다..
                    </p>
                </section>
            </section>
        </article>
    </div>
</template>

<script>
    import ScoreComponent from "../score/ScoreComponent";
    export default {
        name: 'CardHorizontalComponent',
        components: {ScoreComponent},
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
            min-width: 0;

            .card-image-section {
                img {
                    display: block;
                    width: 130px;
                    object-fit: contain;
                }
            }

            .card-contents-wrap {

                min-width: 0;

                .card-contents-section {

                    padding: 4px;

                    .card-label {
                        font-size: 13px;
                        color: #b8b8b8;
                    }

                    .card-title {
                        font-size: 18px;
                        color: #2b2b2b;
                    }

                    .card-information {
                        //@include textOverflow();
                    }

                }

                .card-score-section {

                    padding: 4px;

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
