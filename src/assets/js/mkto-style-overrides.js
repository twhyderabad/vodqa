MktoForms2.onFormRender(function() {
  console.log("override styles ...");
  e = $(".register .mktoForm *");
  e.removeAttr("style");
  $("#mktoForm_3823").removeAttr("style");
  $("#job_title__c").val('Tester');
  $('#Industry').val('Software & Internet');
  $('.mktoButton').html("Register").after('<br/><span class="tag">*No Charges Applicable.</span><br/><span class="tag">Please carry your laptops (not mandatory).</span>');
  $('.mktoButton').parent().addClass('actions');
});

$(window).resize(function() {
  console.log("override styles ...");
  e = $(".register .mktoForm *");
  e.removeAttr("style");
  $("#mktoForm_3823").removeAttr("style")
});
