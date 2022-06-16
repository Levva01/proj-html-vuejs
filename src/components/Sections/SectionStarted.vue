<template>
  <section class="started">

    <h4>Let's Dream Big Together</h4>

    <p>We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization.</p>

    <div class="container">

        <div class="col-4">

            <h3>One to One</h3>
            <p>Getting the necessary clarity about the current state to help you improve your game.</p>

        </div>

        
        <div class="col-4">

            <h3>Anywhere</h3>
            <p>Access to valuable and portable program which allow you to setup and live anywhere you want.</p>
        </div>

        
        <div class="col-4">

            <h3>On Time</h3>
            <p>Punctually is our top priority because it's an essential criteria to assess a program quality.</p>
        </div>
        
        <div class="col-4">

            <h3>Online Courses</h3>
            <p>Online business coaching offers you a very powerful way to empower your business into success.</p>
        </div>

        <div class="col-4">

            <h3>Consulting</h3>
            <p>You will get a clear sense of direction for business, through assessment and faster results.</p>
        </div>

        <div class="col-4">

            <h3>Self Development</h3>
            <p>Business Coaching often keep your focus and develop you both in a professional and personal way.</p>
        </div>

    </div>

    <div class="button-container">
        <button class="learn-btn">Learn more</button>
        <button class="started-btn">Get started today</button>
    </div>

  </section>
</template>

<script>
export default {
    name: 'SectionStarted',
}
</script>

<style lang="scss" scoped>


    .started{
        margin: 0 13.75rem;
        text-align: center;

        h4{
            color: #20ad96;
        }

        p{
            font-size: 1.25rem;
            font-weight: bold;
            margin: 0 1.875rem;
            margin-bottom: 1.25rem;
        }

        .container{
            display: flex;
            flex-wrap: wrap;
            gap: 1.875rem;
            
            .col-4{
                width: calc(100% / 3 - 1.25rem);

                p{
                    color: gray;
                    font-size: .875rem;
                }
            }
        }

        .button-container{
            display: flex;
            gap: 1.25rem;
            justify-content: center;
            margin-top: 1.25rem;
        }

        .learn-btn{
            background-color: white;
            border: none;
            color: #20ad96;
            border: 1px solid lightgray;
            padding: .625rem 1.5625rem;
            border-radius: .3125rem;
        }

        .started-btn{
            background-color: #20ad96;
            color: white;
            border: 1px solid lightgray;
            padding: .625rem 1.5625rem;
            border-radius: .3125rem;

        }
    }


</style>




