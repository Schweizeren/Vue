<template>
    <v-container>
        <v-row no-gutters>
            <v-snackbar
                    v-model="deletedSuccess">
                {{ deletedText }}
                <v-btn
                        color="pink"
                        text
                        @click="deletedSuccess = false"
                >Close</v-btn>
            </v-snackbar>
            <v-col
                    md="6"
                    offset-md="3">
                <v-card  class="pa-2"
                         color="primary"
                         outlined
                         tile>
                    <v-card-title>
                        <v-row no-gutters>
                            <v-col md="1">
                                <router-link to="/WeedCreate" tag="button">
                                    <v-icon>mdi-plus-circle </v-icon>
                                </router-link>
                            </v-col>
                            <v-col justify="center" md="12">Weeds</v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item-group color="primary"
                                               v-for="weed in weeds"
                                               :key="weed.name">
                                <v-list-item>

                                    <v-list-item-content>
                                        <v-list-item-title>{{weed.name}}</v-list-item-title>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-col>
                                            <router-link to="/WeedUpdate" tag="button">
                                                <v-icon color="grey lighten-1">mdi-circle-edit-outline</v-icon>
                                            </router-link>
                                            <v-btn v-on:click="deleteWeed(weed)" icon>
                                                <v-icon color="grey lighten-1">mdi-minus-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>

                                    </v-list-item-action>
                                </v-list-item>
                                <v-divider inset></v-divider>
                            </v-list-item-group>
                        </v-list>
                    </v-card-text>
                    <v-card-actions>
                        <v-row no-gutters>
                            <v-col
                                    md="2"
                                    offset-md="10">
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        components: { },
        mounted() {
            this.fetchWeeds()
        },
        data () {
            return {
                weeds: [],
                deletedSuccess: false,
                deletedText: 'Weed deleted'
            }
        },
        methods: {
            fetchWeeds() {
                axios.get('https://db-weedshop-jwh-dk-easv.azurewebsites.net/api/weeds')
                    .then((result) => {
                        this.weeds = result.data;
                    })
            },
            async deleteWeed(weed) {
                let result = await axios.delete('https://db-weedshop-jwh-dk-easv.azurewebsites.net/api/weeds/'+ weed.id)
                this.deletedSuccess = true;
                if(result.status !== 200)
                {
                    this.deletedSuccess = false;
                }
                else
                {
                    this.fetchWeeds()
                }


            }
        }
    };
</script>
