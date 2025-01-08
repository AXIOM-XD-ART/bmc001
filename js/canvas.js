$(document).ready(function() {
  $('a[rel=popover]').click(function() {
    $(this).popover('toggle');
  });
  $('a[rel=popover]').hover(function() {
    $(this).popover('show');
  }, function() {
    $(this).popover('hide');
  });
$.getJSON('data.json', function(data) {
        // Accessing and filling sections
        $("#bizcanvas td").eq(0).find("p").text(data.problem.description);

        $("#bizcanvas td").eq(2).find("p").text(data.solution.description);

        $("#bizcanvas td").eq(4).find("p").text(data.valueProposition.description);
        $("#bizcanvas td").eq(4).find("h5").text(data.valueProposition.highLevelConcept);

        $("#bizcanvas td").eq(6).find("p").text(data.unfairAdvantage.description);

        $("#bizcanvas td").eq(8).find("p").text(data.customerSegments.description);
        $("#bizcanvas td").eq(8).find("h5").next().text(data.customerSegments.earlyAdopters.join(', '));
        
        $("#bizcanvas td").eq(3).find("p").text(data.keyMetrics.metrics.join(', '));
        
        $("#bizcanvas td").eq(5).find("p").text(data.channels.description);

        $("#bizcanvas td").eq(10).find("p").text(data.costStructure.costs.join(', '));
        
        $("#bizcanvas td").eq(11).find("p").text(data.revenueStreams.streams.join(', '));
    }).fail(function() {
        console.error("An error occurred while loading the data.");
    });
});
