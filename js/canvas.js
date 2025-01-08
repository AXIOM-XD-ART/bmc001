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
        // Populating the Problem section
        $("#bizcanvas td").eq(0).find("p").text(data.problem.description);

        // Populating the Solution section
        $("#bizcanvas td").eq(2).find("p").text(data.solution.description);
        
        // Populating the Value Proposition section
        $("#bizcanvas td").eq(4).find("p").text(data.valueProposition.description);
        $("#bizcanvas td").eq(4).find("h5").text(data.valueProposition.highLevelConcept);

        // Populating the Unfair Advantage section
        $("#bizcanvas td").eq(6).find("p").text(data.unfairAdvantage.description);

        // Populating the Customer Segments section
        $("#bizcanvas td").eq(8).find("p:visible\).text(data.customerSegments.description);
        $("#bizcanvas td").eq(8).find("h5").next().text(data.customerSegments.earlyAdopters.join(', '));
        
        // Populating the Key Metrics section
        $("#bizcanvas td").eq(3).find("p").text(data.keyMetrics.metrics.join(', '));
        
        // Populating the Channels section
        $("#bizcanvas td").eq(5).find("p").text(data.channels.description);

        // Populating the Cost Structure section
        $("#bizcanvas td").eq(10).find("p").text(data.costStructure.costs.join(', '));
        
        // Populating the Revenue Streams section
        $("#bizcanvas td").eq(11).find("p").text(data.revenueStreams.streams.join(', '));
    }).fail(function() {
        console.error("An error occurred while loading the data.");
    });
});
