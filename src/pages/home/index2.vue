<template>
    <div id="home">
         <div>反倒是浪费</div>
         <vue-fabric ref="canvas" :width="400" :height="400"></vue-fabric>
        <!-- <ImageEditor ref="tuiImageEditor" :include-ui="useDefaultUI" :options="options"></ImageEditor> -->
    </div>
</template>

<script>
    import "tui-image-editor/dist/tui-image-editor.css"
    import "tui-color-picker/dist/tui-color-picker.css"

    // import ImageEditor from '@toast-ui/vue-image-editor/src/ImageEditor.vue'
    // import html2canvas from 'html2canvas';
    import Logo from '@/assets/logo.png'
    export default {
        name: 'Home',
        components: {
            // ImageEditor
        },
        data() {
            return {
                useDefaultUI: true,
                options: {
                    includeUI: {
                        initMenu: 'draw',
                        menu: [
                            'crop',
                            'draw',
                            'icon',
                            'text',
                            'flip',
                            'rotate',
                            'shape',
                            'mask',
                            'filter'
                        ],
                        menuBarPosition: 'bottom',
                        loadImage: {
                            path: Logo,
                            name: 'sample'
                        }
                    }
                }
            }
        },
        mounted() {
            console.log(this.$refs.canvas, 'canvas');
            this.$refs.canvas.createImage('https://egalitarian.plus/upload/image/202203/076627c7-090a-4f9b-ac70-87d803688f21.jpg', {width: 200, height: 200})
        }
    }
</script>

<style scoped>
    #home {
        /* margin: 0 auto; */
        height: 100%;
        color: #252525;
    }
</style>