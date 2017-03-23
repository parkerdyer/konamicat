# konamicat

Add konami code to your website and let your friends find the easter egg! 

I copied this from somewhere, but unfortunately I did not make a note of where.... so I can't post a credit. Bad Parker. :(

I set mine up before the closing body tag: 

    <script src="js/konamicat.js"></script>

		<script type="text/javascript">
		$(document).ready(function() {

		var panda = {
		init: function() { 

			$('body').dinosaur_konami();

		}
		};

		panda.init();
		});
		</script>
