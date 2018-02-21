<template>
    <div class="">
        <h1 align="center">Add A Wedding Image</h1>
        <v-layout>
                <v-flex xs4 offset-xs4 sm6 offset-sm3 md8 offset-md2 >
                    <form anctype="multipart/form-data">
                        <v-text-field type="text" v-model="wed.event_name" label="Event Name" required/>
                         <br>
                         <v-btn raised class="primary" @click="addFile">Upload</v-btn>
                         <input type="file" name="wed.imageUrl" ref="fileInput"
                          accept="image/*" style="display:none" @change="onfilePicked"><br>
                              <img :src="wed.image" height="150">
                         <!-- <v-text-field type="text" v-model="wed.imageUrl" label="Image" required/> -->
                            <br><br>
                        <v-btn @click="sendData" flat class="blue" dark>Upload</v-btn>
                    </form>
                </v-flex>
        </v-layout>
    </div>
</template>

<script>
// import wedding from '@/services/Wedding'
import axios from 'axios'
    export default{
        data(){
            return {
                wed: {
                    event_name: '',
                    imageUrl: '',
                    image:''
                }
            }
        },
        methods: {
          sendData () {
            let wedding = {
                event_name : this.wed.event_name,
                imageUrl : this.wed.imageUrl
            }
            console.log(wedding)
            axios.post('http://localhost:3000/wedding/create',wedding).then((response)=>{
                console.log(response)
            }).catch((e)=>{
                console.log(e)
            })
        },
          addFile () {
                   this.$refs.fileInput.click()
               },
         onfilePicked (event) {
             const files = event.target.files
             let filename = files[0].name
             if (filename.lastIndexOf('.')<=0) {
                 return alert('Invalid Image!!')
             }
             const fileReader = new FileReader()
             fileReader.addEventListener('load',()=>{
                 this.wed.image = fileReader.result
             })
             fileReader.readAsDataURL(files[0])
             this.wed.imageUrl = files[0]
         }
      }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
