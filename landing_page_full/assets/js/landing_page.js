$(document).ready(function() {
    fetchGridPhone();
});

$("#refresh_product_btn").click(function() {
    fetchGridPhone();
});

function fetchGridPhone() {
    $.ajax({
        url: base_url_backend()+"/read_all",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        success: function (responseFetchAllHandphone) {
            let handphoneData = responseFetchAllHandphone.data;
            $("#fetch_grid_handphone").empty();
            for(let i = 0; i < handphoneData.length; i++) {
                $("#fetch_grid_handphone").append(
                    '<div class="col d-flex align-items-stretch">' +
                        '<div class="card shadow-sm flex-grow-1">' +
                            '<img class="bd-placeholder-img card-img-top" src="http://34.34.220.202/cdn_mini_bootcamp/'+handphoneData[i].product_image_filename+'"/>' +
                            '<div class="card-body">' +
                                '<h4 class="fw-bold">'+handphoneData[i].product_name+'</h4>' +
                                '<p class="card-text">'+handphoneData[i].product_description+'</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                );
            }
        }
    });
}