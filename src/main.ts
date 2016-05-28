let svg = d3.select('#chart')
    .append('svg')
    .attr('height', 600)
    .attr('width', 600);

svg
    .append('circle')
    .attr({
        'r': 0,
        'cx': 300,
        'cy': 300,
        'fill': 'green'
    })
    .transition()
    .duration(2000)
    .ease('elastic')
    .attr('fill', 'hotpink')
    .attr('r',200)
    .transition()
    .duration(2000)
    .ease('bounce')
    .attr('fill', 'red')
    .attr('r',10)