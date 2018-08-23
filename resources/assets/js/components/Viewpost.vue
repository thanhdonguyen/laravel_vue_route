<template id="post">
    <div>
        <strong>Title :</strong>
        <h3>{{ post.title }}</h3>
        <strong>Body :</strong>
        <div>
            {{ post.body }}
        </div>
        <br><br>
        <span class="glyphicon glyphicon-arrow-left"></span>
        <router-link v-bind:to="'/'">Back to post list</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                post: {
                    title: '',
                    body:''
                },
                url: '/posts/'
            }
        },
        created(){
            let uri = this.url+this.$route.params.id
            Axios.get(uri).then(res => {
                this.post = res.data
            });
        }
    }    
</script>

<style>

</style>
