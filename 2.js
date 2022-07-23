// window.addEventListener('DOMContentLoaded', function() {
//   $('.gallery__checkbox-item__checkbox').change(function(){
//     $('input[name="' + $(this).attr('name') +'"]').removeAttr('checked');
//     $(this).prop('checked', true);
//   });
// });

// document.querySelectorAll('.gallery__checkbox-item__label').forEach(function(input1){
//   input1.addEventListener('click', function(e){
//     const path = e.currentTarget.dataset.path;

// document.querySelectorAll('.gallery__checkbox-item__label').forEach(function(label){
//   label.classList.remove('gallery__checkbox-item__label-active')});
//   e.currentTarget.classList.add('gallery__checkbox-item__label-active');

// document.querySelector(`[data-target="${path}"]`).classList.add('gallery__checkbox-item__label-active');
//   });
// });



// document.addEventListener("click", function(e2) {
//   let target = e2.target;
//   if (!target.closest(".gallery__container__first__checkbox-list")) {
//     document.querySelectorAll(".gallery__checkbox-item__label").forEach(ell => {
//         ell.classList.remove("gallery__checkbox-item__label-active");
//     });
//   }
// });


// document.querySelectorAll('.gallery__checkbox-item__label').forEach(function(){
// $('.gallery__checkbox-item__label').find('input[type=checkbox]').change(function() {
//   if (this.checked)
//     $(this).parent().addClass('gallery__checkbox-item__label-active');
//   else
//     $(this).parent().removeClass('gallery__checkbox-item__label-active');
// });
// });

