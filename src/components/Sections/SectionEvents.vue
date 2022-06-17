<template>
  <section class="events">

    <h4>Wanna transform your life?</h4>

    <h2>Upcoming Events</h2>

    <div class="events__container">


        <div class="events__container__card">

            <div class="left-side">

                <div class="place">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />  Texas, US
                </div>

                <div class="event-type">
                    Storytelling Workshop
                </div>

            </div>

            <div class="right-side">

                <div class="day">22</div>
                <div class="month">NOV</div>
                <button>Get ticket</button>

            </div>

        </div>

        <div class="events__container__card">

            <div class="left-side">

                <div class="place">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />  New York, US
                </div>

                <div class="event-type">
                    Painting Art Contest 2020
                </div>

            </div>

            <div class="right-side">

                <div class="day">10</div>
                <div class="month">OCT</div>
                <button>Get ticket</button>

            </div>

        </div>

        <div class="events__container__card">

            <div class="left-side">

                <div class="place">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />  Hamburg, Germany
                </div>

                <div class="event-type">
                    International Art Fair 2020
                </div>

            </div>

            <div class="right-side">

                <div class="day">23</div>
                <div class="month">NOV</div>
                <button>Get ticket</button>

            </div>

        </div>

        <div class="events__container__card">

            <div class="left-side">

                <div class="place">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />  Illinois, US
                </div>

                <div class="event-type">
                    Street Performance: Call for Artist
                </div>

            </div>

            <div class="right-side">

                <div class="day">15</div>
                <div class="month">DEC</div>
                <button>Get ticket</button>

            </div>

        </div>

        <div class="events__container__card">

            <div class="left-side">

                <div class="place">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />  Illinois, US
                </div>

                <div class="event-type">
                    Consumer Food Safety Education Conference
                </div>

            </div>

            <div class="right-side">

                <div class="day">22</div>
                <div class="month">JUL</div>
                <button>Get ticket</button>

            </div>

        </div>

        <div class="events__container__card">

            <div class="left-side">

                <div class="place">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />  Dubai
                </div>

                <div class="event-type">
                    How meditation improve your mental health?
                </div>

            </div>

            <div class="right-side">

                <div class="day">12</div>
                <div class="month">AUG</div>
                <button>Get ticket</button>

            </div>

        </div>

    </div>

    <p>Excited about our event? <strong class="view">View all events <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></strong></p>

  </section>
</template>

<script>
export default {
    name: 'SectionEvents',

}
</script>

<style lang="scss" scoped>

    .events{
        padding: 5rem 0;

        display: flex;
        flex-direction: column;
        align-items: center;

        h4{
            color: #20ad96;
            margin-bottom: 0;
        }

        h2{
            font-size: 1.875rem;
        }

        &__container{

            display: flex;
            flex-wrap: wrap;
            width: 70%;
            gap: 1.25rem;
            margin: 3.125rem 0;

            &__card{
                text-align: left;
                width: calc(50% - 30px);
                display: flex;
                background-color: #f8f8f8;
                padding: 1.25rem .625rem;

                .left-side{
                    width: 70%;
                    padding-top: 1.25rem;
                    padding-left: 1.25rem;

                    .place{
                        color: lightgray;
                        margin-bottom: .625rem;
                    }

                }

                .right-side{
                    text-align: center;
                    .day{
                        color: #20ad96;
                        font-size: 1.875rem;
                    }
                    .month{
                        margin-bottom: .3125rem;
                        font-weight: bold;
                        font-size: .625rem;
                    }

                    button{
                        background-color: #20ad96;
                        color: white;
                        border: none;
                        padding: .3125rem 1.5625rem;
                        border-radius: .3125rem;
                    }
                }
            }


        }

        .view{
            color: #20ad96;
            text-decoration: underline;
            text-decoration-color: lightgray;
            text-decoration-thickness: 1px;
            

        }

    }

</style>