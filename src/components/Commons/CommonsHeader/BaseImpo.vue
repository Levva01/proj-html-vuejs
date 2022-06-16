<template>
  
    <div class="impo-search">

        <div class="language">
            <img src="../../../assets/img/en.png" alt="English">
            <span>ENGLISH <font-awesome-icon class="arrow-down" icon="fa-solid fa-chevron-down" /></span>
        </div>

        <div class="account">

            <font-awesome-icon icon="fa-solid fa-circle-user" />

        </div>

        <div class="input-search">

            <input type="text" placeholder="Search...">
            <font-awesome-icon class="search" icon="fa-solid fa-magnifying-glass" />
            


        </div>

    </div>

</template>

<script>
export default {
    name: 'BaseImpo',
}
</script>

<style lang="scss" scoped>

    .impo-search{
        display: flex;
        gap: .625rem;
        align-items: center;
        height: 100%;

        .language{
            align-self: center;

            .arrow-down{
                font-size: .8125rem;
                margin-right: .625rem;
            }

            img{
                width: 1.25rem;
                margin-right: .625rem;
            }

        }

        .input-search{
            display: flex;
            gap: .625rem;
            height: 100%;

            input{
                border-bottom: none;
                border-top: none;
                border-right: none;
                border-left: 1px solid lightgray;
                

            }

            input::placeholder{
                padding-left: .625rem;
            }

            .search{
                align-self: center;
            }

        }
    }

</style>