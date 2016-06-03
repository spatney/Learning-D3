//circleWithClick();
//circle_with_enter_update_exit();
//circle_with_enter_update_exit_animation();


var cm = new CheerMeter(document.getElementById('chart'));
setInterval(function () {
    let v1 = Math.random() * 140;
    let v2 = Math.random() * 140;

    cm.update({
        type: UpdateType.Data,
        viewport: {
            height: 600,
            width: 600
        },
        data: {
            teamA: {
                volume: v1,
                name: 'Seahawks',
                color: 'Blue'
            },
            teamB: {
                volume: v2,
                name: '49ers',
                color: 'red'
            }
        }
    });
}, 1000)