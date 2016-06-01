function circle_with_enter_update_exit_animation() {
    let duration = 3000;
    let svg = d3.select('#chart')
        .append('svg')
        .attr('height', 600)
        .attr('width', 600);

    function update() {
        let data = [10, 20, 30, 40, 50, 60, 70, 80];
        let math = Math.random() * data.length;

        data = (<any>_).sampleSize(data, math);
        console.log(data);
        let selection = svg.selectAll('.happyCircles').data(data);

        selection.enter()
            .append('circle')
            .attr({
                cx: (d, i) => 100 * (i + 1),
                cy: 0,
                r: d => d
            })
            .style('fill', 'lime')
            .classed('happyCircles', true);

        selection
            .transition()
            .duration(duration)
            .style('fill', 'purple')
            .attr({
                cx: (d, i) => 100 * (i + 1),
                cy: 300,
                r: d => d
            })

        selection.exit()
            .style('fill','red')
            .transition()
            .duration(duration)
            .attr({
                cy: -300,
            })
            .remove();
    };

   svg.on('click', () => update());
   
   //setInterval(()=>update(), duration + 100);
}