window.onload = function () {
  console.log('frontend.js is loaded');

  // homepage div fix
  // THIS SHOULD REALLY BE FUNCTIONIZED TO WORK IN BOTH DIRECTIONS
  let logoHeight = $('#logoDiv').height();
  console.log({ logoHeight });
  let formHeight = $('#formDiv').height();
  console.log({ formHeight });
  if ($(window).width() > 767) {
    console.log('window is big enough');
    if (logoHeight > formHeight) {
      console.log('logo is larger');
      let newTopMargin = (logoHeight - formHeight) / 2;
      console.log({ newTopMargin });
      $('#formDiv').attr('style', 'margin-top: ' + newTopMargin + 'px');
    } else {
      // something;
    }
  }

  // homepage time of day
  var hours = new Date().getHours();
  if (hours > 17) {
    // evening
    $('#dayTime').text('evening');
    console.log("It's evening");
  } else if (hours > 12) {
    // afternoon
    $('#dayTime').text('afternoon');
    console.log("It's afternoon");
  } else {
    // morning
    $('#dayTime').text('morning');
    console.log("It's morning");
  }

  $('.bodyClick').on('click', function () {
    if ($('#body0').hasClass('active')) {
      console.log('body0 is active');
    }
    if ($('#body1').hasClass('active')) {
      console.log('body1 is active');
    }
    if ($('#body2').hasClass('active')) {
      console.log('body2 is active');
    }
    if ($('#body3').hasClass('active')) {
      console.log('body3 is active');
    }
  });

  // capture clicks on task buttons
  $('.task-button').on('click', function (event) {
    event.preventDefault();
    console.log('HEY HOOMAN');
    let taskConfirmedName = $(this).text();
    console.log(taskConfirmedName);
    if (taskConfirmedName === 'None Yet') {
      // trigger sad modal
      $('#noneYetModal').modal().show();
    } else {
      // trigger happy modal
      $('#taskModalLongTitle').text(taskConfirmedName);
      $('#taskModal').modal().show();
    }
    // trigger div w/ task info in it using variable
    // ajax call to DB to mark task as complete
  });

  // boojiwoo clearfix but w/ js
  let boojHeight = $('#buildOutfit').height();
  console.log({ boojHeight });
  $('#buildImage').attr('style', 'height: ' + boojHeight + 'px');
};
