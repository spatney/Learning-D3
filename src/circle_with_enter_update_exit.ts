function circle_with_enter_update_exit() {
    let svg = d3.select('#chart')
        .append('svg')
        .attr('height', 600)
        .attr('width', 600);
        
    let data = [10, 20, 30, 40, 50, 60, 70, 80];

    function update() {      
        let sample = Math.random() * data.length;

        data = (<any>_).sampleSize(data, sample);
        console.log(data);
        let selection = svg.selectAll('.happyCircles').data(data);

        selection.enter()
            .append('circle')
            .classed('happyCircles', true);

        selection
            .attr({
                cx: (d, i) => 100 * (i + 1),
                cy: 100,
                r: d => d
            })

        selection.exit().remove();
    };

    svg.on('click', () => update());
}