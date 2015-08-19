MktoForms2.onFormRender(function() {
  console.log("override styles ...")
  e = $(".register .mktoForm *")
  e.removeAttr("style")
  $("#mktoForm_3219").removeAttr("style")
  $("#job_title__c").val('Tester');
  $('#Industry').val('Software & Internet');
})

$(window).resize(function() {
  console.log("override styles ...")
  e = $(".register .mktoForm *")
  e.removeAttr("style")
  $("#mktoForm_3219").removeAttr("style")
})
