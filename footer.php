		<?php 
			$protocol = $_SERVER['HTTPS'] == '' ? 'http://' : 'https://';
			$webroot = $protocol . $_SERVER['HTTP_HOST'] . '/';
		?>
		
		<div class="global_footer">
			<div class="top_footer">
				<ul class="social_icons">
					<li><a href="https://www.facebook.com/KILZBrand " target="_blank"><img src="<?php echo $webroot; ?>images/facebook.png" alt="" /></a></li>
					<li><a href="https://twitter.com/kilzbrand" target="_blank"><img src="<?php echo $webroot; ?>images/twitter.png" alt="" /></a></li>
					<li><a href="https://www.pinterest.com/kilzbrand/" target="_blank"><img src="<?php echo $webroot; ?>images/pinterest.png" alt="" /></a></li>
					<li><a href="https://www.youtube.com/user/KILZBrand" target="_blank"><img src="<?php echo $webroot; ?>images/youtube.png" alt="" /></a></li>
					<li><a href="http://www.houzz.com/pro/kilzbrand/kilz-brands" target="_blank"><img src="<?php echo $webroot; ?>images/houzz.png" alt="" /></a></li>
				</ul>
                <div class="mobile_footer">
                    <ul>
                        <li><a href="/">Why Primer?</a></li>
                        <li><a href="/products.php">Products</a></li>
                        <li><a href="/stores.php">Where to buy</a></li>
                        <li><a href="/newsletter.php">Connect To Kilz</a></li>
                    </ul>
                </div>
				<div class="footer_menu">
					<ul>
						<li><a href="/">Why Primer?</a></li>
						<li><p>There are many reasons to paint. KILZ® covers them all.</p></li>
						<li><a class="red_link" href="/">Learn more</a></li>
					</ul>
				</div>
				<div class="footer_menu">
					<ul>
						<li><a href="/products.php">Products</a></li>
						<li><a class="red_link" href="/products.php?type=primers">Primers</a></li>
						<li><a class="red_link" href="/products.php?type=specialty">Specialty</a></li>
					</ul>
				</div>
				<div class="footer_menu">
					<ul>
						<li><a href="/stores.php">Where to buy</a></li>
						<li><p>Where to buy KILZ primers and specialty paints.</p></li>
						<li><a class="red_link" href="/stores.php">See stores</a></li>
					</ul>
				</div>
				<div class="footer_menu">
					<ul>
						<li><a href="/newsletter.php">Connect to Kilz</a></li>
						<li><p>Connect To KILZ<sup>&#174;</sup> to receive helpful tips, inspirational photos and the latest product updates.</p></li>
						<li><a class="red_link" href="/newsletter.php">Sign up now</a></li>
					</ul>
				</div>
			</div>
			<div class="bottom_footer">
				<ul class="company_links">
					<li><a href="/privacy-policy.php">Privacy Policy</a></li>
                    <li><a href="/terms-of-use.php">Terms of use</a></li>
					<li><a href="/careers.php">Careers</a></li>
					<li><a href="/company-overview.php">Company Overview</a></li>
					<li><a href="/contact-us.php">Contact</a></li>
				</ul>
				<p class="copyright">&#169; 2015 Kilz Corporation</p>
			</div>
		</div>

		</div> <!-- end content -->
	</div> <!-- end site_wrap -->
	
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    	<script>window.jQuery || document.write('<script src="<?php echo $webroot; ?>js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="<?php echo $webroot; ?>js/vendor/jquery.quicksand.js"></script>
        <script src="<?php echo $webroot; ?>js/plugins.js"></script>
        <script src="<?php echo $webroot; ?>js/built.min.js"></script>
        <script type="text/javascript" src="<?php echo $webroot; ?>js/vendor/placeholders.min.js"></script>
        <?php if ( (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== false) && (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE 9') !== false)  ) : ?>
        <script src="<?php echo $webroot; ?>js/vendor/idangerous2.swiper.min.js"></script>
        <?php else: ?>
        <script src="<?php echo $webroot; ?>js/vendor/swiper.min.js"></script>
        <?php endif; ?>
    </body>
</html>