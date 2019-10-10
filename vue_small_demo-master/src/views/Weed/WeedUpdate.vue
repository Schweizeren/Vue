<template>
    <v-form v-model="valid">
        <v-container>

            <v-row no-gutters>
                <v-col
                        md="4"
                        offset-md="4">
                    <v-card  class="pa-2"
                             color="primary"
                             outlined
                             tile>
                        <v-card-title>Update Weed</v-card-title>
                        <h1> Fill out all fields </h1>
                        <v-card-text>
                                <v-text-field
                                        v-model="WeedObject.Name"
                                        label="Name"
                                        required
                                ></v-text-field>
                                <v-select
                                        v-model="WeedObject.Type"
                                        :menu-props="{ top: true, offsetY: true }"
                                        :items="Types"
                                        item-text='TypeName'
                                        item-value="Type"
                                        label="Type">
                                </v-select>
                                <v-text-field
                                        v-model="WeedObject.Weight"
                                        label="Weight"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="WeedObject.Price"
                                        label="Price"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="WeedObject.Description"
                                        label="Description"
                                        required
                                ></v-text-field>
                                <v-select
                                        v-model="WeedObject.Rating"
                                        :menu-props="{ top: true, offsetY: true }"
                                        :items="Ratings"
                                        item-text="name"
                                        item-value="Rating"
                                        label="Rating">
                                </v-select>
                            </v-card-text>
                        <v-card-actions>
                            <v-row no-gutters>
                                <v-col
                                        md="2"
                                        offset-md="10">
                                    <h1 v-if= "WeedObject.Price.length.valueOf() &&
                                    WeedObject.Description.length.valueOf() &&
                                    WeedObject.Name.length.valueOf() &&
                                    WeedObject.Weight.length.valueOf()" >
                                        <router-link to="/Weed" tag="button">
                                            <v-btn text v-on:click="Update()">
                                                <v-icon>mdi-content-save-outline </v-icon>
                                                Update</v-btn>
                                        </router-link>
                                    </h1>

                                </v-col>
                            </v-row>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    import axios from 'axios'
    export default {
        mounted() {

        },

        data() {
            return {
                valid:true,
                WeedObject: {
                    Name: '',
                    Type: {
                        Id: 0,
                        TypeName: ''
                    },
                    Weight: '',
                    Price: '',
                    Description: '',
                    Rating: 0
                },

                Types:
                    [
                        {Id: 1, TypeName: 'Hybrid'},
                        {Id: 2, TypeName: 'Sativa'},
                        {Id: 3, TypeName: 'Indica'}
                    ],

                Ratings: [
                    1,2,3,4,5
                ],
            }
        },
        methods: {
            Update() {
                const baseURI = ('http://db-weedshop-jwh-dk-easv.azurewebsites.net/api/weeds/72')
                axios.put(baseURI, {
                    Name: this.WeedObject.Name,
                    Type: this.Types.filter(t => t.TypeName === this.WeedObject.Type)[0],
                    Weight: +this.WeedObject.Weight,
                    Price: +this.WeedObject.Price,
                    Description: this.Description,
                    Rating: +this.WeedObject.Rating
                })
            }
        }
    };
</script>
