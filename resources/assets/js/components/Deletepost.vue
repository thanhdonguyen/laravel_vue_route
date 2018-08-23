<template id="post-delete">
    <div>
       <h3>Delete post {{post.title}}</h3> 
       <form v-on:submit.prevent = "deletePost">
           <p>The action cannot be undone</p>
           <button class="btn btn-xs btn-danger" type="submit" name="button">Delete</button>
           <router-link class="btn btn-xs btn-primary" v-bind:to="'/'">Back</router-link>
       </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    body: '',
                    title: ''
                },
                url: '/posts/'
            }
        },

        created() {
            let uri = this.url+this.$route.params.id+'/edit'
            Axios.get(uri).then( res => {
                this.post = res.data
            });
        },

        methods: {
            deletePost() {
                let uri = this.url+this.$route.params.id
                Axios.delete(uri, this.post).then( res => {
                    this.$router.push({name:'Listposts'})
                })
            }
        }
    }
</script>