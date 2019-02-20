$(function() {
  $("#tableauViz").html("");
  $(initializeViz);
});

function initializeViz() {
  var placeholderDiv = document.getElementById("tableauViz");
  var url =
    "https://public.tableau.com/profile/ilan.zaitoun#!/vizhome/GeolocationDemo/TableauHeatMapDensity";
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
    embed: true,
    onFirstInteractive: function() {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}
