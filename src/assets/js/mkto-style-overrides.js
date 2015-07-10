console.log("override styles ...")
MktoForms2.onFormRender(function() {
  e = $(".register .mktoForm *")
  e.removeAttr("style")
})
