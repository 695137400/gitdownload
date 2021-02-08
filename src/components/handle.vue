<template>
    <div class="x-handle" @mousedown="mouseDown" :style="'float:'+flot"></div>
</template>

<script>
    export default {
        name: "handle",
        data () {
            return {
                lastX: "",
                flot: this.isLeft ? "right" : "left",
            };
        },
        props: {
            isLeft: Boolean,
        },
        created () {
            document.addEventListener("mouseup", this.mouseUp);
            console.log('isLeft',this.isLeft);
            console.log('flot',this.flot);
        },
        destroyed () {
            document.removeEventListener("mouseup", this.mouseUp);
        },
        methods: {
            mouseDown (event) {
                document.addEventListener("mousemove", this.mouseMove);
                this.lastX = event.screenX;
            },
            mouseMove (event) {
                this.$emit("widthChange", this.lastX - event.screenX);
                this.lastX = event.screenX;
            },
            mouseUp () {
                this.lastX = "";
                document.removeEventListener("mousemove", this.mouseMove);
            },
        },
    };
</script>
<style>
    .x-handle {
        width: 20px;
        cursor: w-resize;
        z-index: 10;
        height: 100%;
    }
</style>
