<?php
// meta tags

$pageTitle = "KILZ® PRO Professional Services for Contractors";
$pageDescription = "KILZ ® offers a range of services for professionals including color services, volume pricing, FREE Job-site delivery and  factory tinting.";
$pageKeywords = "";
?>

<?php $section = "pro"; ?>
<?php include 'header.php';?>

	<?php 
		$current_section = (isset($_GET['section'])) ? $_GET['section'] : null;
	?>

	<div class="kilz_pro">
		<div class="heading">
			<h1>Kilz Pro</h1>
			<p>When you want to do the job right, on time every time.</p>
		</div>
		<div class="accordion_section">
			<div class="image_wrap">
				<a class="section_title" href="/kilz-pro/contractor-services" data-column="first" id="contractor-services">
					<img src="/images/pro-contractor.jpg">
					<img class="icon" src="/images/pro-contractor-icon.png">
					<h2>Contractor<br>Sevices</h2>
				</a>
			</div>
			<div class="image_wrap">
				<a class="section_title" href="/kilz-pro/free-delivery" data-column="second" id="free-delivery">
					<img src="/images/pro-delivery.jpg">
					<img class="icon" src="/images/pro-delivery-icon.png">
					<h2>Free Delivery</h2>
				</a>
			</div>
			<div class="image_wrap">
				<a class="section_title" href="/kilz-pro/factory-tinting" data-column="third" id="factory-tinting">
					<img src="/images/pro-tinting.jpg">
					<img class="icon" src="/images/pro-tinting-icon.png">
					<h2>Factory Tinting</h2>
				</a>
			</div>
			<div class="image_wrap end_column">
				<a class="section_title" href="/kilz-pro/volume-pricing" data-column="fourth" id="volume-pricing">
					<img src="/images/pro-pricing.jpg">
					<img class="icon" src="/images/pro-pricing-icon.png">
					<h2>Volume Pricing</h2>
				</a>
			</div>
			<div class="image_wrap">
				<a class="section_title" href="/kilz-pro/pro-service-reps" data-column="first" id="pro-service-reps">
					<img src="/images/pro-reps.jpg">
					<img class="icon" src="/images/pro-reps-icon.png">
					<h2>Pro Service Reps</h2>
				</a>
			</div>
			<div class="image_wrap">
				<a class="section_title" href="/kilz-pro/color-services" data-column="second" id="color-services">
					<img src="/images/pro-color.jpg">
					<img class="icon" src="/images/pro-color-icon.png">
					<h2>Color Services</h2>
				</a>
			</div>
			<div class="image_wrap">
				<a class="section_title" href="/kilz-pro/nationwide-reach" data-column="third" id="nationwide-reach">
					<img src="/images/pro-reach.jpg">
					<img class="icon" src="/images/pro-reach-icon.png">
					<h2>Nationwide Reach</h2>
				</a>
			</div>
			<div class="image_wrap end_column">
				<a class="section_title" href="/kilz-pro/kilz-pro-x-paints" data-column="fourth" id="kilz-pro-x-paints">
					<img src="/images/pro-paints.jpg">
					<img class="icon" src="/images/pro-paints-icon.png">
					<h2>Kilz Pro-X Paints</h2>
				</a>
			</div>
			<section class="details" id="accordion"><div class="accordion_content"></div></section>
		</div>
		<div class="button_wrap">
			<a class="gradient_btn explore" href="/products.php">EXPLORE KILZ PRIMER</a>
		</div>
	</div><!--end kilz pro -->
	
	<script type="text/javascript">
		<?php if($current_section) : ?>
			var initialSection = '<?php echo $current_section; ?>';
		<?php else : ?>
			var initialSection = null;
		<?php endif; ?>
	</script>

<?php include 'footer.php';?>
