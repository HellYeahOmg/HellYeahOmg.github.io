	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-3 offset-md-1 offset-lg-0">
					<div class="footer-item first">
					<img src="<?php bloginfo('template_url') ?>/img/footer-phone.png" alt="">
					<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-1') ) : ?>
   				 <?php endif; ?>
						
					</div>
				</div>
				<div class="col-md-4 offset-lg-1">
					<div class="footer-item">
						<img src="<?php bloginfo('template_url') ?>/img/footer-geo.png" alt="">
						<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-2') ) : ?>
   				 <?php endif; ?>
					</div>

				</div>
				<div class="col-md-3 offset-lg-1">
					<div class="footer-item last">
						<img src="<?php bloginfo('template_url') ?>/img/footer-mail.png" alt="">
						<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-3') ) : ?>
   				 <?php endif; ?>
					</div>

				</div>
			</div>
			<div class="row">

				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Написать нам</button>
			</div>
			<div class="row">
				<div class="social">
					<img src="<?php bloginfo('template_url') ?>/img/vk.png" alt="">
					<img src="<?php bloginfo('template_url') ?>/img/instagram.png" alt="">
					<img src="<?php bloginfo('template_url') ?>/img/youtube.png" alt="">
				</div>
			</div>
			<div class="row">
				<div class="copy">
					<span>© 2018 ALEX DECOR Шторы Карнизы Жалюзи</span>
				</div>
			</div>
		</div>
	</footer>

<?php wp_footer(); ?>
<!-- Модальное окно -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  	<div class="modal-dialog" role="document">
    	<div class="modal-content">
      		<div class="modal-header">
        		<h5 class="modal-title" id="exampleModalLabel">Напишите нам!</h5>
        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          			<span aria-hidden="true">&times;</span>
        		</button>
      		</div>
      		<div class="modal-body">
        		<form action="" method="post">
							<label for="name">Имя</label>
							<input type="text" name="name" id="name" require>
							<label for="telephone">Телефон</label>
							<input type="tel" name="telephone" id="telephone" require>
							<label for="comment">Комментарий</label>
							<textarea name="comment" id="comment" rows="10" require></textarea>
							<button type="button" class="btn btn-primary">Отправить</button>
						</form>
      		</div>
      		<div class="modal-footer">
						
        		<button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
      		</div>
    	</div>
  	</div>
</div>
</body>

</html>