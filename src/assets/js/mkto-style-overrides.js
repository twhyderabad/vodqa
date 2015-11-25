MktoForms2.onFormRender(function() {
  console.log("override styles ...");
  e = $(".register .mktoForm *");
  e.removeAttr("style");
  $("#mktoForm_3823").removeAttr("style");
  $("#job_title__c").val('Tester');
  $('#Industry').val('Software & Internet');
  $('.mktoButton').html("Register").parent().after('<p class="tag">*No Charges Applicable.<br/>We recommend you to carry your laptops.</p>');
});

$(window).resize(function() {
  console.log("override styles ...");
  e = $(".register .mktoForm *");
  e.removeAttr("style");
  $("#mktoForm_3823").removeAttr("style")
});
