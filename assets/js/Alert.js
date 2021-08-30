Swal.bindClickHandler();

Swal.mixin({
  toast: true,
}).bindClickHandler('data-swal-toast-template');

// document.getElementById('tinaxubio').addEventListener('click', () => {
//   Swal.fire({
//     title: 'Tina Xu',
//     text: `Tina Xu is a grade 11 AP student at Sir John. A Macdonald Secondary School.
//     She
//     enjoys
//     learning about math and sciences, and she is eager to share her knowledge
//     with
//     students to
//     motivate them in their learning and achieve their academic goals. As a
//     tutor,
//     Tina can
//     provide effective assistance and advice to help students improve in their
//     fields. Outside of
//     school, she connects with various community directors through her
//     organization,
//     Supportive
//     Teens, to host and organize local events such as fundraisers. In Tina’s
//     spare
//     time, she
//     loves to play tennis, badminton, basketball and hangout with her friends.
//     She is
//     excited to
//     start tutoring her students! `,
//     confirmButtonText: 'Cool',
//   });
// });
