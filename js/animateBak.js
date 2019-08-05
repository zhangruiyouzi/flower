function animate(div,obj) {
    //console.log(cb)

    //{left:100;top:200}
    //{left:100}
    //{left:100}
    clearInterval(div.timer);

    div.timer =  setInterval(function () {
            var flag = true;//假设已经到了目的地
            //1-0.5
            //100  50
            for(var key in obj){
                // console.log(key)//left   top   getStyle['left']
                // console.log(obj[key])//300
                var target = obj[key];
                if(key == 'opacity'){
                    var speed = (target - parseFloat(getStyle(div)[key]))*100/8;
                   // console.log(speed,'speed1')
                    speed = (speed>0? Math.ceil(speed): Math.floor(speed));
                    //console.log(speed,'speed2')

                    var op = parseFloat(getStyle(div)[key]) + speed/100;
                   // console.log(op)

                    div.style[key]=  op;
                    if(parseFloat(getStyle(div)[key]) !=target ){
                        flag = false;
                    }

                }else{
                    var speed = (target - parseInt(getStyle(div)[key]))/8;
                    speed = (speed>0? Math.ceil(speed): Math.floor(speed));
                    div.style[key]= parseInt(getStyle(div)[key]) + speed +'px';
                    if(parseInt(getStyle(div)[key]) !=target ){
                        flag = false;
                    }
                }
            }

            //必须等到所有的 属性都到达目的地 才能结束定时器
            if(flag == true){
                clearInterval(div.timer);
            }

        },30);
}
