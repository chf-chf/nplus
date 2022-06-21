<template>
    <div id="home">
        <div>反倒是浪费</div>
        <div ref="printMe" style="padding: 10px; background: #f5da55">
            <h1 style="color: #000; ">Print me!</h1>
        </div>
        <!-- OUTPUT -->
        <!-- <img :src="output"> -->
        <!-- <ImageEditor ref="tuiImageEditor" :include-ui="useDefaultUI" :options="options"></ImageEditor> -->
    </div>
</template>

<script>

    // import ImageEditor from '@toast-ui/vue-image-editor/src/ImageEditor.vue'
    import Logo from '@/assets/logo.png'
    export default {
        name: 'Home',
        components: {
            // ImageEditor
        },
        data() {
            return {
                output: null,
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
        methods: {
            async print() {
                const el = this.$refs.printMe;
                // add option type to get the image version
                // if not provided the promise will return 
                // the canvas.
                const options = {
                    type: 'dataURL'
                }
                this.output = await this.$html2canvas(el, options);
            }
        },
        mounted() {
            // this.print()
        }
    }
</script>

<style scoped>
    #home {
        /* margin: 0 auto; */
        height: 100%;
        color: #fff;
    }
</style>