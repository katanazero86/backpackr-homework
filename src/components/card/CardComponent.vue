<template>
    <div class="card-wrap">
        <article class="card-body" :class="cardMode && `card-horizontal`">
            <section class="card-image-section">
                <img src="@/assets/imgs/testImage.png" alt="product" title="produce image">
            </section>
            <section class="card-contents-section">
                <span class="card-label">
                    card label
                </span>
                <h3 class="card-title">
                    card title
                </h3>
                <p class="card-information">
                   card content
                </p>
            </section>
            <section class="card-score-section">

            </section>
        </article>
    </div>
</template>

<script>
    export default {
        name: "CardComponent",
        props : {
            cardMode : {type : String, default : '', validator: function (modeValue) {
                    if(modeValue !== 'horizontal') {
                        return ''
                    }

                    return modeValue
                }}
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/mixins";

    .card-wrap {

        padding: 4px;
        width: 100%;
        max-width: 320px;

        .card-body {

            border-radius: 4px;
            border: 1px solid #e4e7ed;

            .card-image-section {
                img {
                    width: 100%;
                    object-fit: contain;
                }
            }

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
                    text-overflow: ellipsis;
                }

            }

            .card-score-section {

            }

        }

        /* 가로형 카드 CSS */
        .card-horizontal {

        }

    }


</style>
