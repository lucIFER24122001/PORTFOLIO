$(document).ready(function() {

$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav= document.querySelector('.mobile-nav');
let home = document.querySelector('.home');
let about = document.querySelector('.about')
let skills = document.querySelector('.skills')
let works = document.querySelector('.works')
let contact = document.querySelector('.contact')
hamberger.addEventListener('click',function()
{
  mobileNav.classList.add('open');
});

times.addEventListener('click',function()
{
    mobileNav.classList.remove('open');
});

home.addEventListener('click',function()
{
    mobileNav.classList.remove('open');
});

about.addEventListener('click',function()
{
    mobileNav.classList.remove('open');
});

skills.addEventListener('click',function()
{
    mobileNav.classList.remove('open');
});

works.addEventListener('click',function()
{
    mobileNav.classList.remove('open');
});
contact.addEventListener('click',function()
{
    mobileNav.classList.remove('open');
});



});