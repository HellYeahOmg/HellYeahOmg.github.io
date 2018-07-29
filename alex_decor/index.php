<?php get_header() ?>
	<section class="credo">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="credo-h1">
						<h1><?php echo get_bloginfo('description'); ?></h1>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="about" id='about'>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="about-h2">
						<h2><?php echo get_cat_name(2); ?></h2>
					</div>
				</div>
					<?php
					$id=2; // ID заданной рубрики
					$n=1;   // количество выводимых записей
					$recent = new WP_Query("cat=$id&showposts=$n"); 
					while($recent->have_posts()) : $recent->the_post();
					?>	
					<div class="col-md-10 offset-md-1">
				<?php the_content(); ?> 
					<?php the_post_thumbnail(); ?>
				</div>
				<?php endwhile; ?>
			</div>
		</div>
	</section>

	<section class="stages" id='stages'>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="stages-h2">
						<h2><?php echo get_cat_name(3); ?></h2>
					</div>
					<div class="stages-text">
						<p><?php echo category_description(3); ?></p>
					</div>
				</div>
			</div>
			<div class="row">
			<?php
				$id=3; // ID заданной рубрики
				$n=6;   // количество выводимых записей
				$recent = new WP_Query("cat=$id&showposts=$n&order=ASC");
				while($recent->have_posts()) : $recent->the_post();
				?>
					<div class="col-md-4">
					<div class="stages-item">
						<?php the_post_thumbnail(); ?>
						<span class="caption"><?php the_title(); ?></span>
						<?php the_content(); ?>
					</div>
				</div>
<?php endwhile; ?>
			</div>
		</div>
	</section>

	<section class="solutions" id='solutions'>
		<div class="container">
			<div class="row">
				<div class="col-md-10 offset-md-1">
					<div class="solution-text">
						<h2><?php echo get_cat_name(4); ?>.</h2>
						<?php echo category_description(4); ?>
					</div>
				</div>
			</div>
			<div class="row">

			<?php
			$id=4; // ID заданной рубрики
			$n=3;   // количество выводимых записей
			$recent = new WP_Query("cat=$id&showposts=$n&order=ASC");
			while($recent->have_posts()) : $recent->the_post();
			?>
			<div class="col-lg-6 col-xl-4">
								<div class="solutions-item">
									<?php 
			the_post_thumbnail( $size, $attr ); ?>
						<span><?php the_title(); ?></span>
					</div>
				</div>
				<?php endwhile; ?>

			</div>
		</div>
	</section>

	<section class="partners" id='partners'>
		<div class="container">
			<div class="row">
				<div class="col-md-12 offset-md-0">
					<h2><?php echo get_cat_name(5); ?></h2>
					<div class="owl-carousel">
					<?php
						$id=5; // ID заданной рубрики
						$n=20;   // количество выводимых записей
						$recent = new WP_Query("cat=$id&showposts=$n&order=ASC");
						while($recent->have_posts()) : $recent->the_post();
						?>
						<div><?php the_post_thumbnail(); ?></div>
						<?php endwhile; ?>
					</div>
				</div>
			</div>
		</div>
	</section>

	<article class="big_image" id='done_projects'>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div>
						<a href="#" class="button">Выполненные проекты</a>
					</div>

				</div>
			</div>
		</div>
	</article>

<?php get_footer() ?>