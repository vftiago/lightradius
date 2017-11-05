<template>
    <div id="landing-page">
        <article class="cf center vh-100">
            <header class="fl w-100 pa3-m pa4-l">
                <h2 class="f2 mt0 lh-title"><i class="fr icon ion-ios-flash" @click="nextString"></i><span id="typed"></span><span class="typed-cursor">|</span></h2>
            </header>
            <section class="fl vh-100 w-100">
                <div class="fl vh-100 w-100 w-50-m w-25-l">
                    <div class="mt6-l ph2 bt tc b--black-10">
                        <img src="./../assets/logo.png">
                    </div>
                </div>
                <div class="fl bl b--black-10 vh-100 w-100 w-50-m w-25-l">
                    <div class="mt6-l ph2 bt b--black-10">
                        <h1 class="f-headline ttu lh-solid">Fullstack Web Solutions</h1>
                    </div>
                </div>
                <div class="fl bl b--black-10 vh-100 w-100 w-50-m w-25-l">
                    <div class="mt6-l ph2 bt b--black-10">
                        <p class="f3 lh-copy">
                            Lightradius is a global, fullstack javascript solutions agency, focused on projects that matter to humans.
                        </p>
                        <p class="f3 mt2 lh-copy">
                            What matters to you?
                        </p>
                    </div>
                </div>
                <div class="fl bl b--black-10 vh-100 w-100 w-50-m w-25-l">
                    <div class="mt6-l ph2 bt b--black-10">
                        <p class="f3 lh-copy">
                            Only through constant practice and strictest self-criticism may we
                            develop a sense for a perfect piece of work.
                        </p>
                    </div>
                </div>
            </section>
        </article>
    </div>
</template>

<script>
	import Typed from 'typed.js';

	const strings = [
		'Beginners^100 and am^100ateurs alike^100 <span class="white">over^100estimate</span> the importance of the so-called^100 <span class="white">brain wave</span>^333, ^333the sudden <span class="white">brilliant</span> idea.'
    ];

	export default {
		name: 'LandingPage',
		data() {
			return {
				typed: null,
				typedElement: '#typed',
				options: {
					strings: strings,
					typeSpeed: 60,
                    showCursor: false
				}
		    };
		},
        methods: {
		    nextString: () => {}
        },
		mounted() {
			this.typed = new Typed( this.typedElement, this.options )
        }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    @import url('https://fonts.googleapis.com/css?family=Anton');
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300');

    i.icon
        cursor pointer
        &:hover
            color #FFFFFF

    .white
        color #FFFFFF

    #landing-page
        font-family Roboto Condensed, Arial, SansSerif
        color #0A1829

    header
        color #CCD9CE
        background-color #0A1829

    .typed-cursor
        position relative
        top -5px
        opacity 1
        font-weight 100
        -webkit-animation blink 1s infinite
        -moz-animation blink 1s infinite
        -ms-animation blink 1s infinite
        -o-animation blink 1s infinite
        animation blink 1s infinite

    @keyframes blink
        0%
            opacity 1
        50%
            opacity 0
        100%
            opacity 1

    h1
        line-height 0.9
        margin 4px 0
        font-family Anton, Helvetica Neue, Helvetica, Arial, SansSerif
        font-weight normal

    p
        font-weight normal
        &.lh-copy
            line-height 1.2

    ul
        list-style-type: none
        padding: 0

    li
        display: inline-block
        margin: 0 10px

    a
        color: #42b983
</style>
