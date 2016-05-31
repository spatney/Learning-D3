
let animation = 1000;
let expanded = true;
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
        if (expanded) {
            collapse(d3.select(this));
        } else {
            expand(d3.select(this));
        }
        expanded = !expanded;

    })

expand(svg.select('circle'));

function expand(node: d3.Selection<SVGElement>) {
    node
        .transition()
        .duration(animation)
        .ease('elastic')
        .attr('fill', 'hotpink')
        .attr('r', 200)
}

function collapse(node: d3.Selection<SVGElement>) {
    node
        .transition()
        .duration(animation)
        .ease('bounce')
        .attr('fill', 'red')
        .attr('r', 20)
}
