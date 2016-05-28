
let animation = 1000;
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
    }).on('click', function () {
        d3.select(this)
            .transition()
            .duration(animation)
            .ease('bounce')
            .attr('fill', 'red')
            .attr('r', 10)
    })

svg
    .select('circle')
    .transition()
    .duration(animation)
    .ease('elastic')
    .attr('fill', 'hotpink')
    .attr('r', 200)
