interface IViewport {
    height: number;
    width: number;
}

interface TeamInfo {
    name: string;
    color: string;
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
class CheerMeter {
    constructor(element: HTMLElement) { }
}