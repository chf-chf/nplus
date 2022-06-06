<template>
    <div class="home">
        <ImageEditor ref="tuiImageEditor" :include-ui="useDefaultUI" :options="options"></ImageEditor>
    </div>
</template>

<script>
    import "tui-image-editor/dist/tui-image-editor.css"
    import "tui-color-picker/dist/tui-color-picker.css"

    import ImageEditor from '@toast-ui/vue-image-editor/src/ImageEditor.vue'
    import Logo from '@/assets/logo.png'
    export default {
        name: 'Home',
        components: {
            ImageEditor
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
            console.log(this.$refs.tuiImageEditor, '888')
            const drawingMode = this.$refs.tuiImageEditor.invoke('getDrawingMode')
            this.$refs.tuiImageEditor.invoke('loadImageFromURL', '../../assets/logo.png')
            console.log(drawingMode, 'drawingMode')
        }
    }
</script>

<style scoped>
    .home {
        height: 100%;
    }
</style>