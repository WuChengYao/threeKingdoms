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
        ]
    },
    methods: {},
    watch: {
        message (e) {
            console.log(e);
            // console.log(this.dataList);
            this.show_val = [];
            var getDatas = this.dataList;
            getDatas.forEach(getData => {
                getData.name.split('').forEach(oneText => {
                    if (e.length === 1) {
                        if (e == oneText) {
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