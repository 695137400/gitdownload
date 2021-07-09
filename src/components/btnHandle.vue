<template>
    <el-button class="menuBtn"
               icon="el-icon-d-arrow-right"
               @click="click"
               circle
               style="position: fixed;z-index: 999999999;font-size: 20px;"
               :style="{'margin-left':startX+'px','margin-top':startY+'px'}"
               @mousedown.native="mouseDown"
    />
</template>

<script>
    export default {
        name: "handle",
        data () {
            return {
                startX: 10,
                startY: 10,
                changeX: 0,
                changeY: 0,
                ismv: false,
                isup: false,
            };
        },
        props: {
            icon: String,
            click: Function,
            imgW: Number,
            imgH: Number
        },
        created () {
            document.addEventListener("mouseup", this.mouseUp);
        },
        watch: {
            icon: function () {

            },
        },
        methods: {
            mouseDown(event) {
                document.addEventListener("mousemove", this.mouseMove);
                this.ismv = false;
                this.isup = false;
                this.changeX = 0;
                this.changeY = 0;
                event.preventDefault();
            },
            mouseMove (event) {
                event.preventDefault();
                this.ismv = true;
                if (!this.isup) {
                    this.changeX = event.clientX;
                    this.changeY = event.clientY;
                    this.startX = this.changeX - 30;
                    this.startY = this.changeY - 30;
                }
                document.getElementsByClassName("menuBtn")[0].onmouseup = this.mouseUp;
            },
            mouseUp (Event) {
                event.preventDefault();
                this.isup = true;
                document.removeEventListener("mousemove", this.mouseMove);
                if (this.ismv) {
                    this.ismv = false;
                    this.changeX = Event.clientX;
                    this.changeY = Event.clientY;
                    var w = document.documentElement.offsetWidth;
                    var h = document.documentElement.offsetHeight;
                    if (this.changeX > w / 2) {
                        this.startX = w - 50;
                        this.$emit("leftChang", false);
                    } else {
                        this.startX = 10;
                        this.$emit("leftChang", true);
                    }
                    if (this.startY > h - 100) {
                        this.startY = h - 100;
                    }
                    if (this.startY < 10) {
                        this.startY = 10;
                    }
                }
            },
        },
    };
</script>
<style>
    .icon-left {
        border-right: 30px solid;
        border-top: 15px solid #fff0;
        border-bottom: 15px solid #73737300;
        border-left: solid 1px #ffffff00;
        background: #adadad00;
        width: 0;
        height: 0px;
        margin-top: 10px;
    }
</style>
