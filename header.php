<?php ?> 
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
	<?php 
		$protocol = $_SERVER['HTTPS'] == '' ? 'http://' : 'https://';
		$webroot = $protocol . $_SERVER['HTTP_HOST'] . '/';
	?>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo $pageTitle; ?></title>
        <meta name="description" content="<?php echo $pageDescription; ?>">
        <meta name="keywords" content="<?php echo $pageKeywords; ?>">
        <meta name="viewport" content="width=device-width">
        
        <link rel="shortcut icon" href="<?php echo $webroot; ?>images/favicon.ico" type="image/x-icon">
		<link rel="icon" href="<?php echo $webroot; ?>images/favicon.ico" type="image/x-icon">

        <link rel="stylesheet" href="<?php echo $webroot; ?>css/main.css">
        
        
        <script type="text/javascript" src="<?php echo $webroot; ?>js/src/vendor/modernizr-2.6.2.min.js"></script>
        <script type="text/javascript" src="//use.typekit.net/bzg1wef.js"></script>
		<script>try{Typekit.load();}catch(e){}</script>
	    <script src="https://maps.googleapis.com/maps/api/js"></script>

		
        <?php if ( (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== false) && (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE 9') !== false)  ) : ?>
        <link rel="stylesheet" href="<?php echo $webroot; ?>js/vendor/idangerous.swiper.css">
        <?php else: ?>
        <link rel="stylesheet" href="<?php echo $webroot; ?>css/swiper.min.css">
        <?php endif; ?>
        
        <script src="<?php echo $webroot; ?>js/vendor/picturefill.min.js" async></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="oldies">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <!--[if gte IE 9]>
			<style type="text/css">.gradient_btn {filter: none;} </style>
		<![endif]-->

        <div class="mobile_menu" style="left: -336px;">
	        <ul>
		        <li class="<?php if ($section == "home"){ echo "active"; } ?>"><a class="home <?php if ($section == "home"){ echo "active"; } ?>" href="/"></a></li>
		        <li class="<?php if ($section == "home"){ echo "active"; } ?>"><a class="why <?php if ($section == "home"){ echo "active"; } ?>" href="/#learn-more">WHY PRIMER?</a></li>
		        <li class="<?php if ($section == "products"){ echo "active"; } ?>"><a class="products <?php if ($section == "products"){ echo "active"; } ?>" href="/products.php">PRODUCTS</a></li>
		        <li class="<?php if ($section == "where"){ echo "active"; } ?>"><a class="where <?php if ($section == "where"){ echo "active"; } ?>" href="/stores.php">WHERE TO BUY</a></li>
		        <li class="<?php if ($section == "newsletter"){ echo "active"; } ?>"><a class="newsletter <?php if ($section == "newsletter"){ echo "active"; } ?>" href="/newsletter.php">Connect to Kilz</a></li>
	        </ul>
        </div>

        <div class="site_wrap"><!-- closes in footer.php -->
			<div id="global_header">
				<a class="logo" href="/">
					<img class="desktop_logo" src="<?php echo $webroot; ?>images/logo.png" alt="" />
					<img class="mobile_logo" src="<?php echo $webroot; ?>images/mobile-logo.png" alt="" />
				</a>

				<div class="menu">
					<ul>
						<li><a class="why" href="/#learn-more">Why primer?</a></li>
						<li><a class="products <?php if ($section == "products"){ echo "active"; } ?>" href="/products.php">Products</a></li>
						<li><a class="where <?php if ($section == "where"){ echo "active"; } ?>" href="/stores.php">Where to buy</a></li>
						<li><a class="newsletter <?php if ($section == "newsletter"){ echo "active"; } ?>" href="/newsletter.php">Connect to Kilz</a></li>
					</ul>
				</div>
				<img class="mobile_menu_icon" src="<?php echo $webroot; ?>images/mobile-menu-icon.png" alt=""/>
			</div>

			<div class="content"> <!-- closes in footer.php -->