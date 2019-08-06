<template>
    <section class="c-form-item c-form-image-item" @click="beforeSelectFile">
        <div :class="shape" class="avatar-wrap">
            <img :src="avatar" class="m-avatar-img" v-if="avatar">
            <svg viewBox="0 0 24 24" class="icons" v-else>
                <use :xlink:href="'#icon-' + icon"/>
            </svg>
        </div>
        <p class="avatar-label">{{ label }}</p>
        <ImageUploader
                ref="uploader"
                :value="value"
                :type="type"
                @input="$emit('input',$event)"
                @update:src="avatar = $event"
        />
    </section>
</template>

<script>

    import ImageUploader from '@/components/common/ImageUploader'
    export default {
        name: "FormImageItem",
        components:{ ImageUploader },
        props:{
            value: { type: null, default: () => ({}) },
            label: { type: String, default: '上传头像' },
            readonly: { type: Boolean, default: false },
            icon: { type: String, default: 'companyMes-upload' },
            //文件类型
            type:{
                type: String,
                default:'storage',
                validator(type){
                    return ['blob', 'id', 'url', 'storage'].includes(type)
                }
            },
            //图片形状　
            shape: { type: String, default: 'square' },
        },
        data(){
            return {
                avatar: (this.$props.value || {}).url,
            }
        },
        methods:{
            beforeSelectFile () {
                if (this.readonly) return
                this.$refs.uploader.select()
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import url("./formItem.scss");
form .c-form-image-item {

    .avatar-wrap {
        flex: none;
        width: 100%;
        height: 188px;
        &.circle {
            border-radius: 100%;
        }

        > img {
            width: 75%;
            max-height: 90%;
        }
    }

    .avatar-label {
        flex: auto;
        margin-left: 15px;
        color: #333;
        font-size: 14px;
    }
}
    .icons {
        width: 120px;
        height: 120px;
        position: relative;
        margin-top: 50px;
    }
</style>