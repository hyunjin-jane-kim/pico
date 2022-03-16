$(function (e) {
    // close modal on click dimLayer
    $(document).on("click", "#dimLayer", function (e) {
        closeModal();
    });

    // 모달 닫기(공통)
    $(".close_modal").on("click", function () {
        closeModal();
    });

    // 반응형 이미지맵
    $('img[usemap]').rwdImageMaps();

    newVideoPos();
    $(window).resize(function () {
        newVideoPos();
    }).resize();

    setTimeout(function(){
        document.body.scrollTop = document.body.scrollHeight;
    }, 1000);

    // 영상팝업 클릭 이벤트(PC)
    $("#video_area, .academy_video").on("click", function () {
        $(".video_modal").addClass("active");
        addnDimLayer();
    });

    // 영상팝업 클릭 이벤트(Mobile)
    $("#video_area_m, .academy_video_m").on("click", function () {
        $(".video_modal").addClass("active");
        addnDimLayer();
    });

    // 영상팝업 날짜 받아오기(서버시간 X)
    var nowDate = new Date();
    var Year = nowDate.getFullYear();
    var Month = nowDate.getMonth() + 1;
    var Day = nowDate.getDate();
    var Today = Year + "-" + Month + "-" + Day;

    // PC 학회 영상
    var videoMain = {
        "2021-4-21" : "https://www.youtube.com/embed/tCyUB9poFso?autoplay=1&mute=1&controls=0&playlist=tCyUB9poFso&loop=1",
        "2021-4-22" : "https://www.youtube.com/embed/t17chd2SgcQ?autoplay=1&mute=1&controls=0&playlist=t17chd2SgcQ&loop=1",
        "2021-4-23" : "https://www.youtube.com/embed/hgfTzUxsGOU?autoplay=1&mute=1&controls=0&playlist=hgfTzUxsGOU&loop=1",
        "2021-4-24" : "https://www.youtube.com/embed/Fi4cy8XmVeo?autoplay=1&mute=1&controls=0&playlist=Fi4cy8XmVeo&loop=1",
    }

    var videoMain2 = [
        "https://www.youtube.com/embed/tCyUB9poFso?autoplay=1&mute=1&controls=0&playlist=tCyUB9poFso&loop=1",
        "https://www.youtube.com/embed/t17chd2SgcQ?autoplay=1&mute=1&controls=0&playlist=t17chd2SgcQ&loop=1",
        "https://www.youtube.com/embed/hgfTzUxsGOU?autoplay=1&mute=1&controls=0&playlist=hgfTzUxsGOU&loop=1",
        "https://www.youtube.com/embed/Fi4cy8XmVeo?autoplay=1&mute=1&controls=0&playlist=Fi4cy8XmVeo&loop=1",
        "https://www.youtube.com/embed/63bdCwJmRP4?autoplay=1&mute=1&controls=0&playlist=63bdCwJmRP4&loop=1",
        "https://www.youtube.com/embed/Fp9pNPdNwjI?autoplay=1&mute=1&controls=0&playlist=Fp9pNPdNwjI&loop=1",
        "https://www.youtube.com/embed/MbZ9qyY--CE?autoplay=1&mute=1&controls=0&playlist=MbZ9qyY--CE&loop=1",
        "https://www.youtube.com/embed/VfNVO6wwgDA?autoplay=1&mute=1&controls=0&playlist=VfNVO6wwgDA&loop=1",
        "https://www.youtube.com/embed/n9xhJrPXop4?autoplay=1&mute=1&controls=0&playlist=n9xhJrPXop4&loop=1",

        // "?autoplay=1&mute=1&controls=0&playlist=&loop=1"
    ];

    var random = Math.floor(Math.random() * videoMain2.length); //랜덤으로 페이지 접근시 연결할 url을 받는다.
    if(videoMain[Today]) {
        if(document.getElementById("videoMain") != null) {
            // document.getElementById("videoMain").src = videoMain[Today];
            document.getElementById("videoMain").src = videoMain2[random];
        }
    }

    // PC, Mobile 영상 팝업
    var videoPop = {
       "2022-03-07" : "https://www.youtube.com/embed/7gFeujufmZY?autoplay=1&mute=1"
    }

    if(videoPop[Today]) {
        if(document.getElementById("videoPop") != null) {
            // document.getElementById("videoPop").src = videoPop[Today];
            document.getElementById("videoPop").src = videoMain2[random];
        }
    }
});

// addnDimLayer
function addnDimLayer() {
    var createDiv = "<div id='dimLayer'></div>";
    $("body").append(createDiv).addClass("fixed");
}

// closeModal
function closeModal() {
    $(".modal_wrap").removeClass("active");
    $("#dimLayer").remove();
    $("body").removeClass("fixed");
}

// PC 학회 영상 위치 계산
function newVideoPos() {
    if($("#video_area").length > 0){
        setTimeout(function() {
            var newPos = $("#video_area").attr("coords")
            var newPosArr = newPos.split(",");
            var newWidth = Math.abs(newPosArr[2] - newPosArr[0]);
            var newHeight = Math.abs(newPosArr[3] - newPosArr[1]);
            $("#log").text(newPos);
            $(".academy_video").css({
                width: newWidth + "px",
                height: newHeight + "px",
                left: newPosArr[0] + "px",
                top: newPosArr[1] + "px",
            });
        }, 10);
    }
}

	