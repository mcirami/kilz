<?php
// meta tags

$pageTitle = "KILZ® Insider - Sign up for Tips and Product Info";
$pageDescription = "Register for KILZ® insider to get tips & ideas, product info, and inspirational before & after job site photos.";
$pageKeywords = "";
?>

<?php $section = "newsletter"; ?>
<?php include 'header.php';?>

	<div class="newsletter">
		<div class="news_hero">
			<h1>Connect to Kilz</h1>
			<p>Sign up to receive helpful tips, inspirational photos and the latest product news.</p>
		</div>
		<ul class="benefits">
			<li class="benefit">
				<img src="images/benefits-img-1.png" alt="" />
				<h4>TIPS & TRICKS FROM THE PROS</h4>
				<p>Let professional painters show you how to always get it right the first time.</p>
			</li>
			<li class="benefit">
				<img src="images/benefits-img-2.png" alt="" />
				<h4>BEFORE & AFTER PHOTOS</h4>
				<p>Nothing inspires like a beautiful transformation. And nobody does it better than the KILZ&reg; brand.</p>
			</li>
			<li class="benefit">
				<img src="images/benefits-img-3.png" alt="" />
				<h4>NEW PRODUCT RELEASES</h4>
				<p>We never stop working to deliver the finest primers and specialty paints in the industry.</p>
			</li>
		</ul>
		<div class="signup">
			<div class="form_wrap">
				<form method="post" id="newsletterForm" name="Kilzsubscription" action="https://s1997969147.t.eloqua.com/e/f2" onsubmit="return validateForm()">
					<input type="hidden" name="elqFormName" value="Kilzsubscription">
					<input type="hidden" name="elqSiteID" value="1997969147">
					<input type="hidden" name="elqCustomerGUID" value="">
					<input type="hidden" name="elqCookieWrite" value="0">

					<input type="text" id="first_name" name="firstName" placeholder="First Name" >
					<span class="error first_name">Please enter a valid first name</span>

					<input type="text" id="last_name" name="lastName"  placeholder="Last Name" >
					<span class="error last_name">Please enter a valid last name</span>

					<input type="text" id="email" name="emailAddress" placeholder="Email Address">
					<span class="error email">Please enter a valid email address</span>

					<div class="select_wrap">
						<select name="country" id="country" >
							<option value="">Country</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
						</select>
					</div>
					<span class="error country">Please select a country</span>

					<input type="text" id="zip_code" name="zipPostal" placeholder="Zip or Postal Code" />
					<span class="error zip_postal">Please enter a valid zip or postal code</span>

					<input type="submit" class="gradient_btn" value="Submit">
				</form>
			</div>
		</div>
	</div>

<?php include 'footer.php';?>

<script type="text/javascript">
	$('form input').prop( "disabled", false );
	var _elqQ = _elqQ || [];
	_elqQ.push(['elqSetSiteId', '1997969147']);
	_elqQ.push(['elqTrackPageView']);

	(function() {
		function async_load() {
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.src = '//img.en25.com/i/elqCfg.min.js';
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s, x);
		}
		if (window.addEventListener) window.addEventListener('DOMContentLoaded',
			async_load, false);
		else if (window.attachEvent) window.attachEvent('onload', async_load);
	})();
</script>

<script type='text/javascript'><!--//
	var timerId = null, timeout = 5;
	//--></script>
<script type='text/javascript'><!--//
	function WaitUntilCustomerGUIDIsRetrieved() {
		if (!!(timerId)) {
			if (timeout == 0) {
				return;
			}
			if (typeof this.GetElqCustomerGUID === 'function') {
				document.forms["Kilzsubscription"].elements["elqCustomerGUID"].value = GetElqCustomerGUID();
				return;
			}
			timeout -= 1;
		}
		timerId = setTimeout("WaitUntilCustomerGUIDIsRetrieved()", 500);
		return;
	}
	window.onload = WaitUntilCustomerGUIDIsRetrieved;
	_elqQ.push(['elqGetCustomerGUID']);
	//--></script>

