$(document).ready(function() {
    fetchData();
});

$("#handphone_form").submit(function () {
    let urlSubmit = base_url_backend();
    if(!(confirm("Are you sure you want to submit this product?"))) {
        return false;
    } else {
        let itemID = $("#item_id").val();
        let productName = $("#product_name").val();
        let productDescription = $("#product_description").val();
        let productImage = $("#product_image").prop("files")[0];

        let formData = new FormData();
        formData.append("product_name", productName);
        formData.append("product_description", productDescription);

        if(itemID === "") {
            urlSubmit += "/add";
            formData.append("product_image_filename", productImage);
        } else {
            formData.append("item_id", itemID);
            if(productImage === undefined) {
                formData.append("is_image_updated", "N");
            } else {
                formData.append("is_image_updated", "Y");
                formData.append("product_image_filename", productImage);
            }

            urlSubmit += "/edit";
        }

        $.ajax({
            url: urlSubmit,
            method: "POST",
            data: formData,
            dataType: "json",
            contentType: false,
            cache: false,
            processData: false,
            success: function (responseAddHandphone) {
                alert(responseAddHandphone.message);
                $("#handphone_form").trigger("reset");
                $("#item_id").val("");
                fetchData();
            }
        });
    }
});

$("#cancel_btn").click(function () {
    $("#handphone_form").trigger("reset");
    $("#item_id").val("");
    $("#product_image").prop("required", true);
});

$(document).on("click", ".edit_handphone_data", function() {
    let itemID = $(this).data("handphone-id");
    $("#product_image").prop("required", false);

    $.ajax({
        url: base_url_backend() + "/read_by_id?item_id="+itemID,
        method: "GET",
        dataType: "json",
        success: function (responseFetchSingleHandphone) {
            let handphoneData = responseFetchSingleHandphone.data;
            $("#item_id").val(handphoneData.item_id);
            $("#product_name").val(handphoneData.product_name);
            $("#product_description").val(handphoneData.product_description);
        }
    });
});

$(document).on("click", ".delete_handphone_data", function() {
    let itemID = $(this).data("handphone-id");
    if(confirm("Are you sure you want to delete this product?")) {
        $.ajax({
            url: base_url_backend() + "/delete",
            method: "POST",
            data: {
                item_id: itemID
            },
            dataType: "json",
            success: function (responseDeleteHandphone) {
                alert(responseDeleteHandphone.message);
                fetchData();
            }
        });
    }
});


function fetchData() {
    $.ajax({
        url: base_url_backend()+"/read_all",
        method: "GET",
        dataType: "json",
        success: function (fetchAllHandphone) {
            let handphoneData = fetchAllHandphone.data;

            $("#fetch_handphone_table").empty();
            if(handphoneData.length < 0) {
                // If no data
                $("#fetch_handphone_table").append(
                    '<tr><td colspan="5" class="text-center">No data available</td></tr>'
                );
            } else {
                // If there is data
                for(let i = 0; i < handphoneData.length; i++) {
                    $("#fetch_handphone_table").append(
                        '<tr>' +
                            '<td>' + (i+1) + '</td>' +
                            '<td>' + handphoneData[i].product_name + '</td>' +
                            '<td>' + handphoneData[i].product_description + '</td>' +
                            '<td>' +
                                '<img src="http://34.34.220.202/cdn_mini_bootcamp/' + handphoneData[i].product_image_filename + '" alt="Product Image" style="width: 250px; height: 250px;">' +
                            '</td>' +
                            '<td>' +
                                '<button class="btn btn-primary edit_handphone_data" data-handphone-id="'+handphoneData[i].item_id+'">Edit</button>' +
                                '<button class="btn btn-danger delete_handphone_data" data-handphone-id="'+handphoneData[i].item_id+'">Delete</button>' +
                            '</td>' +
                        '</tr>'
                    );
                }
            }
        }
    });
}
