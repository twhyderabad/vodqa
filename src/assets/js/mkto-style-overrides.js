MktoForms2.onFormRender(function() {
  console.log("override styles ...");
  e = $(".register .mktoForm *");
  e.removeAttr("style");
  $("#mktoForm_3823").removeAttr("style");
  $("#job_title__c").val('Tester');
  $('#Industry').val('Software & Internet');
  $('.mktoButton').html("Register").parent().after('<span class="tag">*No Charges Applicable</span>');
});

$(window).resize(function() {
  console.log("override styles ...");
  e = $(".register .mktoForm *");
  e.removeAttr("style");
  $("#mktoForm_3823").removeAttr("style")
});
