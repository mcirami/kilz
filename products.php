<?php
// meta tags

$pageTitle = "Primers, Specialty Paints & Concrete Care Products - KILZ®";
$pageDescription = "For every project, there's KILZ®. From general purpose surface preparation to heavy-duty stains and odors, KILZ® covers it all.";
$pageKeywords = "";
?>

<?php $section = "products"; ?>
<?php include 'header.php';?>

	<?php 
		$product_type = (isset($_GET['type'])) ? $_GET['type'] : 'primers';
		$product_fitler = (isset($_GET['filter'])) ? $_GET['filter'] : null;
		$current_product = (isset($_GET['product'])) ? $_GET['product'] : null;
	?>

	<section class="products">
		<div class="hero">
			<h1>Products</h1>
			<div class="tab_wrapper">
				<a <?php if($product_type != 'specialty') { echo 'class="active"'; } ?> href="#primers">PRIMERS</a>
				<a <?php if($product_type == 'specialty') { echo 'class="active"'; } ?> href="#specialty">SPECIALTY</a>
			</div>
			<p></p>
			<div class="nav_icons">
				<div class="icons_wrap">
					<div class="column">
						<a href="#seal-surfaces" <?php if($product_fitler == 'seal-surfaces') { echo 'class="active"'; } ?> data-copy_string="sealing porous surfaces">
							<p class="seal">Seals<br/>Porous<br>Surfaces</p>
						</a>
					</div>
					<div class="column">
						<a href="#promote-adhesion" <?php if($product_fitler == 'promote-adhesion') { echo 'class="active"'; } ?> data-copy_string="promoting adhesion">
							<p class="adhesion">PROMOTEs<br>ADHESION</p>
						</a>
					</div>
					<div class="column">
						<a href="#eliminate-odor" <?php if($product_fitler == 'eliminate-odor') { echo 'class="active"'; } ?> data-copy_string="blocking and sealing odors">
							<p class="odor">Helps Block/Seal<br>Odors</p>
						</a>
					</div>
					<div class="column">
						<a href="#heavy-stains" <?php if($product_fitler == 'heavy-stains') { echo 'class="active"'; } ?> data-copy_string="blocking medium to severe stains">
							<p class="stains">Helps Block Severe<br>Stains</p>
						</a>
					</div>
					<div class="column">
						<a href="#moderate-stains" <?php if($product_fitler == 'moderate-stains') { echo 'class="active"'; } ?> data-copy_string="blocking light to medium stains">
							<p class="mod_stains">Helps Block Light/Med<br>Stains</p>
						</a>
					</div>
					<div class="column">
						<a href="#hide-paint" <?php if($product_fitler == 'hide-paint') { echo 'class="active"'; } ?> data-copy_string="hiding previous colors">
							<p class="paint">Hides Previous<br>Color</p>
						</a>
					</div>
					<div class="column">
						<a href="#fight-mold" <?php if($product_fitler == 'fight-mold') { echo 'class="active"'; } ?> data-copy_string="providing a mildew-resistant finish">
							<p class="mold">Mildew Resistant<br>Finish</p>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="accordion_section">
			<div class="image_wrap primers hide-paint heavy-stains eliminate-odor seal-surfaces" data-id="1" data-seal-surfaces="4" data-eliminate-odor="7" data-heavy-stains="1" data-hide-paint="3">
				<a class="section_title" href="#kilz-max" data-column="first" id="kilz-max"><img src="/images/kilz_max.png"><p>KILZ MAX&reg;</p></a>
			</div>
			<div class="image_wrap primers fight-mold hide-paint moderate-stains promote-adhesion seal-surfaces" data-id="2" data-seal-surfaces="1" data-promote-adhesion="2" data-moderate-stains="3" data-hide-paint="2" data-fight-mold="1">
				<a class="section_title" href="#kilz-premium" data-column="second" id="kilz-premium"><img src="/images/kilz_premium.png"><p>KILZ&reg; PREMIUM</p></a>
			</div>
			<div class="image_wrap primers fight-mold hide-paint moderate-stains promote-adhesion seal-surfaces" data-id="3" data-seal-surfaces="2" data-promote-adhesion="6" data-moderate-stains="5" data-hide-paint="4" data-fight-mold="2">
				<a class="section_title" href="#third_column" data-column="third" id="kilz-2"><img src="/images/kilz_latex.png"><p>KILZ 2&reg; LATEX</p></a>
			</div>
			<div class="image_wrap primers fight-mold hide-paint moderate-stains promote-adhesion seal-surfaces end_column" data-id="4" data-seal-surfaces="3" data-promote-adhesion="7" data-moderate-stains="6" data-hide-paint="5" data-fight-mold="3">
				<a class="section_title" href="#fourth_column" data-column="fourth" id="kilz-2-lvoc"><img src="/images/kilz_latex_low_voc.png"><p>KILZ 2&reg; LATEX Low VOC</p></a>
			</div>
			
			<section class="details" id="accordion" data-id="23">
				<div class="accordion_content">
					<?php 
						if($current_product) {
							console.log($current_product);
							include 'products/'.$current_product.'.php';
						}
					?>
				</div>
			</section>
			
			<div class="image_wrap primers heavy-stains eliminate-odor" data-id="5" data-eliminate-odor="4" data-heavy-stains="3">
				<a class="section_title" href="/primer/kilz-original" data-column="first" id="kilz-original"><img src="/images/kilz_original.png"><p>KILZ&reg; ORIGINAL</p></a>
			</div>
			<div class="image_wrap primers heavy-stains eliminate-odor" data-id="6" data-eliminate-odor="5" data-heavy-stains="4">
				<a class="section_title" href="/primer/kilz-original-low-voc" data-column="second" id="kilz-original-low-voc"><img src="/images/kilz_original_low_voc.png"><p>KILZ&reg; ORIGINAL Low VOC</p></a>
			</div>
			<div class="image_wrap primers heavy-stains eliminate-odor" data-id="7" data-eliminate-odor="6" data-heavy-stains="5">
				<a class="section_title" href="/primer/kilz-original-aerosol" data-column="third" id="kilz-original-aerosol"><img src="/images/kilz_original_aerosol.png"><p>KILZ&reg; ORIGINAL Aerosol</p></a>
			</div>
			<div class="image_wrap primers heavy-stains end_column" data-id="8" data-heavy-stains="9">
				<a class="section_title" href="/primer/kilz-upshot-aerosol" data-column="fourth" id="kilz-upshot-aerosol"><img src="/images/kilz_upshot_aerosol.png"><p>KILZ UPSHOT&reg; Aerosol</p></a>
			</div>
			<div class="image_wrap primers moderate-stains eliminate-odor" data-id="9" data-elminate-odor="9" data-moderate-stains="1">
				<a class="section_title" href="/primer/kilz-odorless" data-column="first" id="kilz-odorless"><img src="/images/kilz_odorless.png"><p>KILZ ODORLESS&reg;</p></a>
			</div>
			<div class="image_wrap primers moderate-stains eliminate-odor" data-id="10" data-elminate-odor="10" data-moderate-stains="2">
				<a class="section_title" href="/primer/kilz-odorless-aerosol" data-column="second" id="kilz-odorless-aerosol"><img src="/images/kilz_odorless_aerosol.png"><p>KILZ ODORLESS&reg; Aerosol</p></a>
			</div>
			<div class="image_wrap primers fight-mold heavy-stains eliminate-odor promote-adhesion seal-surfaces" data-id="11" data-seal-surfaces="6" data-promote-adhesion="3" data-eliminate-odor="1" data-heavy-stains="6" data-fight-mold="4">
				<a class="section_title" href="/primer/kilz-complete" data-column="third" id="kilz-complete"><img src="/images/kilz_complete.png"><p>KILZ COMPLETE&reg;</p></a>
			</div>
			<div class="image_wrap primers fight-mold heavy-stains eliminate-odor promote-adhesion seal-surfaces end_column" data-id="12" data-seal-surfaces="7" data-promote-adhesion="4" data-eliminate-odor="2" data-heavy-stains="7" data-fight-mold="5">
				<a class="section_title" href="/primer/kilz-complete-low-voc" data-column="fourth" id="kilz-complete-low-voc"><img src="/images/kilz_complete_low_voc.png"><p>KILZ COMPLETE&reg; Low VOC</p></a>
			</div>
			<div class="image_wrap primers fight-mold heavy-stains eliminate-odor promote-adhesion seal-surfaces" data-id="13" data-seal-surfaces="8" data-promote-adhesion="5" data-eliminate-odor="3" data-heavy-stains="8" data-fight-mold="6">
				<a class="section_title" href="/primer/kilz-complete-aerosol" data-column="first" id="kilz-complete-aerosol"><img src="/images/kilz_complete_aerosol.png"><p>KILZ COMPLETE&reg; Aerosol</p></a>
			</div>
			<div class="image_wrap primers promote-adhesion" data-id="14" data-promote-adhesion="1">
				<a class="section_title" href="/primer/kilz-adhesion" data-column="second" id="kilz-adhesion"><img src="/images/kilz_adhesion.png"><p>KILZ&reg; ADHESION</p></a>
			</div>
			<div class="image_wrap primers seal-surfaces" data-id="15" data-seal-surfaces="9">
				<a class="section_title" href="/primer/kilz-gpi" data-column="third" id="kilz-gpi"><img src="/images/kilz_gpi.png"><p>KILZ&reg; General Purpose Interior</p></a>
			</div>
			<div class="image_wrap primers fight-mold end_column" data-id="16" data-fight-mold="8">
				<a class="section_title" href="/primer/kilz-gpe" data-column="fourth" id="kilz-gpe"><img src="/images/kilz_gpe.png"><p>KILZ&reg; General Purpose Exterior</p></a>
			</div>
			<div class="image_wrap primers heavy-stains eliminate-odor" data-id="17" data-eliminate-odor="8" data-heavy-stains="2">
				<a class="section_title" href="/primer/kilz-max-clear" data-column="first" id="kilz-max-clear"><img src="/images/kilz_max_clear.png"><p>KILZ MAX&reg; CLEAR</p></a>
			</div>
			<div class="image_wrap primers promote-adhesion seal-surfaces" data-id="18" data-seal-surfaces="5" data-promote-adhesion="8">
				<a class="section_title" href="/primer/kilz-klear" data-column="second" id="kilz-klear"><img src="/images/kilz_klear.png"><p>KILZ&reg; KLEAR&trade;</p></a>
			</div>
			<div class="image_wrap primers fight-mold" data-id="19" data-fight-mold="9">
				<a class="section_title" href="/primer/kilz-high-build" data-column="third" id="kilz-high-build"><img src="/images/kilz_high_build.png"><p>KILZ HIGH BUILD&reg;</p></a>
			</div>
			<div class="image_wrap primers fight-mold moderate-stains end_column" data-id="20" data-moderate-stains="4" data-fight-mold="7">
				<a class="section_title" href="/primer/kilz-clean-start" data-column="fourth" id="kilz-clean-start"><img src="/images/kilz_clean_start.png"><p>KILZ CLEAN START&reg;</p></a>
			</div>
			<div class="image_wrap primers hide-paint moderate-stains" data-id="21" data-moderate-stains="7" data-hide-paint="1">
				<a class="section_title" href="/primer/kilz-hide-all" data-column="first" id="kilz-hide-all"><img src="/images/kilz_hide_all.png"><p>KILZ&reg; HIDE-ALL&trade;</p></a>
			</div>
			<div class="image_wrap primers moderate-stains end_column" data-id="22" data-moderate-stains="8">
				<a class="section_title" href="/primer/kilz-kwik-start" data-column="second" id="kilz-kwik-start"><img src="/images/kilz_kwik_start.png"><p>KILZ&reg; KWIK-START&reg;</p></a>
			</div>
			
			<div class="image_wrap specialty" data-id="9" style="display: none;">
				<a class="section_title" href="/specialy/kilz-over-armor" data-column="first" id="kilz-over-armor"><img src="/images/kilz_over_armor.png"><p>KILZ OVER ARMOR&trade;</p></a>
			</div>
			<div class="image_wrap specialty" data-id="10" style="display: none;">
				<a class="section_title" href="/specialy/kilz-ceiling" data-column="second" id="kilz-ceiling"><img src="/images/kilz_ceiling.png"><p>KILZ&reg; Ceiling Paint with Stainblocking</p></a>
			</div>
			<div class="image_wrap specialty" data-id="11" style="display: none;">
				<a class="section_title" href="/specialy/kilz-color-change-ceiling" data-column="third" id="kilz-color-change-ceiling"><img src="/images/kilz_color_change_ceiling.png"><p>KILZ&reg; Color Change Ceiling Paint</p></a>
			</div>
			<div class="image_wrap specialty end_column" data-id="12" style="display: none;">
				<a class="section_title" href="/specialy/kilz-siding-fence-and-barn" data-column="fourth" id="kilz-siding-fence-and-barn"><img src="/images/kilz_siding_fence_and_barn.png"><p>KILZ&reg; Siding Fence and Barn Paint</p></a>
			</div>
			<div class="image_wrap specialty end_column" data-id="13" style="display: none;">
				<a class="section_title" href="/specialy/kilz-masonry-waterproofing" data-column="first" id="kilz-masonry-waterproofing"><img src="/images/kilz_masonry_waterproofing.png"><p>KILZ&reg; Masonry Waterpoofing Paint</p></a>
			</div>
		</div>
	</section>
	
	<script type="text/javascript">
		<?php if($current_product) : ?>
			var initialProduct = '<?php echo $current_product; ?>';
		<?php else : ?>
			var initialProduct = null;
		<?php endif; ?>
	</script>

<?php include 'footer.php';?>