<template>
    <div class="input-wrap">
        <div class="input-body">
            <div class="input-text">
                <textarea placeholder="주문 요청사항을 입력해주세요." rows="3"></textarea>
                <span class="input-count">
                    500
                </span>
            </div>
            <div class="input-save">
                <button type="button">Save</button>
            </div>
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

        width: 100%;

        .input-body {

            width: 100%;
            @include dFlex();

            .input-text {
                width: 100%;
                position: relative;

                textarea {
                    padding: 2px 28px 2px 4px;
                    border: none;
                    resize: none;
                    width: 100%;
                    height: 100%;
                    font-size: 13px;
                }

                textarea:focus {
                    outline: 1px solid #66a3ff;
                }

                .input-count {
                    position: absolute;
                    bottom: 3px;
                    right: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    color: #a8a8a8;
                }
            }

            .input-save {
                button {
                    margin-left: 2px;
                    color: #22a7af;
                    background: none;
                    border: 1px solid #707070;
                    padding: 8px;
                    height: 100%;
                }

                button:focus {
                    outline: 1px solid #707070;
                }
            }

        }

    }

</style>
