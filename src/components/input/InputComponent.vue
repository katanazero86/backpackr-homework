<template>
    <div class="input-wrap" :class="[disabled && `input-wrap-disabled`,
    readonly && `input-wrap-readonly`]">
        <div class="input-body">
            <div class="input-text">
                <textarea placeholder="주문 요청사항을 입력해주세요." rows="3" :maxlength="maximumOrderRequestMessage"
                          v-model="orderRequestMessage" :disabled="disabled" :readonly="readonly"></textarea>
                <span class="input-count">
                    {{maximumOrderRequestMessageComputed}}
                </span>
            </div>
            <div class="input-save" v-if="orderRequestMessage.trim() != initOrderRequestMessage.trim()">
                <button type="button" @click="$emit('save', orderRequestMessage.trim())" :disabled="disabled">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputComponent",
        props: {
            initOrderRequestMessage: {type: String, default: ''},
            maximumOrderRequestMessage: {type: Number, default: 500},
            disabled: {type: Boolean, default: false},
            readonly: {type: Boolean, default: false},
        },

        computed: {
            maximumOrderRequestMessageComputed() {
                return Math.abs(this.orderRequestMessage.trim().length - this.maximumOrderRequestMessage)
            }
        },

        data() {
            return {
                orderRequestMessage: this.initOrderRequestMessage
            }
        },
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
                    border: 1px solid #a8a8a8;
                    resize: none;
                    width: 100%;
                    height: 100%;
                    font-size: 13px;
                }

                textarea:focus {
                    border: 1px solid #66a3ff;
                    outline: none;
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
                    cursor: pointer;
                }

                button:focus {
                    outline: 1px solid #707070;
                }
            }

        }

    }

    .input-wrap-disabled {

        .input-body {

            .input-text {
                textarea {
                    pointer-events: none;
                    background-color: #f5f7fa;
                }
            }

            .input-save {
                button {
                    pointer-events: none;
                }
            }

        }

    }


    .input-wrap-readonly {

        .input-body {

            .input-text {
                textarea {
                    pointer-events: none;
                }
            }

            .input-save {
                button {
                    pointer-events: none;
                }
            }

        }
    }

</style>
