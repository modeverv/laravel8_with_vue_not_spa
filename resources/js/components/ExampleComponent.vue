<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// TypeScript動いた
// var a:number = 1;
// a = a + "あ "; // 型チェック働く

    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
