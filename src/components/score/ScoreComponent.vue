<template>
    <div class="score-wrap">
        <div class="score-body">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "ScoreComponent",
        props: {
            score: {type: Number, default: 3}
        },
    }
</script>

<style lang="scss" scoped>

    .score-wrap {

        .score-body {

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

        }

    }

</style>
