var app = new Vue({
    el: '#app',
    data: {
        message: '',
        show_val: [],
        dataList: [
            {name:"昔日鳥兒", val:"喜鵲"},
            {name:"頭頂小紅帽", val:"公雞"},
            {name:"它家住在灣灣裡", val:"老鼠"},
            {name:"有面無口", val:"桌子"},
            {name:"遠看像頭牛", val:"午"},
            {name:"橫豎都是二", val:"井"},
            {name:"四方來合作", val:"器"},
            {name:"一星星", val:"螞蟻"},
            {name:"雨落在橫山", val:"雪"},
            {name:"層云隱去月", val:"屑"},
            {name:"有樣東西是個寶", val:"土"},
            {name:"一家人住兩宅", val:"蔥"},
            {name:"小王肩並肩", val:"琴"},
            {name:"黃金布", val:"香蕉"},
            {name:"草原一場大火", val:"草莓"},
            {name:"坐→坐", val:"青蛙"},
            {name:"坐→立", val:"馬"},
            {name:"坐→行", val:"魚"},
            {name:"坐→臥", val:"蛇"},
            {name:"妻有兒沒有", val:"女"},
            {name:"傘下沒有人", val:"蓮藕"},
            {name:"弟兄五六個", val:"大蒜"},
            {name:"嘴裡進蚊子", val:"張飛"},
            {name:"一只沒腳雞", val:"茶壺"},
            {name:"替爺爺趕馬", val:"孫策"},
            {name:"船板硬", val:"烏龜"},
            {name:"頭小頸長腳短", val:"烏龜"},
            {name:"黃包袱", val:"梨"},
            {name:"紫色樹開紫花", val:"茄子"},
            {name:"脫了紅袍子", val:"荔枝"}, //
            {name:"入門無犬", val:"問"},
            {name:"一人背弓", val:"夷"},
            {name:"開門日正中", val:"間"},
            {name:"二十四小時", val:"舊"},
            {name:"驛外斷橋邊", val:"驕"},
            {name:"乖", val:"乘人不備"},
            {name:"一", val:"接二連三"},
            {name:"田", val:"挖空心思"},
            {name:"有一點不准", val:"淮"},
            {name:"像雲不是雲", val:"霧"},
            {name:"馬行千里", val:"也"},
            {name:"有頭無頸", val:"魚"},
            {name:"一模一樣", val:"雷銅"},
            {name:"百無一是", val:"白"},
            {name:"鳳頭虎尾", val:"幾(几)"},
            {name:"內裡有人", val:"肉"},
            {name:"一口咬破衣", val:"哀"},
            {name:"一一入史冊", val:"更"},
            {name:"日月一齊來", val:"胆"},
            {name:"兩點天上來", val:"關(关)"},
            {name:"耳朵長尾巴短", val:"兔子"}, 
            {name:"無腳無手", val:"蛇"},
            {name:"駝背老公公", val:"蝦"},
            {name:"遠看像隻貓", val:"貓頭鷹"},
            {name:"一只罐兩個口", val:"燈籠"},
            {name:"猛將百余人", val:"火柴"},
            {name:"第二次見面", val:"觀(观)"},
            {name:"上下一体(體)", val:"卡"},
            {name:"四個晚上", val:"羅(罗)"},
            {name:"進水行不成", val:"衍"}, //
            {name:"湖邊相會", val:"湘"},
            {name:"嘴裡含玉", val:"国"},
            {name:"一人一心一張口", val:"恰"},
            {name:"牛牛多了兩條腿", val:"朱"}, //
            {name:"驛外斷橋邊", val:"驕"},
            {name:"乖", val:"乘人不備"},
            {name:"一", val:"接二連三"},
            {name:"田", val:"挖空心思"},
            {name:"有一點不准", val:"淮"},
            {name:"像雲不是雲", val:"霧"},
            {name:"馬行千里", val:"也"},
            {name:"有頭無頸", val:"魚"},
            {name:"一模一樣", val:"雷銅"},
            {name:"百無一是", val:"白"},
            {name:"鳳頭虎尾", val:"幾(几)"},
            {name:"內裡有人", val:"肉"},
            {name:"一口咬破衣", val:"哀"},
            {name:"一一入史冊", val:"更"},
            {name:"日月一齊來", val:"胆"},
            {name:"兩點天上來", val:"關(关)"},
            {name:"耳朵長尾巴短", val:"兔子"}, 
            {name:"無腳無手", val:"蛇"},
            {name:"駝背老公公", val:"蝦"},
            {name:"遠看像隻貓", val:"貓頭鷹"},
            {name:"一只罐兩個口", val:"燈籠"},
            {name:"猛將百余人", val:"火柴"},
            {name:"第二次見面", val:"觀(观)"},
            {name:"上下一体(體)", val:"卡"},
            {name:"四個晚上", val:"羅(罗)"},
            {name:"進水行不成", val:"衍"},//
        ]
    },
    methods: {},
    watch: {
        message (e) {
            // console.log(e);
            // console.log(this.dataList);
            this.show_val = [];
            var getDatas = this.dataList;
            getDatas.forEach(getData => {
                getData.name.split('').forEach(oneText => {
                    if (e.length === 1) {
                        if (e === oneText) {
                            return this.show_val.push(getData);
                        } else {
                            return;
                        }
                    } else {
                        e.split('').forEach(selectText => {
                            if (oneText == selectText) {
                                return this.show_val.push(getData);
                            } else {
                                return;
                            }
                        });
                        
                    } 
                });
            });
        }
    }
})