<?php
// meta tags

$pageTitle = "KILZ® Primers, Specialty Paints & Concrete Stains";
$pageDescription = "Why Primer? Learn which KILZ® primers, paints and concrete stains are right for your job. From hiding stains to blocking odors, KILZ® covers it all.";
$pageKeywords = "KILZ Primer Paint";
?>

<?php $section = "home"; ?>
<?php include 'header.php';?>


	<?php 
		$current_section = (isset($_GET['section'])) ? $_GET['section'] : null;
	?>

	<div class="home">
		
		<div class="slider">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="brush">
							<img src="images/brush.png" alt="" />
						</div>
						<a href="/products/primer/kilz-max" class="cta">
							<img src="images/cta-1.png" alt="" />
							<p class="cta_text">
								Water-based. For heavy stains & odors.
								<span class="red_link">Get started</span>
							</p>
						</a>
						<div class="slide_text">
							<h2>WHY PRIMER?</h2>
							<p>Because Uncle Ralph's smoking den will make the perfect nursery.</p>
							<img class="slide_text_arrow" src="images/mobile_slider_arrow.png">
						</div>
						<picture>
							<!--[if IE 9]><video style="display: none;"><![endif]-->
							<source srcset="images/home-mobile-slide-2.jpg" media="(max-width: 767px)">
							<!--[if IE 9]></video><![endif]-->
							<img class="slide_bg" srcset="images/home-slide-2.jpg" alt="" />
						</picture>
						<img class="slider_bottom_bar" src="images/slider_bottom_overlay.png">
					</div>
					<div class="swiper-slide">
						<div class="brush_1">
							<img src="images/brush-1.png" alt="" />
						</div>
						<a href="/products/primer/kilz-original" class="cta">
							<img src="images/cta-2.png" alt="" />
							<p class="cta_text">
								Oil-based & trusted for over 40 years.
								<span class="red_link">Get started</span>
							</p>
						</a>
						<div class="slide_text">
							<h2>WHY PRIMER?</h2>
							<p>You see a pristine home office where the previous tenant once did his business.</p>
							<img class="slide_text_arrow" src="images/mobile_slider_arrow.png">
						</div>
						<picture>
							<!--[if IE 9]><video style="display: none;"><![endif]-->
							<source srcset="images/home-mobile-slide-3.jpg" media="(max-width: 767px)">
							<!--[if IE 9]></video><![endif]-->
							<img class="slide_bg" srcset="images/home-slide-3.jpg" alt="" />
						</picture>
						<img class="slider_bottom_bar" src="images/slider_bottom_overlay.png">
					</div>
					<div class="swiper-slide">
						<div class="brush">
							<img src="images/brush.png" alt="" />
						</div>
						<a href="/products/primer/kilz-2" class="cta">
							<img src="images/cta-3.png" alt="" />
							<p class="cta_text">
								Great for hiding previous colors. 
								<span class="red_link">Get started</span>
							</p>
						</a>
						<div class="slide_text">
							<h2>WHY PRIMER? </h2>
							<p>You're turning their toddler's art studio into your teenager's music studio.</p>
							<img class="slide_text_arrow" src="images/mobile_slider_arrow.png">
						</div>
						<picture>
							<!--[if IE 9]><video style="display: none;"><![endif]-->
							<source srcset="images/home-mobile-slide-1.jpg" media="(max-width: 767px)">
							<!--[if IE 9]></video><![endif]-->
							<img class="slide_bg" srcset="images/home-slide-1.jpg" alt="" />
						</picture>
						<img class="slider_bottom_bar" src="images/slider_bottom_overlay.png">
					</div>
					<!--<div class="swiper-slide">
						<div class="brush">
							<img src="images/brush.png" alt="" />
						</div>
						<a href="/products.php" class="cta">
							<img src="images/cta-3.png" alt="" />
							<p class="cta_text">
								Great for<br />adhesion.  
								<span class="red_link" href="#">Get started</span>
							</p>
						</a>
						<div class="slide_text">
							<h2>It's time Timmy graduates to a chalkboard wall.</h2>
							<p>Primer for doing things right.</p>
						</div>
						<picture>
							<source srcset="/images/home-mobile-slide-1.jpg" medialearn="(max-width: 580px)">
							<img class="slide_bg" src="images/home-slide-1.jpg" alt="" />
						</picture>
					</div>-->
				</div>
				<div class="swiper-pagination"></div>	
			</div>
		</div>
		<div class="cta_button_wrap">
			<a class="gradient_btn cta_button" href="#learn-more">LEARN MORE</a>
		</div>

		<div class="accordion_section" id="learn-more">
			<p class="mission">There are many reasons to prime before you paint. KILZ&reg; covers them all. </p>
			<div class="image_wrap seal">
				<a class="section_title" href="/seal-surfaces" data-column="first" id="seal-surfaces">
					<img src="/images/home-seal.jpg">
					<div class="icon_text">
						<img class="icon" src="/images/home-seal-icon.png" alt=""/>
						<h2>Seals Porous<br>Surfaces</h2>
					</div>
				</a>
			</div>
			<div class="image_wrap">
				<a class="section_title" href="/promote-adhesion" data-column="second" id="promote-adhesion">
					<img src="/images/home-adhesion.jpg">
					<div class="icon_text">
						<img class="icon" src="/images/home-adhesion-icon.png" alt=""/>
						<h2>Promotes<br>Adhesion</h2>
					</div>
				</a>
			</div>
			<div class="image_wrap">
				<a class="section_title" href="/block-seal" data-column="third" id="block-seal">
					<img src="/images/home-odor.jpg">
					<div class="icon_text">
						<img class="icon" src="/images/home-odor-icon.png" alt=""/>
						<h2>Helps Block<br>and Seal Odors</h2>
					</div>
				</a>
			</div>
			<div class="image_wrap end_column">
				<a class="section_title" href="/block-medium" data-column="fourth" id="block-medium">
					<img src="/images/home-stains.jpg">
					<div class="icon_text">
						<img class="icon" src="/images/home-stains-icon.png" alt=""/>
						<h2>Helps Block medium<br>to Severe Stains</h2>
					</div>
				</a>
			</div>
			<div class="image_wrap">
				<a class="section_title" href="/block-light" data-column="first" id="block-light">
					<img src="/images/home-mod-stains.jpg">
					<div class="icon_text">
						<img class="icon" src="/images/home-mod-stains-icon.png" alt=""/>
						<h2>Helps Block Light<br>To Medium Stains</h2>
					</div>
				</a>
			</div>
			<div class="image_wrap">
				<a class="section_title" href="/hide-previous" data-column="second" id="hide-previous">
					<img src="/images/home-paint.jpg">
					<div class="icon_text">
						<img class="icon" src="/images/home-paint-icon.png" alt=""/>
						<h2>Hides Previous<br>Colors</h2>
					</div>
				</a>
			</div>
			<div class="image_wrap end_column">
				<a class="section_title" href="/provide-mildew" data-column="third" id="provide-mildew">
					<img src="/images/home-mold.jpg">
					<div class="icon_text">
						<img class="icon" src="/images/home-mold-icon.png" alt=""/>
						<h2>Provides A Mildew<br>Resistant Finish</h2>
					</div>
				</a>
			</div>
			<section class="details" id="accordion"><div class="accordion_content"></div></section>
		</div>
		<div class="button_wrap">
			<a class="gradient_btn explore" href="/products.php">EXPLORE KILZ PRIMER</a>
		</div>
	
	</div> <!-- end home -->
	
	<script type="text/javascript">
		<?php if($current_section) : ?>
			var initialSection = '<?php echo $current_section; ?>';
		<?php else : ?>
			var initialSection = null;
		<?php endif; ?>
	</script>

<?php include 'footer.php';?>
