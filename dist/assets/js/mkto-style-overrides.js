console.log("override styles ...")
MktoForms2.onFormRender(function() {
  e = $(".register .mktoForm *")
  e.removeAttr("style")
  $("#mktoForm_3106").removeAttr("style")
})
