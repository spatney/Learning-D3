interface IViewport {
    height: number;
    width: number;
}

interface TeamInfo {
    name: string;
    color: string;
    volume: number;
}

interface CheerData {
    teamA: TeamInfo;
    teamB: TeamInfo;
}

enum UpdateType{
   Data,
   Viewport
}

interface VisualUpdateOptions {
    viewport: IViewport;
    data: CheerData;
    type: UpdateType
}

interface IVisual {
    update(options: VisualUpdateOptions)
}

/**
 * Implement a CheerMeter that is an IVisual
 */
class CheerMeter implements IVisual{ // 0db -> 140db
    
    private svg: d3.Selection<SVGElement>;
    
    constructor(element: HTMLElement) { 
        this.svg = d3.select(element).append('svg');
    }
    
    public update(options: VisualUpdateOptions){
        var data = [options.data.teamA, options.data.teamB];       
        let selection = this.svg.selectAll('.cheerText').data(data);
        this.svg.attr({
            height: options.viewport.height,
            width: options.viewport.width
        })
        selection.enter()
            .append('text')
            .classed('cheerText', true);
            
        selection
            .attr({
                x: function (d, i) {
                    return i * 150 + 150
                },
                y: function (d, i) {
                    return d.volume
                },
                fill: function (d, i) {
                    return d.color
                }
            }).text(function (d, i) {
                return d.name
            })
            
        selection.exit().remove();
    }
}