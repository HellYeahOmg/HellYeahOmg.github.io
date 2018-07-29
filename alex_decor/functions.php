<?php
function theme_name_scripts() {
    wp_enqueue_style( 'style-css', get_stylesheet_uri() );
    wp_enqueue_script( 'scr', get_template_directory_uri() . '/js/scripts.min.js');
    wp_enqueue_script( 'js', get_template_directory_uri() . '/js/common.js');
    wp_enqueue_style( 'owl-style', get_template_directory_uri() . '/libs/owl/owl.carousel.min.css');
    wp_enqueue_script( 'owl-js', get_template_directory_uri() . '/libs/owl/owl.carousel.min.js');
    wp_enqueue_style( 'hamburgers-css', get_template_directory_uri() . "/libs/hamburgers/hamburgers.min.css" );
    wp_enqueue_style( 'animate-css', get_template_directory_uri() . '/libs/animate/animate.css');
}
add_action( 'wp_enqueue_scripts', 'theme_name_scripts' ); 

add_theme_support('post-thumbnails');

add_filter( 'widget_title', 'hide_widget_title' );
function hide_widget_title( $title ) {
    if ( empty( $title ) ) return '';
    if ( $title[0] == '!' ) return '';
    return $title;
}


 register_sidebar(array(
    'name' => 'Footer Widget 1',
    'id' => 'footer-1',
    'before_widget' => '',
    'after_widget' => '',
    'before_title' => '',
    'after_title' => '',
    ));

 register_sidebar(array(
    'name' => 'Footer Widget 2',
    'id' => 'footer-2',
    'before_widget' => '',
    'after_widget' => '',
    'before_title' => '',
    'after_title' => '',
    ));

 register_sidebar(array(
    'name' => 'Footer Widget 3',
    'id' => 'footer-3',
    'before_widget' => '',
    'after_widget' => '',
    'before_title' => '',
    'after_title' => '',
    ));