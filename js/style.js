

$(".arrow").on("click", function (event) {
    $("html, body").animate(
        {
            scrollTop: $(project).offset().top
        },
        500 // 回頂部時間為 500 毫秒
    );
});