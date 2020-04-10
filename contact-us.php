<?php
// meta tags

$pageTitle = "Contact Information for KILZ® and Masterchem Industries";
$pageDescription = "Please reach out by phone or email for service, support and general inquiries.";
$pageKeywords = "";
?>

<?php include 'header.php';?>

<div class="utility">
	<div class="hero contact">
		<div class="brush">
			<img src="images/brush.png" alt="" />
		</div>
		<h1>Contact Us</h1>
	</div>
	<div class="copy">
		<div class="column">
			<div id="map-canvas"></div>
		</div>
		<div class="column">
			<p><strong>Mailing Address: </strong> <br/>
				Masterchem Industries  <br/>
				3400 W Segerstrom Ave. <br/>
				Santa Ana, CA 92704 <br/>
			</p>
			<p><strong>For Technical Service</strong><br/>
				1-866-977-3711 <br/>
				<a href="mailto:techservice@masterchem.com">techservice@masterchem.com</a>
			</p>
			<p>KILZ® customer care representatives are available Monday through Friday 6 am to 5 pm, Saturday from 7 am to 3:30 pm (Pacific Time) and closed Sundays.</p>
			<p><strong>Orders Department</strong> <br/>
				Monday – Friday <br/>
				3:30 AM – 5:30 PM PST <br/>
				1-866-977-3711, press option 3</p>
		</div>
	</div>
</div>

<?php include 'footer.php';?>

<script type="text/javascript">
    jQuery(document).ready(function($){
        function initialize() {
            var mapCanvas = document.getElementById('map-canvas');
            var myLatlng = new google.maps.LatLng(33.7086586, -117.9153592)
            var mapOptions = {
                center: myLatlng,
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: '3400 W Segerstrom Ave'
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    });
</script>